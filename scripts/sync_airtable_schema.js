#!/usr/bin/env node
/**
 * Sync Quince Creative Operating System schema to Airtable via Metadata API.
 *
 * Usage:
 *   AIRTABLE_PAT=patXXX node scripts/sync_airtable_schema.js
 *   AIRTABLE_PAT=patXXX node scripts/sync_airtable_schema.js --dry-run
 *
 * Requires PAT scopes: schema.bases:read, schema.bases:write
 * Base: appMyEhNaEQctLmGp
 *
 * Add-only: never deletes tables or fields.
 */

const { BASE_ID, TABLES } = require("../airtable/schema");

const PAT = process.env.AIRTABLE_PAT || process.env.AIRTABLE_API_KEY;
const DRY_RUN = process.argv.includes("--dry-run");
const API = "https://api.airtable.com/v0/meta/bases";

if (!PAT) {
  console.error(
    "Missing AIRTABLE_PAT. Create a Personal Access Token at https://airtable.com/create/tokens\n" +
      "Scopes needed: schema.bases:read, schema.bases:write\n" +
      "Then run: AIRTABLE_PAT=patXXX node scripts/sync_airtable_schema.js"
  );
  process.exit(1);
}

async function api(path, { method = "GET", body } = {}) {
  const res = await fetch(`${API}/${BASE_ID}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${PAT}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text };
  }
  if (!res.ok) {
    throw new Error(`${method} ${path} → ${res.status}: ${JSON.stringify(data)}`);
  }
  return data;
}

function fieldPayload(field, tableMap) {
  const payload = { name: field.name, type: field.type };
  if (field.description) payload.description = field.description;

  if (field.type === "singleSelect" || field.type === "multipleSelects") {
    payload.options = { choices: field.options };
  } else if (field.type === "date") {
    payload.options = field.options;
  } else if (field.type === "number" || field.type === "currency") {
    payload.options = field.options;
  } else if (field.type === "formula") {
    payload.options = field.options;
  } else if (field.type === "multipleRecordLinks") {
    const linkedId = tableMap[field.linkedTableName];
    if (!linkedId) throw new Error(`Linked table not found: ${field.linkedTableName}`);
    payload.options = { linkedTableId: linkedId };
  }
  return payload;
}

async function getTables() {
  const data = await api("/tables");
  return data.tables || [];
}

async function createTable(tableDef) {
  const primaryField = tableDef.fields.find((f) => f.name === tableDef.primaryField);
  if (!primaryField || primaryField.type !== "singleLineText") {
    throw new Error(`Primary field must be singleLineText: ${tableDef.name}`);
  }

  const body = {
    name: tableDef.name,
    fields: [{ name: primaryField.name, type: "singleLineText" }],
  };

  if (DRY_RUN) {
    console.log(`[dry-run] Would create table: ${tableDef.name}`);
    return { id: `dry_${tableDef.name}`, name: tableDef.name };
  }

  const result = await api("/tables", { method: "POST", body });
  console.log(`✓ Created table: ${tableDef.name}`);
  return result;
}

async function createField(tableId, field, tableMap) {
  const body = fieldPayload(field, tableMap);

  if (DRY_RUN) {
    console.log(`  [dry-run] Would add field: ${field.name} (${field.type})`);
    return;
  }

  await api(`/tables/${tableId}/fields`, { method: "POST", body });
  console.log(`  ✓ Added field: ${field.name}`);
}

async function updateSelectOptions(tableId, fieldId, field) {
  if (DRY_RUN) {
    console.log(`  [dry-run] Would update options: ${field.name}`);
    return;
  }

  await api(`/tables/${tableId}/fields/${fieldId}`, {
    method: "PATCH",
    body: {
      options: { choices: field.options },
    },
  });
  console.log(`  ✓ Updated options: ${field.name}`);
}

async function syncLinkedRecordsFields(tables, tableMap) {
  for (const tableDef of TABLES) {
    const existing = tables.find((t) => t.name === tableDef.name);
    if (!existing) continue;

    for (const field of tableDef.fields) {
      if (field.type !== "multipleRecordLinks") continue;
      const hasField = existing.fields.find((f) => f.name === field.name);
      if (hasField) continue;

      await createField(existing.id, field, tableMap);
      existing.fields.push({ name: field.name });
    }
  }
}

async function main() {
  console.log(`Syncing schema to base ${BASE_ID}${DRY_RUN ? " (dry-run)" : ""}…\n`);

  let tables = await getTables();
  const tableMap = Object.fromEntries(tables.map((t) => [t.name, t.id]));

  // Pass 1: create missing tables (primary field only)
  for (const tableDef of TABLES) {
    if (!tableMap[tableDef.name]) {
      const created = await createTable(tableDef);
      tableMap[tableDef.name] = created.id;
    }
  }

  if (!DRY_RUN) tables = await getTables();

  // Pass 2: add missing fields (skip links first)
  for (const tableDef of TABLES) {
    const existing = tables.find((t) => t.name === tableDef.name);
    if (!existing) {
      console.warn(`⚠ Table missing after create: ${tableDef.name}`);
      continue;
    }

    const existingNames = new Set(existing.fields.map((f) => f.name));
    console.log(`\nTable: ${tableDef.name}`);

    for (const field of tableDef.fields) {
      if (field.type === "multipleRecordLinks") continue;

      const match = existing.fields.find((f) => f.name === field.name);
      if (!match) {
        try {
          await createField(existing.id, field, tableMap);
        } catch (err) {
          if (field.type === "formula") {
            console.warn(`  ⚠ Skipped formula ${field.name}: ${err.message}`);
          } else {
            throw err;
          }
        }
        continue;
      }

      if (
        (field.type === "singleSelect" || field.type === "multipleSelects") &&
        field.options?.length
      ) {
        const existingChoices = match.options?.choices?.map((c) => c.name) || [];
        const missing = field.options.filter((o) => !existingChoices.includes(o.name));
        if (missing.length) {
          const merged = [
            ...(match.options?.choices || []),
            ...missing,
          ];
          await updateSelectOptions(existing.id, match.id, { ...field, options: merged });
        }
      }
    }
  }

  // Pass 3: linked record fields (all tables must exist)
  if (!DRY_RUN) tables = await getTables();
  await syncLinkedRecordsFields(tables, tableMap);

  // Pass 4: add reverse links on Requests for Creative Briefs / Asset Hub if tables exist
  const requestsTable = tables.find((t) => t.name === "Requests");
  if (requestsTable && !DRY_RUN) {
    const linkFields = [
      { name: "Creative Briefs", linkedTableName: "Creative Briefs" },
      { name: "Asset Hub", linkedTableName: "Asset Hub" },
      { name: "Workback Milestones", linkedTableName: "Workback Tasks" },
    ];
    for (const lf of linkFields) {
      if (!requestsTable.fields.find((f) => f.name === lf.name) && tableMap[lf.linkedTableName]) {
        try {
          await createField(requestsTable.id, { ...lf, type: "multipleRecordLinks" }, tableMap);
        } catch (err) {
          console.warn(`  ⚠ Link field ${lf.name}: ${err.message}`);
        }
      }
    }
  }

  console.log("\n✅ Schema sync complete.");
  console.log("\nNext steps (manual in Airtable UI):");
  console.log("  1. Create form: Quince Creative Intake Request Form (see omni_prompt_creative_intake_form.md)");
  console.log("  2. Paste automations from automation_setup.md");
  console.log("  3. Paste scripts/generate_workback_tasks.js and create_approval_records.js");
  console.log("  4. Build interfaces per interfaces.md");
  console.log("  5. Connect Slack per slack_automations.md");
}

main().catch((err) => {
  console.error("\n❌ Sync failed:", err.message);
  process.exit(1);
});
