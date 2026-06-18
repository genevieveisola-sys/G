# Slack Automations

Connect Slack in Airtable: **Extensions → Slack** (workspace admin may need to approve).

Create channels if they do not exist:

- `#creative-intake`
- `#creative-approvals`
- `#creative-leads`
- `#creative-launch`

---

## 1. New request submitted

**Trigger:** Record created in Requests  
**Channel:** `#creative-intake`

**Message template:**

```
New Creative Request submitted: {Request Name}
Type: {Request Type}
Priority: {Priority}
Launch Date: {Launch Date}
Requestor: {Requestor Name}
```

Include a button/link to the Airtable record URL.

---

## 2. Approval needed

**Trigger:** Record created in Approval Tracker  
**Condition:** Status = Awaiting Approval  
**Destination:** Assigned Approver (Slack DM) OR `#creative-approvals`

**Message template:**

```
Approval needed for {Request Name}
Stage: {Approval Stage}
Due Date: {Due Date}
```

---

## 3. Task due tomorrow

**Trigger:** Scheduled daily 9:00 AM  
**Find:** Workback Tasks where Due Date = tomorrow AND Status ≠ Complete  
**Destination:** Task Owner (Slack DM)

**Message template:**

```
Creative task due tomorrow: {Task Name}
Request: {Request ID}
Due: {Due Date}
```

---

## 4. Overdue task

**Trigger:** Scheduled daily 9:00 AM  
**Find:** Workback Tasks where Due Date < today AND Status ≠ Complete

**Destinations:**

1. Task Owner (DM)
2. `#creative-leads`

**Message template:**

```
Overdue creative task: {Task Name}
Request: {Request ID}
Due: {Due Date}
Owner: {Owner}
```

---

## 5. Launch ready

**Trigger:** Requests Status changes to Launch Ready  
**Channel:** `#creative-launch`

**Message template:**

```
Creative request ready for launch: {Request Name}
Launch Date: {Launch Date}
Assets: {Asset Hub linked record names or Asset URL}
```

---

## Testing Slack

After connecting Slack:

1. Submit a test request via intake form → confirm #creative-intake message
2. Move test request to In Review → confirm #creative-approvals message
3. Create a task due tomorrow → run scheduled automation test → confirm DM
4. Set a task overdue → confirm owner + #creative-leads messages
5. Set request to Launch Ready → confirm #creative-launch message

---

## Manual admin required

- Slack workspace admin must authorize Airtable Slack integration
- Bot must be invited to each channel (`/invite @Airtable`)
- Approver DMs require Owner/Approver field mapped to Slack user via Airtable collaborator field
