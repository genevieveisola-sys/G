# Airtable Sync Guide

Push the full Quince Creative Operating System schema and config into Airtable base **appMyEhNaEQctLmGp**.

## Prerequisites

1. **Airtable Personal Access Token** with scopes:
   - `schema.bases:read`
   - `schema.bases:write`
   - Create at: https://airtable.com/create/tokens

2. **Node.js 18+**

3. **Base access** — your token must have access to `Quince Creative Operating System`

## Quick sync (schema only)

```bash
cd /Users/genevieve.isola/Projects/quince-creative-operating-system

# Preview changes without writing
AIRTABLE_PAT=patXXXXXXXX node scripts/sync_airtable_schema.js --dry-run

# Apply schema (add-only — never deletes existing fields)
AIRTABLE_PAT=patXXXXXXXX node scripts/sync_airtable_schema.js
```

Or via npm:

```bash
AIRTABLE_PAT=patXXXXXXXX npm run sync:schema:dry-run
AIRTABLE_PAT=patXXXXXXXX npm run sync:schema
```

## What the sync script does

| Step | Action |
|------|--------|
| Tables | Creates missing: Requests, Workback Tasks, Approval Tracker, Marketing Calendar, Asset Hub, Budget, Creative Briefs |
| Fields | Adds all fields from `airtable/schema.js` (100+ on Requests) |
| Options | Merges new dropdown choices into existing single/multi-select fields |
| Links | Creates linked record fields between tables |
| Safety | Add-only — never deletes or renames existing tables/fields |

## What still requires Airtable UI (manual)

These cannot be fully automated via Metadata API:

| Item | Source file |
|------|-------------|
| Intake form layout + conditional sections | `omni_prompt_creative_intake_form.md` → paste into **Airtable Omni** |
| Automations (intake routing, Slack) | `automation_setup.md` |
| Workback + approval scripts | `scripts/generate_workback_tasks.js`, `scripts/create_approval_records.js` |
| Interfaces (Command Center, Campaign Hub, etc.) | `interfaces.md` |
| Slack channel setup | `slack_automations.md` |
| Formula fields that fail API create | `formulas.md` — paste manually if sync skips them |

## Airtable Omni (form build)

If you prefer Omni over the sync script for the intake form:

1. Open https://airtable.com/appMyEhNaEQctLmGp
2. Open **Omni** (AI builder)
3. Paste the full prompt from `omni_prompt_creative_intake_form.md`

## GitHub

This repo has no remote configured yet. To connect:

```bash
git remote add origin https://github.com/YOUR_ORG/quince-creative-operating-system.git
git push -u origin cursor/creative-intake-omni-prompt
```

## Full build order

1. `npm run sync:schema` — schema
2. Omni or manual form — intake form
3. Automations — per `automation_setup.md`
4. Scripts — paste into Airtable automations
5. Interfaces — per `interfaces.md`
6. Slack — per `slack_automations.md`
7. QA — per `qa_checklist.md`
