# Field Additions (only if missing)

**Rule:** Audit the live base first. Add only fields that do not exist. Never delete or rename existing fields.

---

## Requests

| Field | Type | Options / notes |
|-------|------|-----------------|
| Request ID | Formula or autonumber | Primary identifier shown to users |
| Request Name | Single line text | Likely exists |
| Request Type | Single select | PDP / Studio Photoshoot; Campaign; AI Creative Request; Design / Copy |
| Priority | Single select | P0 - Business Critical; P1; P2 |
| Department | Single select | Merchandising; Marketing; Creative; Site; Leadership; Finance |
| Requestor Name | Single line text | |
| Requestor Email | Email | |
| Creative POC | Collaborator or linked | |
| Executive Sponsor | Single line text | |
| Launch Date | Date | |
| Due Date | Date | |
| Channel | Multi-select | PDP; Email; Social; Site; Paid; Organic; Packaging |
| Category | Single select or linked | |
| Products Featured | Long text | |
| Business Objective / Ask | Long text | |
| Key Messaging / RTBs | Long text | |
| Deliverables Required | Long text | |
| Target Audience | Long text | |
| KPI Notes | Long text | |
| Revenue Target | Currency | |
| Budget Allocated | Currency | |
| Stakeholders | Long text | |
| Reference Materials | URL or long text | |
| Form Attachments | Attachment | |
| Matt Lippert Approved? | Single select | Yes; No; Pending; N/A |
| Readiness Status | Single select | Needs Triage; Awaiting Info; Ready; Not Ready |
| Status | Single select | New; Awaiting Info; Approved; In Progress; In Review; In Production; Blocked; Launch Ready; Complete; Canceled |
| At Risk | Formula | See formulas.md |
| Completed Date | Date | Set when Status → Complete |
| Asset Status | Single select or rollup | Draft; In Review; Ready |
| Campaign | Link to Marketing Calendar | For Campaign Hub |

---

## Workback Tasks

| Field | Type | Notes |
|-------|------|-------|
| Task Name | Single line text | |
| Request ID | Link to Requests | Required — source of truth link |
| Milestone | Single select | Intake; Creative; Production; Post-Production; Review; Approval; Launch; Delivery; Revision |
| Owner | Collaborator | |
| Due Date | Date | |
| Status | Single select | Not started; In Progress; Complete; Blocked |
| Dependency | Single line text or link | Prior task name |
| Slack Notify? | Checkbox | True for approval, launch, overdue-sensitive |

---

## Approval Tracker

| Field | Type | Notes |
|-------|------|-------|
| Request ID | Link to Requests | |
| Approval Stage | Single select | Merchant Approval; Creative Lead Approval; Final Approval; Executive Approval |
| Status | Single select | Awaiting Approval; Approved; Needs Revision; Rejected |
| Approver | Collaborator | |
| Due Date | Date | |
| Notes | Long text | |

---

## Marketing Calendar

| Field | Type | Notes |
|-------|------|-------|
| Campaign Name | Single line text | |
| Go-Live Date | Date | Calendar view |
| Launch Date | Date | Calendar view |
| Shoot Date | Date | Calendar view |
| Due Date | Date | Calendar view |
| Channel | Single select | |
| Owner | Collaborator | |
| Campaign | Single line text or link | Grouping field |

---

## Asset Hub (if separate table)

| Field | Type | Notes |
|-------|------|-------|
| Asset Name | Single line text | |
| Category | Single select | |
| Campaign | Link | |
| Channel | Multi-select | |
| Usage Rights | Single select | |
| Tags | Multi-select | |
| Reusable | Checkbox | |
| Rights Status | Single select | Cleared; Needs Review; Expired |
| Preview | Attachment | Gallery view |

---

## Budget (if separate table)

| Field | Type | Notes |
|-------|------|-------|
| Request ID | Link to Requests | |
| Line Item | Single line text | |
| Estimate | Currency | |
| Actual | Currency | |
| Variance | Formula | Estimate - Actual |
