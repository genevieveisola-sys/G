# Omni Prompt — Quince Creative Intake Request Form

Paste this prompt into Airtable Omni to build the requester-facing intake form and supporting schema in the **Quince Creative Operating System** base (`appMyEhNaEQctLmGp`).

---

## Prompt

Build a requester-facing Airtable form named **Quince Creative Intake Request Form** on the **Requests** table. Do not delete existing tables or fields — add only what is missing. Preserve base ID `appMyEhNaEQctLmGp`. Requests is the source of truth; every field links back to Request ID.

### Critical taxonomy rules

1. **Request Type Classification** must use a nested single-select taxonomy. Flatten each option as the full path (e.g. `PDP — On-Figure — Womens`, `Campaign — Editorial`, `Organic Social`). This field drives workback template selection, SLA assignment, and routing.

2. **Content Type Requested** must use the nested Creative/Marketing structure. Flatten as: `Creative — Design`, `Creative — Copy`, `Creative — AI`, `Creative — Studio`, `Marketing — Integrated`, `Marketing — Event`, `Marketing — Campaign`, `Marketing — OOH`, `Marketing — TVC`.

3. **Budget section removed** — do not include Budget Allocated, Revenue Target, or any budget fields on the requester-facing form. Budget tracking lives in the internal Creative Team toolkit only.

4. **Department dropdown** must match the Behind the Seams org chart. Remove duplicates (e.g. storefront vs Storefront, duplicate Marketing/Growth Marketing entries). Use exactly these options:

   Merchandising · Marketing · Growth Marketing · Brand Marketing · Creative & Design · Operations · Product Development · Product Management · Product (App/Storefront) · Sales · B2B / New Business · Category Management · Sourcing · Accounting & Finance · Logistics · Customer Experience (CX) · People & Talent · Returns · Quality · Inventory Forecasting · Data · Engineering · International · GM · Other

5. **Channel dropdown** must be a clean multiple-select with only valid channel values. Remove all free-text entries, URLs, and descriptions from the existing form. Options:

   PDP · Site · Landing Page · Email · Paid Social · Organic Social · Packaging · Retail · PR · Trade Show · Direct Mail · Event · Editorial Magazine · Business Cards · Enterprise Sales · Swatch · Brand Tag · OOH · TVC · Order Drop-in · B2B Physical Product Decoration · Multiple

6. **Strip all dirty data** from the existing Google Form migration: no project names in dropdowns, no free-text URLs in Photoshoot fields, no free-text in Channel or Priority fields.

7. **Cross-Functional Partners** must be a multiple-select matching all Quince teams from Behind the Seams:

   Merchandising · Marketing · Growth Marketing · Brand Marketing · Creative & Design · Product Development · Product Management · Sourcing · Category Management · B2B · Accounting & Finance · Logistics · CX · Engineering · Data · Quality · Inventory Forecasting · International · Returns · People & Talent

8. **Internal / post-submission fields** (Section INTERNAL below) must NOT appear on the requester-facing form. They are populated by Creative Ops after submission.

---

### Form intro copy

> **Quince Creative Intake Request Form**
> Submit a new creative request. Creative Ops will triage within 1 business day.
> Required fields are marked with an asterisk. Attach reference materials where possible.
> Questions? Reach out in #creative-intake on Slack.

---

### SECTION 1: REQUESTER INFORMATION

| Field | Airtable Type | Required | Options / Notes |
|-------|---------------|----------|-----------------|
| Project Name | Single line text | Yes | Short title for this request |
| Requester Name | Single line text | Yes | |
| Requester Email | Email | Yes | Auto-collected |
| Department | Single select | Yes | See Department list above |
| Requester POC | Single line text | No | Primary contact from requesting team |

---

### SECTION 2: THE REQUEST

