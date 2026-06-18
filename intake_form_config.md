# Intake Form Configuration

Form name: **Quince Creative Request Intake**  
Source table: **Requests**  
Share: Enable public link for XFN submitters.

## Field order and settings

| # | Field | Required | Helper text |
|---|-------|----------|-------------|
| 1 | Request Name | Yes | Short title for this request (e.g. "Spring Linen PDP Refresh") |
| 2 | Request Type | Yes | Drives the workback task template |
| 3 | Priority | No | P0 = business critical; affects approval path |
| 4 | Department | No | Your team (Merchandising, Marketing, etc.) |
| 5 | Requestor Name | Yes | Who submitted this request |
| 6 | Requestor Email | Yes | For status updates and follow-up questions |
| 7 | Creative POC | No | Creative point of contact if known |
| 8 | Executive Sponsor | No | Executive stakeholder if applicable |
| 9 | Launch Date | Yes | Target go-live date |
| 10 | Due Date | No | Internal creative deadline if different from launch |
| 11 | Channel | No | Where assets will be used (PDP, Email, Social, etc.) |
| 12 | Category | No | Product/category grouping |
| 13 | Products Featured | No | SKUs or product names |
| 14 | Business Objective / Ask | Yes | What outcome should creative achieve? |
| 15 | Key Messaging / RTBs | No | Must-include claims and proof points |
| 16 | Deliverables Required | Yes | Asset types, formats, quantities |
| 17 | Target Audience | No | Who we're speaking to |
| 18 | KPI Notes | No | How success will be measured |
| 19 | Revenue Target | No | Revenue goal if applicable |
| 20 | Budget Allocated | No | Approved budget for this work |
| 21 | Stakeholders | No | Others who need visibility or approval |
| 22 | Reference Materials | No | Links to inspo, past campaigns, brand refs |
| 23 | Form Attachments | Yes | Upload briefs, product shots, references |
| 24 | Matt Lippert Approved? | No | Required for certain tentpole/category launches |
| 25 | Readiness Status | Hidden/default | Set by automation to Needs Triage |

## Post-submit defaults (automation)

```
Status → New
Readiness Status → Needs Triage
```

## Request Type options (must match workback script)

- PDP / Studio Photoshoot
- Campaign
- AI Creative Request
- Design / Copy

## Form intro copy (paste at top of form)

> **Quince Creative Intake**  
> Submit a new creative request. Creative Ops will triage within 1 business day.  
> Required: business objective, launch date, request type, email, deliverables, and attachments.  
> Questions? Reach out in #creative-intake on Slack.
