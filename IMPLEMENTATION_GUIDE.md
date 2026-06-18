# Implementation Guide — Quince Creative Operating System

Base: **Quince Creative Operating System** (`appMyEhNaEQctLmGp`)

Build order: schema check → intake form → interfaces → automations → Slack → QA.

---

## Module 1: External Intake Form

**Table:** Requests  
**Action:** Create form view named `Creative Request Intake (External)`

### Fields (in order)

1. Request Name
2. Request Type
3. Priority
4. Department
5. Requestor Name
6. Requestor Email
7. Creative POC
8. Executive Sponsor
9. Launch Date
10. Due Date
11. Channel
12. Category
13. Products Featured
14. Business Objective / Ask
15. Key Messaging / RTBs
16. Deliverables Required
17. Target Audience
18. KPI Notes
19. Revenue Target
20. Budget Allocated
21. Stakeholders
22. Reference Materials
23. Form Attachments
24. Matt Lippert Approved?
25. Readiness Status

### Required fields

- Business Objective / Ask
- Launch Date
- Request Type
- Requestor Email
- Deliverables Required
- Form Attachments

### Helper text (add in form field descriptions)

| Field | Helper text |
|-------|-------------|
| Business Objective / Ask | What business outcome should creative drive? Include KPI if known. |
| Deliverables Required | List every asset type, format, and quantity (e.g. 3 PDP angles, 1 hero email). |
| Form Attachments | Upload briefs, references, product shots, or past examples. |
| Key Messaging / RTBs | Reasons to believe, claims, and must-include copy points. |
| Launch Date | When does this need to be live? Creative uses this for workback planning. |
| Request Type | Select the workflow template. Tasks auto-generate after submission. |

### Form submission automation

**Trigger:** Record created in Requests (from form)  
**Actions:**

1. Update record: `Status` = `New`
2. Update record: `Readiness Status` = `Needs Triage`

See `automation_setup.md` for full automation config.

---

## Module 2: Creative Team Command Center

**Create Interface:** `Creative Team Command Center`

Add pages with linked record lists / views from Requests, Workback Tasks, Approval Tracker, Marketing Calendar:

| Page | Source table | Filter |
|------|--------------|--------|
| Intake Queue | Requests | Status = New |
| Needs Triage | Requests | Readiness Status = Needs Triage |
| Awaiting Info | Requests | Status = Awaiting Info OR Readiness Status = Awaiting Info |
| Approved Requests | Requests | Status = Approved |
| Active Work | Requests | Status = In Progress OR In Production |
| Blocked / At Risk | Requests | Status = Blocked OR At Risk = checked |
| Due This Week | Workback Tasks | Due Date is this week AND Status ≠ Complete |
| My Tasks | Workback Tasks | Owner = current user AND Status ≠ Complete |
| Approvals Needed | Approval Tracker | Status = Awaiting Approval |

Detail layout on each page: show Request ID, Request Name, Priority, Due Date, Owner, Status.

---

## Module 3: Campaign Hub

**Create Interface:** `Campaign Hub`

Structure:

1. **Campaign overview** — Marketing Calendar or Campaign field grouped view
2. **Related requests** — Linked Requests filtered by campaign
3. **Workback tasks** — Linked Workback Tasks
4. **Approval status** — Linked Approval Tracker
5. **Budget lines** — Linked Budget table (if exists)
6. **Asset status** — Linked Asset Hub records
7. **Launch readiness** — Formula/rollup: all approvals approved + tasks complete
8. **Marketing calendar records** — Calendar embed

---

## Module 4: Automated Workback Generator

**Automation name:** `Generate Workback Tasks on New Request`

- **Trigger:** Record created in Requests (or when Request Type is filled)
- **Condition:** Request Type is not empty
- **Action:** Run script → paste `scripts/generate_workback_tasks.js`
- **Input:** `requestRecordId` = Record ID from trigger

Templates are embedded in the script for:

- PDP / Studio Photoshoot (8 tasks)
- Campaign (9 tasks)
- AI Creative Request (5 tasks)
- Design / Copy (6 tasks)

Each task gets: Request ID link, Task Name, Milestone, Owner (from Creative POC), Due Date (staggered from Due/Launch), Status = Not started, Dependency, Slack Notify? for approval/launch tasks.

---

## Module 5: Approval Center

**Automation name:** `Create Approvals on In Review`

- **Trigger:** Status changes in Requests
- **Condition:** Status = In Review
- **Action:** Run script → paste `scripts/create_approval_records.js`

Creates: Merchant Approval, Creative Lead Approval, Final Approval (+ Executive Approval if Priority = P0 - Business Critical).

**Interface:** `Approval Center`

| Page | Filter |
|------|--------|
| Awaiting Approval | Status = Awaiting Approval |
| Approved | Status = Approved |
| Needs Revision | Status = Needs Revision |
| Rejected | Status = Rejected |

---

## Module 6: Asset Library

**Interface:** `Asset Hub`

Search/filter dimensions:

- Category
- Campaign (linked)
- Channel
- Usage rights
- Tags
- Reusable assets (checkbox = true)
- Rights review needed (checkbox or status)

Use grid + gallery layout with preview thumbnails.

---

## Module 7: Executive Dashboard

**Interface:** `Executive Dashboard`

Metrics (formulas/rollups in `formulas.md`):

- Total open requests
- Requests by department
- Requests by category
- Requests by priority
- Requests at risk
- Average turnaround time
- On-time delivery %
- Budget vs actual
- Budget variance
- Asset reuse %
- Launches this month

Use chart elements + number widgets in Interface Designer.

---

## Module 8: Marketing Calendar

**Table:** Marketing Calendar (or Requests if calendar lives there)

**Calendar views:**

- Go-Live Date
- Launch Date
- Shoot Date
- Due Date

**Grouped views:**

- By channel
- By campaign
- By owner
- This week
- This month

---

## Module 9: Slack Automations

Connect Slack integration in Airtable, then configure per `slack_automations.md`:

1. New request → #creative-intake
2. Approval needed → approver DM or #creative-approvals
3. Due tomorrow → task owner
4. Overdue → task owner + #creative-leads
5. Launch ready → #creative-launch

---

## Module 10: QA and Polish

Run `qa_checklist.md` after build. Document any manual admin steps (Slack OAuth, channel invites, interface publish permissions).

---

## Manual admin items (cannot be fully automated via API)

- Slack workspace connection and channel creation
- Airtable Interface publish/share permissions
- OAuth approval for external form link distribution
- Executive dashboard chart configuration (visual layout in UI)