| Field | Airtable Type | Required | Options / Notes |
|-------|---------------|----------|-----------------|
| Creative Resources Needed | Single select | Yes | Design · Copy · Photoshoot · AI Creative Request · Retouching · Video/Motion · Studio · Multiple |
| Content Type Requested | Single select | Yes | Creative — Design · Creative — Copy · Creative — AI · Creative — Studio · Marketing — Integrated · Marketing — Event · Marketing — Campaign · Marketing — OOH · Marketing — TVC |
| Channel | Multiple select | No | See Channel list above |
| Brief Description | Long text | Yes | Detailed description of the creative ask |
| Priority Level | Single select | Yes | P0 — Business Critical · P1 — Growth Driver · P2 — Nice to Have |
| Request Date | Date | Yes | Date submitted (default today) |
| Due Date | Date | Yes | Requested completion date |

---

### SECTION 3: REQUEST TYPE CLASSIFICATION

| Field | Airtable Type | Required |
|-------|---------------|----------|
| Request Type Classification | Single select | Yes |

**Nested options — flatten as full path values:**

**PDP**
- PDP — On-Figure (Apparel)
  - PDP — On-Figure — Womens
  - PDP — On-Figure — Mens
  - PDP — On-Figure — Kids
  - PDP — On-Figure — Baby
- PDP — Flats (Apparel)
  - PDP — Flats — Womens
  - PDP — Flats — Mens
  - PDP — Flats — Kids
  - PDP — Flats — Baby
- PDP — Flats (Home)
- PDP — Lifestyle (Home)
- PDP — Lifestyle (Apparel)
  - PDP — Lifestyle — Womens
  - PDP — Lifestyle — Mens
  - PDP — Lifestyle — Kids
  - PDP — Lifestyle — Baby
- PDP — Flats (Accessories)
- PDP — Lifestyle (Accessories)
- PDP — Flats (CPG/Beauty)
- PDP — Lifestyle (CPG/Beauty)
- PDP — Flats (Jewelry)
- PDP — Lifestyle (Jewelry)

**Campaign**
- Campaign — Editorial
- Campaign — Category Launch
- Campaign — Seasonal
- Campaign — 360 / Integrated
- Campaign — Hero Photography (Track A)

**Social**
- Organic Social
- Paid Social

**Other top-level**
- Design Only
- Copy Only
- AI Image Generation
- Retouching
- Video / Motion
- Packaging
- Email / Lifecycle
- Web / Landing Page
- Direct Mail
- Event / Trade Show
- OOH / TVC
- Rush Add Shoot
- Multi-Discipline

---

### SECTION 4: RESOURCE-SPECIFIC PATH (Conditional)

Show each block only when the matching resource type is selected in **Creative Resources Needed** (or when **Multiple** is selected).

#### 4a. Photoshoot Details — show if Photoshoot or Multiple

| Field | Airtable Type | Options / Notes |
|-------|---------------|-----------------|
| Photoshoot or AI Required | Single select | Photoshoot · AI Image Generation · Both · Neither |
| Photoshoot Category Needs | Long text | Product category needs description |
| Shots Requested | Number | Number of shots requested |
| Net New or Reshoot | Single select | Net New · Reshoot |
| Additional Products Needed | Single line text | e.g., on-figure styling products needed alongside hero product |

#### 4b. Inventory & Stock Readiness — show if Photoshoot selected

| Field | Airtable Type | Options / Notes |
|-------|---------------|-----------------|
| Sample Status | Single select | Not Needed · On Hand · Requested · In Transit · Received · Prepped for Shoot · Not Yet Ordered · Unavailable |
| Stock Status | Single select | In Stock · Low Stock · Pre-Order · Expected — 2 Weeks · Expected — 4+ Weeks · Out of Stock · Unknown |
| Units on Hand | Number | Current inventory count |
| Low Stock Threshold | Number | Minimum units to proceed (set by Merch) |
| Backup SKU | Single line text | Backup SKU if primary unavailable |
| Backup SKU Confirmed | Checkbox | |
| Expected Stock Date | Date | When stock/samples expected |
| Reorder Status | Single select | Not Applicable · Reorder Placed · Reorder In Production · Reorder Shipped · Reorder Received · Discontinued — No Reorder |
| Reorder Units Expected | Number | |
| Reorder ETA | Date | |
| Inventory Guardrail Flag | Single select | 🟢 Green — Proceed · 🟡 Yellow — Low Stock, Proceed with Caution · 🟠 Orange — Reorder Placed, Confirm Timeline · 🔴 Red — Blocked, Use Backup SKU · ⚪ Grey — Not Applicable |

