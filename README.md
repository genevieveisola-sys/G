# Quince Creative Operating System

Implementation package for Airtable base **Quince Creative Operating System** (`appMyEhNaEQctLmGp`).

**Principle:** `Requests` is the source of truth. Every workflow connects back to Request ID.

## Quick start

1. Sign in to Airtable and open: https://airtable.com/appMyEhNaEQctLmGp
2. **Sync schema:** `AIRTABLE_PAT=patXXX npm run sync:schema` (see `AIRTABLE_SYNC.md`)
3. **Build intake form:** paste `omni_prompt_creative_intake_form.md` into Airtable Omni
4. Follow `IMPLEMENTATION_GUIDE.md` module by module (1–10).
5. Paste scripts from `scripts/` into Airtable automations.
6. Configure Slack using `slack_automations.md`.
7. Run QA using `qa_checklist.md`.

## Package contents

| File | Purpose |
|------|---------|
| `IMPLEMENTATION_GUIDE.md` | Step-by-step build for all 10 modules |
| `intake_form_config.md` | External intake form fields, required rules, defaults |
| `interfaces.md` | Command Center, Campaign Hub, Asset Library, Executive Dashboard |
| `automation_setup.md` | Native Airtable automations (intake, approvals, Slack) |
| `formulas.md` | Dashboard metrics, turnaround, on-time %, budget variance |
| `field_additions.md` | Fields to add only if missing (do not delete existing) |
| `slack_automations.md` | Slack message templates and channel routing |
| `qa_checklist.md` | PDP, Campaign, AI test scenarios |
| `AIRTABLE_SYNC.md` | Schema sync via Metadata API (run with AIRTABLE_PAT) |
| `airtable/schema.js` | Consolidated field definitions for all tables |
| `omni_prompt_creative_intake_form.md` | Airtable Omni prompt for intake form |
| `scripts/sync_airtable_schema.js` | Pushes schema to base (add-only) |
| `scripts/generate_workback_tasks.js` | Workback task generator by Request Type |
| `scripts/create_approval_records.js` | Approval Tracker records on In Review |

## MCP setup (for Cursor agent builds)

Enable in **Cursor Settings → MCP**:

- **Airtable MCP** — schema read/write, records, automations where supported
- **Slack MCP** — channel lookup and notification testing

Without these, use this package manually or sign in via the browser tab and ask the agent to continue UI build.

## Constraints

- Do not delete existing tables or fields
- Preserve base ID `appMyEhNaEQctLmGp`
- Add fields only when needed
- Prefer native Airtable automations; use scripts for branching task templates
