# Airtable Automation Setup

Base: `appMyEhNaEQctLmGp`

---

## 1. New request intake routing

**Name:** Route new form submissions  
**Trigger:** When record created in Requests  
**Condition:** Record created via form (or always for new records with empty Status)

**Actions:**

1. Update record → `Status` = `New`
2. Update record → `Readiness Status` = `Needs Triage`
3. (Optional) Send Slack message — see slack_automations.md #1

---

## 2. Generate workback tasks

**Name:** Generate Workback Tasks  
**Trigger:** When record created in Requests  
**Condition:** Request Type is not empty

**Action:** Run script  
**Script:** `scripts/generate_workback_tasks.js`  
**Input variable:** `requestRecordId` = Airtable record ID from trigger

**Note:** Add a second trigger variant if tasks should regenerate only when Request Type changes on existing records (use condition: Request Type changed AND no existing linked tasks).

---

## 3. Create approval records

**Name:** Create Approval Records on In Review  
**Trigger:** When record updated in Requests  
**Condition:** Status = In Review

**Action:** Run script  
**Script:** `scripts/create_approval_records.js`  
**Input variable:** `requestRecordId` = Record ID from trigger

---

## 4. Approval needed Slack notification

**Name:** Notify on approval needed  
**Trigger:** When record created in Approval Tracker  
**Condition:** Status = Awaiting Approval

**Action:** Send Slack message  
**Channel:** #creative-approvals (or dynamic approver)

```
Approval needed for [Request Name]
Stage: [Approval Stage]
Due Date: [Due Date]
```

Link to record: use Airtable record URL.

---

## 5. Task due tomorrow

**Name:** Task due tomorrow reminder  
**Trigger:** Scheduled — daily at 9:00 AM workspace timezone  
**Action:** Find records in Workback Tasks where Due Date = tomorrow AND Status ≠ Complete

**For each:** Send Slack message to Owner

```
Creative task due tomorrow: [Task Name]
Request: [Request ID]
```

---

## 6. Overdue task alert

**Name:** Overdue task alert  
**Trigger:** Scheduled — daily at 9:00 AM  
**Action:** Find Workback Tasks where Due Date < today AND Status ≠ Complete

**For each:**

1. Slack message to Owner
2. Slack message to #creative-leads

```
Overdue creative task: [Task Name]
Request: [Request ID]
Due: [Due Date]
```

---

## 7. Launch ready notification

**Name:** Launch ready  
**Trigger:** When record updated in Requests  
**Condition:** Status = Launch Ready (or Readiness Status = Ready for Launch)

**Action:** Send Slack to #creative-launch

```
Creative request ready for launch: [Request Name]
Launch Date: [Launch Date]
Assets: [Asset Hub linked records or Asset URL field]
```

---

## 8. Status sync (optional)

When all Approval Tracker records for a request are Approved → update Request Status to Approved.

When any approval is Rejected → update Request Status to Blocked and Readiness Status to Needs Revision.

---

## Script vs native

| Workflow | Method |
|----------|--------|
| Set Status on create | Native automation |
| Workback task templates by Request Type | Script (branching) |
| Approval record creation with P0 branch | Script |
| Slack notifications | Native Slack action |
| Due tomorrow / overdue | Native scheduled + Find records |
| Dashboard metrics | Formulas + rollups (no automation) |