#### 4c. Reshoot Info — show if Net New or Reshoot = Reshoot

| Field | Airtable Type | Options / Notes |
|-------|---------------|-----------------|
| Is Reshoot | Checkbox | |
| Reshoot Details | Long text | Product · Color · URL · Reason for reshoot |
| Reshoot Approval Status | Single select | Pending · Approved · Denied |
| Matt Lippert Approval | Checkbox | Required for all merchant reshoot requests |
| Merch Leader Approval Screenshot | Attachment / Long text | Screenshot or link to approval |

#### 4d. AI Creative Request — show if AI Creative Request or Multiple

| Field | Airtable Type | Options / Notes |
|-------|---------------|-----------------|
| AI Brief Description | Long text | What should the AI assets depict? Product images · illustrations · refresh of existing assets |

#### 4e. Design — show if Design or Multiple

| Field | Airtable Type | Options / Notes |
|-------|---------------|-----------------|
| Design Specs | Long text | Size · asset type · format · technical specs |
| Key Messaging for Design | Long text | Key messaging and RTBs for design work |

#### 4f. Copy — show if Copy or Multiple

| Field | Airtable Type | Options / Notes |
|-------|---------------|-----------------|
| Key Messaging RTBs | Long text | Key messaging · reasons to believe · legal copy · mandatory language |

#### 4g. Retouching — show if Retouching or Multiple

| Field | Airtable Type | Options / Notes |
|-------|---------------|-----------------|
| Retouching Source | Long text / URL | Link to asset to retouch |
| Retouching Reference | Long text | Reference image + description of changes |

---

### SECTION 5: PRODUCT & CLASSIFICATION (Cascading)

| Field | Airtable Type | Options |
|-------|---------------|---------|
| Category | Single select | Womens · Mens · Kids & Baby · Home & Living · Accessories · Footwear · CPG/Beauty · Jewelry · Maternity · Cross-Category |
| Division | Single select | Accessories · CPG · Emerging · Home · Jewelry · Maternity · Mens · Womens · Kids, Baby, Toddler |
| Department | Single select | Accessories · Bags · Belts · Eyewear · Footwear · Luggage · Pet · Socks · Soft Accessories · Tech Accessories · Beauty · Food & Beverage · Fragrance · Health & Wellness · Wellness · Bath · Bedding · Decorative Accessories · Flooring · Furniture · K&B Home · Kitchen · Lighting · Pillows and Throws · TableTop · Window · Mens (Jewelry) · Unisex · Womens (Jewelry) · Active · Bottoms · Knit Tops · Lounge · Outerwear · Sweaters · Woven Tops · Dresses and Skirts · Intimates · Swimwear |
| Sub-Department | Single select | Leather · Neoprene · Nylon · Cotton · Knit · Cashmere · Polyester · Wool · Silk · Rubber · Hard Shell · Soft Shell · Acetate · Stainless Steel · Other · Cotton/Twill · Denim · Linen · Ponte · Tencel · Micromodal · Shapewear · Down · Fleece · Leather/Suede · Alpaca · Cotton Cashmere · Merino · Polos · Tees · Bamboo Bedding · Cotton Bedding · Linen Bedding · Silk Bedding · Utility Bedding · Other Bedding · Cashmere Bath · Cotton Bath · Linen Bath · Hide & Sheepskin Rugs · Natural Fiber Rugs · Rug Pads · Synthetic Rugs · Wool Rugs · Bedroom Furniture · Living Room Furniture · Upholstered Furniture · Swatch · Ceiling Fans · Ceiling Lighting · Outdoor Lighting · Wall Lighting · Cashmere Pillows and Throws · Cotton Pillows and Throws · Fur/Faux Fur Pillows and Throws · Linen Pillows and Throws · Velvet Pillows and Throws · Other Pillows and Throws · Cutlery · Hardware · Bath & Body · Haircare · Makeup · Skincare · Specialty Food · Home Fragrance · Perfume · Fitness · Vitamins & Supplements · Fitness Accessories · Bracelets · Earrings · Engagement Rings · Necklaces · Rings · Wedding Bands · Bikini · One Piece |
| Sub-Category | Single line text | Product line within main category |
| Initiative | Single select | New Product Launch · Seasonal Campaign · Brand Awareness · Website · Paid Media · Retention/CRM · International · Category Campaign · Packaging · Events · OOH · TVC · Organic Social · Marketing · PDP Graphics · Direct Mail · Copy · Presentation Design · B2B · Other |
| Project Type | Single select | Product Launch · 360 Campaign · Integrated · Event · B2B · Direct Mail · Seasonal Refresh · BAU/Evergreen · Site Update · Packaging · Brand · Paid Media · Retention/CRM · OOH · TVC · Other |

