# QA Checklist

Base: `appMyEhNaEQctLmGp`  
Run after all modules are built.

---

## Test 1: PDP / Studio Photoshoot request

- [ ] Submit intake form with Request Type = PDP / Studio Photoshoot
- [ ] Confirm Status = New, Readiness Status = Needs Triage
- [ ] Confirm 8 Workback Tasks created:
  - [ ] Sample Received
  - [ ] Intake Complete
  - [ ] Shoot Scheduled
  - [ ] Shoot Complete
  - [ ] Retouching
  - [ ] Upload to Contentful
  - [ ] Approval (Slack Notify? = checked)
  - [ ] Go Live (Slack Notify? = checked)
- [ ] Confirm each task links to Request ID
- [ ] Confirm dependencies set correctly
- [ ] Confirm #creative-intake Slack message received

---

## Test 2: Campaign request

- [ ] Submit with Request Type = Campaign
- [ ] Confirm 9 tasks created (Brief Approval through Launch)
- [ ] Move Status to In Review
- [ ] Confirm 3 Approval Tracker records (Merchant, Creative Lead, Final)
- [ ] If Priority = P0 - Business Critical, confirm Executive Approval also created
- [ ] Confirm #creative-approvals notification

---

## Test 3: AI Creative Request

- [ ] Submit with Request Type = AI Creative Request
- [ ] Confirm 5 tasks: Prompt Development → Delivery
- [ ] Confirm Delivery task has Slack Notify? checked

---

## Test 4: Design / Copy request

- [ ] Submit with Request Type = Design / Copy
- [ ] Confirm 6 tasks through Final Delivery

---

## Interface checks

- [ ] Creative Team Command Center: all 9 pages load with correct filters
- [ ] Campaign Hub: related records display for test campaign
- [ ] Approval Center: 4 status pages work
- [ ] Asset Hub: filters by category, campaign, channel, tags
- [ ] Executive Dashboard: metrics populate with test data

---

## Calendar checks

- [ ] Go-Live Date calendar view displays records
- [ ] Launch Date calendar view displays records
- [ ] Shoot Date calendar view displays records
- [ ] Due Date calendar view displays records
- [ ] Grouped views: by channel, campaign, owner, this week, this month

---

## Slack checks

- [ ] New request → #creative-intake
- [ ] Approval needed → #creative-approvals or approver DM
- [ ] Due tomorrow → owner DM
- [ ] Overdue → owner + #creative-leads
- [ ] Launch ready → #creative-launch

---

## Dashboard metric checks

- [ ] Total open requests counts correctly
- [ ] Requests by department chart accurate
- [ ] Requests by category chart accurate
- [ ] Requests by priority chart accurate
- [ ] At risk count matches filtered view
- [ ] Average turnaround calculates on completed requests
- [ ] On-time delivery % calculates
- [ ] Budget vs actual and variance display
- [ ] Asset reuse % displays
- [ ] Launches this month counts correctly

---

## Items requiring manual admin

Document completion status:

| Item | Owner | Status |
|------|-------|--------|
| Slack workspace OAuth | Workspace admin | |
| Invite Airtable bot to channels | Channel admin | |
| Publish external intake form link | Creative Ops | |
| Interface share permissions | Base owner | |
| P0 Executive Approval approver mapping | Creative Ops | |

---

## Cleanup after QA

- [ ] Archive or delete test records (optional)
- [ ] Mark automations as ON
- [ ] Share intake form URL with XFN teams
- [ ] Share Command Center interface with Creative team
- [ ] Share Executive Dashboard with leadership
