# Interfaces and Views

## Interface 1: Creative Team Command Center

**Audience:** Creative Ops, designers, producers  
**Home page:** Intake Queue

### Pages

#### Intake Queue
- Table: Requests
- Filter: `{Status} = "New"`
- Sort: Priority (P0 first), then Launch Date ascending
- Columns: Request ID, Request Name, Request Type, Priority, Requestor Name, Launch Date, Department

#### Needs Triage
- Filter: `{Readiness Status} = "Needs Triage"`
- Group by: Request Type
- Highlight: Launch Date within 14 days

#### Awaiting Info
- Filter: `{Status} = "Awaiting Info"` OR `{Readiness Status} = "Awaiting Info"`
- Columns: Requestor Email, missing-field notes, Creative POC

#### Approved Requests
- Filter: `{Status} = "Approved"`
- Sort: Due Date ascending

#### Active Work
- Filter: `{Status}` is any of In Progress, In Production, In Review
- Group by: Creative POC

#### Blocked / At Risk
- Filter: `{Status} = "Blocked"` OR `{At Risk}` = true
- Color: red for P0

#### Due This Week
- Table: Workback Tasks
- Filter: Due Date is within current week AND Status ≠ Complete
- Group by: Owner

#### My Tasks
- Table: Workback Tasks
- Filter: Owner = current user AND Status ≠ Complete
- Sort: Due Date ascending

#### Approvals Needed
- Table: Approval Tracker
- Filter: Status = Awaiting Approval
- Group by: Approval Stage

---

## Interface 2: Campaign Hub

**Audience:** Campaign leads, marketing, creative strategy

| Section | Content |
|---------|---------|
| Campaign overview | Marketing Calendar records grouped by Campaign |
| Related requests | Linked Requests where Campaign matches |
| Workback tasks | All tasks for campaign requests |
| Approval status | Approval Tracker rollup by stage |
| Budget lines | Budget table linked records |
| Asset status | Asset Hub linked records with status |
| Launch readiness | Checklist: approvals done, tasks complete, assets ready |
| Calendar | Marketing Calendar embedded view |

---

## Interface 3: Approval Center

| Page | Filter |
|------|--------|
| Awaiting Approval | Status = Awaiting Approval |
| Approved | Status = Approved |
| Needs Revision | Status = Needs Revision |
| Rejected | Status = Rejected |

Default sort: Due Date ascending. Show Request Name, Approval Stage, Approver, Due Date.

---

## Interface 4: Asset Hub

**Layout:** Gallery + filter sidebar

| Filter | Field |
|--------|-------|
| Search by category | Category |
| Search by campaign | Campaign (linked) |
| Search by channel | Channel |
| Search by usage rights | Usage Rights |
| Search by tags | Tags |
| Reusable assets | Reusable = checked |
| Rights review needed | Rights Status = Needs Review |

---

## Interface 5: Executive Dashboard

**Layout:** Dashboard with number + chart widgets

| Widget | Source |
|--------|--------|
| Total open requests | Count Requests where Status not Complete/Canceled |
| By department | Bar chart: Department |
| By category | Bar chart: Category |
| By priority | Pie: Priority |
| At risk | Count At Risk = true |
| Avg turnaround | Formula field average |
| On-time % | Formula rollup |
| Budget vs actual | Sum Budget Allocated vs Actual Spend |
| Budget variance | Sum variance formula |
| Asset reuse % | Reused assets / total assets |
| Launches this month | Count Launch Date in current month |

---

## Marketing Calendar views

Create in Marketing Calendar table:

| View type | Date field |
|-----------|------------|
| Go-Live Calendar | Go-Live Date |
| Launch Calendar | Launch Date |
| Shoot Calendar | Shoot Date |
| Due Calendar | Due Date |

Grouped views:

- By channel
- By campaign
- By owner
- This week (filter date within week)
- This month (filter date within month)