---

### SECTION 6: MESSAGING & AUDIENCE

| Field | Airtable Type | Notes |
|-------|---------------|-------|
| Key Messaging RTBs | Long text | Key messaging · reasons to believe · copy considerations |
| Products Featured | Long text | Product names · SKUs · descriptions · reference links |
| Deliverables Required | Long text | Asset format and quantity (e.g., HP banner · hangtag · FAQs) |
| Target Audience | Long text | Who this creative is intended to reach |
| Reference Materials | URL | Links to reference and inspiration |
| Supporting Brief URL | URL | Link to supporting documents |
| Supporting Files | Attachment | Upload reference imagery or files |
| Anything Else We Should Know | Long text | Additional context · specs · dependencies |

---

### SECTION 7: BUSINESS IMPACT & KPIs

| Field | Airtable Type | Notes |
|-------|---------------|-------|
| Expected Impact and KPIs | Long text | Why is this ask necessary? Used for prioritization |
| Stakeholders | Long text | All stakeholders (RACI: Responsible · Accountable · Consulted · Informed) |

---

### SECTION 8: READINESS & INVENTORY (Lifestyle/Editorial)

For lifestyle and editorial shoots — tracks readiness of accompanying/styling products.

| Field | Airtable Type | Options / Notes |
|-------|---------------|-----------------|
| Readiness Status | Single select | Not Ready · Partially Ready · Ready to Brief · Ready to Execute · Blocked — Missing Info |
| Lifestyle/Editorial Accompanying Product Stock Status | Single select | In Stock · Pre-Order · Expected — 2 Weeks · Expected — 4+ Weeks · Out of Stock · Unknown |

---

### SECTION 9: TIMELINE & KEY DATES

| Field | Airtable Type | Options / Notes |
|-------|---------------|-----------------|
| Workback Template | Single select | PDP · Campaign · Launch · Email · Social · Event · Packaging · AI/Retouch · Web · OOH/TVC · Urgent · Custom |
| Estimated Start Date | Date | |
| Estimated Delivery Date | Date | |
| PDP Handoff Date | Date | Date assets handed to site/Contentful team |
| PDP Live on Site Date | Date | |
| Product Launch Date | Date | Official on-site launch date |
| New Product On-Site Date | Date | Drives workback from here |
| Campaign Go-Live Date | Date | |
| SLA Status | Single select | On Track · At Risk (48h) · Breached · Paused · N/A |
| SLA Due Date | Date | Calculated SLA deadline |
| Days Until Due | Formula (number) | Auto-calculated |

---

### SECTION 10: PROJECT TYPE & CROSS-FUNCTIONAL PARTNERS

| Field | Airtable Type | Options / Notes |
|-------|---------------|-----------------|
| Stakeholders | Long text | |
| Cross-Functional Partners | Multiple select | See Cross-Functional Partners list above |
| Stakeholder Notified | Checkbox | |
| Anything Else We Need to Know | Long text | |
| Additional Products Needed (On-Figure Styling) | Single line text | |

---

### SECTION 11: LINKED RECORDS & REFERENCES

| Field | Airtable Type | Notes |
|-------|---------------|-------|
| Tasks and Deliverables | Single line text | |
| Creative Briefs | Linked record | Links to Creative Briefs table |
| Asset Hub | Linked record | Links to Asset Hub table |
| Workback Milestones | Linked record | Links to Workback Milestones table |
| Creative Brief Doc URL | URL | |
| Google Form Timestamp | Single line text | Legacy sync field |
| Brief Auto-Generated | Checkbox | |

---

### INTERNAL — POST-SUBMISSION (Creative Team Only)

**Do not show on requester-facing form.** Populate after submission in Airtable/Jira.

| Field | Airtable Type | Options |
|-------|---------------|---------|
| Creative Request Status | Single select | New · Triage · Briefed · In Progress · Blocked · In Review · Completed · Canceled |
| Current Stage | Single select | Submitted — Awaiting Triage · In Queue — Not Yet Started · Briefing in Progress · Waiting on Assets/Dependencies · Active Creative Work · Internal Review · Stakeholder Review · Revisions in Progress · Final QA · Delivered · On Hold — Blocked |
| Creative Assigned Team | Multiple select | Design · Copy · Photo/Studio · AI/Retouch |
| Creative POC | Single line text | Default: Genevieve Isola |
| Queue Position | Number | |
| Readiness Status (Internal) | Single select | Ready · Waiting on Brief · Waiting on Assets · Waiting on Approval · Blocked |
| Scope Size | Single select | XS (< 2 hours) · S (half day) · M (1–2 days) · L (3–5 days) · XL (1–2 weeks) · XXL (2+ weeks) |
| Hours Estimated | Number | |
| Hours Actual | Number | For reporting + future estimation |
| Estimated Start Date | Date | |
| Estimated Delivery Date | Date | |
| SLA Due Date | Date | |
| Days Until Due | Formula | Auto-calculated |
| Week Submitted | Formula/text | ISO week (e.g., 2026-W25) |
| Brief Auto-Generated | Checkbox | |
| Stakeholder Notified | Checkbox | |
| Sync Source | Single select | Google Form Sync · Airtable Form · Manual Entry · Jira · Monday.com |

---

### Post-submit automation defaults

When a record is created via this form:

1. Set `Creative Request Status` = `New`
2. Set `Current Stage` = `Submitted — Awaiting Triage`
3. Set `Readiness Status (Internal)` = `Waiting on Brief`
4. Set `Sync Source` = `Airtable Form`
5. Set `Request Date` = today if empty
6. Trigger workback task generation based on **Request Type Classification** value

---

### What changed vs. existing form

| Change | Action taken |
|--------|--------------|
| PDP types nested | Added PDP — On-Figure, PDP — Flats, PDP — Lifestyle with sub-types by category |
| Content Type Requested restructured | Creative → Design/Copy/AI/Studio and Marketing → Integrated/Event/Campaign/OOH/TVC |
| Department dropdown cleaned | Removed duplicates; added all Behind the Seams teams |
| Channel dropdown cleaned | Removed free-text/URLs; added Order Drop-in as proper option |
| Budget section removed | Budget tracking stays in internal Creative Team toolkit |
| Cross-Functional Partners | Proper multi-select matching org chart |
| Dirty data stripped | No project names in dropdowns, no URLs in Photoshoot, no free-text in Channel/Priority |
| Request Type Classification | Fully nested taxonomy with PDP, Campaign, and Social sub-types |
| Lifestyle/Editorial stock readiness | Separate section for accompanying product tracking |

---

### Constraints

- Do not delete existing tables or fields
- Add fields only when missing
- Preserve base ID `appMyEhNaEQctLmGp`
- Enable public form link for XFN submitters
- Match workback script templates in `scripts/generate_workback_tasks.js` where Request Type Classification maps to template type
