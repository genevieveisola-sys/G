/**
 * Quince Creative Operating System — consolidated Airtable schema.
 * Source: omni_prompt_creative_intake_form.md, field_additions.md, formulas.md
 * Rule: add-only — never delete existing tables or fields.
 */

const BASE_ID = "appMyEhNaEQctLmGp";

function opts(...names) {
  return names.map((name) => ({ name, color: "grayLight2" }));
}

const DEPARTMENT_REQUESTER = opts(
  "Merchandising",
  "Marketing",
  "Growth Marketing",
  "Brand Marketing",
  "Creative & Design",
  "Operations",
  "Product Development",
  "Product Management",
  "Product (App/Storefront)",
  "Sales",
  "B2B / New Business",
  "Category Management",
  "Sourcing",
  "Accounting & Finance",
  "Logistics",
  "Customer Experience (CX)",
  "People & Talent",
  "Returns",
  "Quality",
  "Inventory Forecasting",
  "Data",
  "Engineering",
  "International",
  "GM",
  "Other"
);

const CHANNEL = opts(
  "PDP",
  "Site",
  "Landing Page",
  "Email",
  "Paid Social",
  "Organic Social",
  "Packaging",
  "Retail",
  "PR",
  "Trade Show",
  "Direct Mail",
  "Event",
  "Editorial Magazine",
  "Business Cards",
  "Enterprise Sales",
  "Swatch",
  "Brand Tag",
  "OOH",
  "TVC",
  "Order Drop-in",
  "B2B Physical Product Decoration",
  "Multiple"
);

const CONTENT_TYPE = opts(
  "Creative — Design",
  "Creative — Copy",
  "Creative — AI",
  "Creative — Studio",
  "Marketing — Integrated",
  "Marketing — Event",
  "Marketing — Campaign",
  "Marketing — OOH",
  "Marketing — TVC"
);

const CREATIVE_RESOURCES = opts(
  "Design",
  "Copy",
  "Photoshoot",
  "AI Creative Request",
  "Retouching",
  "Video/Motion",
  "Studio",
  "Multiple"
);

const PRIORITY = opts(
  "P0 — Business Critical",
  "P1 — Growth Driver",
  "P2 — Nice to Have"
);

const REQUEST_TYPE_CLASSIFICATION = opts(
  "PDP — On-Figure (Apparel)",
  "PDP — On-Figure — Womens",
  "PDP — On-Figure — Mens",
  "PDP — On-Figure — Kids",
  "PDP — On-Figure — Baby",
  "PDP — Flats (Apparel)",
  "PDP — Flats — Womens",
  "PDP — Flats — Mens",
  "PDP — Flats — Kids",
  "PDP — Flats — Baby",
  "PDP — Flats (Home)",
  "PDP — Lifestyle (Home)",
  "PDP — Lifestyle (Apparel)",
  "PDP — Lifestyle — Womens",
  "PDP — Lifestyle — Mens",
  "PDP — Lifestyle — Kids",
  "PDP — Lifestyle — Baby",
  "PDP — Flats (Accessories)",
  "PDP — Lifestyle (Accessories)",
  "PDP — Flats (CPG/Beauty)",
  "PDP — Lifestyle (CPG/Beauty)",
  "PDP — Flats (Jewelry)",
  "PDP — Lifestyle (Jewelry)",
  "Campaign — Editorial",
  "Campaign — Category Launch",
  "Campaign — Seasonal",
  "Campaign — 360 / Integrated",
  "Campaign — Hero Photography (Track A)",
  "Organic Social",
  "Paid Social",
  "Design Only",
  "Copy Only",
  "AI Image Generation",
  "Retouching",
  "Video / Motion",
  "Packaging",
  "Email / Lifecycle",
  "Web / Landing Page",
  "Direct Mail",
  "Event / Trade Show",
  "OOH / TVC",
  "Rush Add Shoot",
  "Multi-Discipline"
);

const CROSS_FUNCTIONAL_PARTNERS = opts(
  "Merchandising",
  "Marketing",
  "Growth Marketing",
  "Brand Marketing",
  "Creative & Design",
  "Product Development",
  "Product Management",
  "Sourcing",
  "Category Management",
  "B2B",
  "Accounting & Finance",
  "Logistics",
  "CX",
  "Engineering",
  "Data",
  "Quality",
  "Inventory Forecasting",
  "International",
  "Returns",
  "People & Talent"
);

const CATEGORY = opts(
  "Womens",
  "Mens",
  "Kids & Baby",
  "Home & Living",
  "Accessories",
  "Footwear",
  "CPG/Beauty",
  "Jewelry",
  "Maternity",
  "Cross-Category"
);

const STATUS = opts(
  "New",
  "Awaiting Info",
  "Approved",
  "In Progress",
  "In Review",
  "In Production",
  "Blocked",
  "Launch Ready",
  "Complete",
  "Canceled"
);

const CREATIVE_REQUEST_STATUS = opts(
  "New",
  "Triage",
  "Briefed",
  "In Progress",
  "Blocked",
  "In Review",
  "Completed",
  "Canceled"
);

const CURRENT_STAGE = opts(
  "Submitted — Awaiting Triage",
  "In Queue — Not Yet Started",
  "Briefing in Progress",
  "Waiting on Assets/Dependencies",
  "Active Creative Work",
  "Internal Review",
  "Stakeholder Review",
  "Revisions in Progress",
  "Final QA",
  "Delivered",
  "On Hold — Blocked"
);

const WORKBACK_TEMPLATE = opts(
  "PDP",
  "Campaign",
  "Launch",
  "Email",
  "Social",
  "Event",
  "Packaging",
  "AI/Retouch",
  "Web",
  "OOH/TVC",
  "Urgent",
  "Custom"
);

const REQUESTS_FIELDS = [
  { name: "Request ID", type: "singleLineText", description: "Primary identifier" },
  { name: "Project Name", type: "singleLineText" },
  { name: "Request Name", type: "singleLineText", description: "Legacy field — alias for Project Name" },
  { name: "Requester Name", type: "singleLineText" },
  { name: "Requestor Name", type: "singleLineText", description: "Legacy field" },
  { name: "Requester Email", type: "email" },
  { name: "Requestor Email", type: "email", description: "Legacy field" },
  { name: "Department", type: "singleSelect", options: DEPARTMENT_REQUESTER },
  { name: "Requester POC", type: "singleLineText" },
  { name: "Creative Resources Needed", type: "singleSelect", options: CREATIVE_RESOURCES },
  { name: "Content Type Requested", type: "singleSelect", options: CONTENT_TYPE },
  { name: "Channel", type: "multipleSelects", options: CHANNEL },
  { name: "Brief Description", type: "multilineText" },
  { name: "Business Objective / Ask", type: "multilineText", description: "Legacy field" },
  { name: "Priority Level", type: "singleSelect", options: PRIORITY },
  { name: "Priority", type: "singleSelect", options: opts("P0 - Business Critical", "P1", "P2"), description: "Legacy field" },
  { name: "Request Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "Due Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "Request Type Classification", type: "singleSelect", options: REQUEST_TYPE_CLASSIFICATION },
  { name: "Request Type", type: "singleSelect", options: opts("PDP / Studio Photoshoot", "Campaign", "AI Creative Request", "Design / Copy"), description: "Legacy — used by workback script" },
  { name: "Photoshoot or AI Required", type: "singleSelect", options: opts("Photoshoot", "AI Image Generation", "Both", "Neither") },
  { name: "Photoshoot Category Needs", type: "multilineText" },
  { name: "Shots Requested", type: "number", options: { precision: 0 } },
  { name: "Net New or Reshoot", type: "singleSelect", options: opts("Net New", "Reshoot") },
  { name: "Additional Products Needed", type: "singleLineText" },
  { name: "Sample Status", type: "singleSelect", options: opts("Not Needed", "On Hand", "Requested", "In Transit", "Received", "Prepped for Shoot", "Not Yet Ordered", "Unavailable") },
  { name: "Stock Status", type: "singleSelect", options: opts("In Stock", "Low Stock", "Pre-Order", "Expected — 2 Weeks", "Expected — 4+ Weeks", "Out of Stock", "Unknown") },
  { name: "Units on Hand", type: "number", options: { precision: 0 } },
  { name: "Low Stock Threshold", type: "number", options: { precision: 0 } },
  { name: "Backup SKU", type: "singleLineText" },
  { name: "Backup SKU Confirmed", type: "checkbox" },
  { name: "Expected Stock Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "Reorder Status", type: "singleSelect", options: opts("Not Applicable", "Reorder Placed", "Reorder In Production", "Reorder Shipped", "Reorder Received", "Discontinued — No Reorder") },
  { name: "Reorder Units Expected", type: "number", options: { precision: 0 } },
  { name: "Reorder ETA", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "Inventory Guardrail Flag", type: "singleSelect", options: opts("🟢 Green — Proceed", "🟡 Yellow — Low Stock, Proceed with Caution", "🟠 Orange — Reorder Placed, Confirm Timeline", "🔴 Red — Blocked, Use Backup SKU", "⚪ Grey — Not Applicable") },
  { name: "Is Reshoot", type: "checkbox" },
  { name: "Reshoot Details", type: "multilineText" },
  { name: "Reshoot Approval Status", type: "singleSelect", options: opts("Pending", "Approved", "Denied") },
  { name: "Matt Lippert Approval", type: "checkbox" },
  { name: "Merch Leader Approval Screenshot", type: "multilineText" },
  { name: "Matt Lippert Approved?", type: "singleSelect", options: opts("Yes", "No", "Pending", "N/A"), description: "Legacy field" },
  { name: "AI Brief Description", type: "multilineText" },
  { name: "Design Specs", type: "multilineText" },
  { name: "Key Messaging for Design", type: "multilineText" },
  { name: "Key Messaging RTBs", type: "multilineText" },
  { name: "Retouching Source", type: "url" },
  { name: "Retouching Reference", type: "multilineText" },
  { name: "Category", type: "singleSelect", options: CATEGORY },
  { name: "Division", type: "singleSelect", options: opts("Accessories", "CPG", "Emerging", "Home", "Jewelry", "Maternity", "Mens", "Womens", "Kids, Baby, Toddler") },
  { name: "Department (Product)", type: "singleSelect", options: opts("Accessories", "Bags", "Belts", "Eyewear", "Footwear", "Luggage", "Pet", "Socks", "Soft Accessories", "Tech Accessories", "Beauty", "Food & Beverage", "Fragrance", "Health & Wellness", "Wellness", "Bath", "Bedding", "Decorative Accessories", "Flooring", "Furniture", "K&B Home", "Kitchen", "Lighting", "Pillows and Throws", "TableTop", "Window", "Mens (Jewelry)", "Unisex", "Womens (Jewelry)", "Active", "Bottoms", "Knit Tops", "Lounge", "Outerwear", "Sweaters", "Woven Tops", "Dresses and Skirts", "Intimates", "Swimwear") },
  { name: "Sub-Department", type: "singleSelect", options: opts("Leather", "Neoprene", "Nylon", "Cotton", "Knit", "Cashmere", "Polyester", "Wool", "Silk", "Rubber", "Hard Shell", "Soft Shell", "Acetate", "Stainless Steel", "Other", "Cotton/Twill", "Denim", "Linen", "Ponte", "Tencel", "Micromodal", "Shapewear", "Down", "Fleece", "Leather/Suede", "Alpaca", "Cotton Cashmere", "Merino", "Polos", "Tees", "Bamboo Bedding", "Cotton Bedding", "Linen Bedding", "Silk Bedding", "Utility Bedding", "Other Bedding", "Cashmere Bath", "Cotton Bath", "Linen Bath", "Hide & Sheepskin Rugs", "Natural Fiber Rugs", "Rug Pads", "Synthetic Rugs", "Wool Rugs", "Bedroom Furniture", "Living Room Furniture", "Upholstered Furniture", "Swatch", "Ceiling Fans", "Ceiling Lighting", "Outdoor Lighting", "Wall Lighting", "Cashmere Pillows and Throws", "Cotton Pillows and Throws", "Fur/Faux Fur Pillows and Throws", "Linen Pillows and Throws", "Velvet Pillows and Throws", "Other Pillows and Throws", "Cutlery", "Hardware", "Bath & Body", "Haircare", "Makeup", "Skincare", "Specialty Food", "Home Fragrance", "Perfume", "Fitness", "Vitamins & Supplements", "Fitness Accessories", "Bracelets", "Earrings", "Engagement Rings", "Necklaces", "Rings", "Wedding Bands", "Bikini", "One Piece") },
  { name: "Sub-Category", type: "singleLineText" },
  { name: "Initiative", type: "singleSelect", options: opts("New Product Launch", "Seasonal Campaign", "Brand Awareness", "Website", "Paid Media", "Retention/CRM", "International", "Category Campaign", "Packaging", "Events", "OOH", "TVC", "Organic Social", "Marketing", "PDP Graphics", "Direct Mail", "Copy", "Presentation Design", "B2B", "Other") },
  { name: "Project Type", type: "singleSelect", options: opts("Product Launch", "360 Campaign", "Integrated", "Event", "B2B", "Direct Mail", "Seasonal Refresh", "BAU/Evergreen", "Site Update", "Packaging", "Brand", "Paid Media", "Retention/CRM", "OOH", "TVC", "Other") },
  { name: "Products Featured", type: "multilineText" },
  { name: "Deliverables Required", type: "multilineText" },
  { name: "Target Audience", type: "multilineText" },
  { name: "Reference Materials", type: "url" },
  { name: "Supporting Brief URL", type: "url" },
  { name: "Supporting Files", type: "multipleAttachments" },
  { name: "Form Attachments", type: "multipleAttachments", description: "Legacy field" },
  { name: "Anything Else We Should Know", type: "multilineText" },
  { name: "Expected Impact and KPIs", type: "multilineText" },
  { name: "KPI Notes", type: "multilineText", description: "Legacy field" },
  { name: "Stakeholders", type: "multilineText" },
  { name: "Readiness Status", type: "singleSelect", options: opts("Not Ready", "Partially Ready", "Ready to Brief", "Ready to Execute", "Blocked — Missing Info", "Needs Triage", "Awaiting Info", "Ready", "Not Ready") },
  { name: "Lifestyle/Editorial Accompanying Product Stock Status", type: "singleSelect", options: opts("In Stock", "Pre-Order", "Expected — 2 Weeks", "Expected — 4+ Weeks", "Out of Stock", "Unknown") },
  { name: "Workback Template", type: "singleSelect", options: WORKBACK_TEMPLATE },
  { name: "Estimated Start Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "Estimated Delivery Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "PDP Handoff Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "PDP Live on Site Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "Product Launch Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "Launch Date", type: "date", options: { dateFormat: { name: "iso" } }, description: "Legacy field" },
  { name: "New Product On-Site Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "Campaign Go-Live Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "SLA Status", type: "singleSelect", options: opts("On Track", "At Risk (48h)", "Breached", "Paused", "N/A") },
  { name: "SLA Due Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "Cross-Functional Partners", type: "multipleSelects", options: CROSS_FUNCTIONAL_PARTNERS },
  { name: "Stakeholder Notified", type: "checkbox" },
  { name: "Anything Else We Need to Know", type: "multilineText" },
  { name: "Additional Products Needed (On-Figure Styling)", type: "singleLineText" },
  { name: "Tasks and Deliverables", type: "singleLineText" },
  { name: "Creative Brief Doc URL", type: "url" },
  { name: "Google Form Timestamp", type: "singleLineText" },
  { name: "Brief Auto-Generated", type: "checkbox" },
  { name: "Creative Request Status", type: "singleSelect", options: CREATIVE_REQUEST_STATUS },
  { name: "Current Stage", type: "singleSelect", options: CURRENT_STAGE },
  { name: "Creative Assigned Team", type: "multipleSelects", options: opts("Design", "Copy", "Photo/Studio", "AI/Retouch") },
  { name: "Creative POC", type: "singleLineText" },
  { name: "Executive Sponsor", type: "singleLineText" },
  { name: "Queue Position", type: "number", options: { precision: 0 } },
  { name: "Readiness Status (Internal)", type: "singleSelect", options: opts("Ready", "Waiting on Brief", "Waiting on Assets", "Waiting on Approval", "Blocked") },
  { name: "Scope Size", type: "singleSelect", options: opts("XS (< 2 hours)", "S (half day)", "M (1–2 days)", "L (3–5 days)", "XL (1–2 weeks)", "XXL (2+ weeks)") },
  { name: "Hours Estimated", type: "number", options: { precision: 1 } },
  { name: "Hours Actual", type: "number", options: { precision: 1 } },
  { name: "Sync Source", type: "singleSelect", options: opts("Google Form Sync", "Airtable Form", "Manual Entry", "Jira", "Monday.com") },
  { name: "Status", type: "singleSelect", options: STATUS },
  { name: "Completed Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "Asset Status", type: "singleSelect", options: opts("Draft", "In Review", "Ready") },
  {
    name: "At Risk",
    type: "formula",
    options: {
      formula: 'IF(OR(AND({Due Date},{Due Date}<TODAY(),{Status}!="Complete"),AND({Launch Date},{Launch Date}<TODAY(),{Status}!="Complete"),{Status}="Blocked"),TRUE(),FALSE())',
      isValid: true,
      referencedFieldIds: [],
    },
  },
  {
    name: "Days Until Due",
    type: "formula",
    options: {
      formula: "IF({SLA Due Date},DATETIME_DIFF({SLA Due Date},TODAY(),'days'),BLANK())",
      isValid: true,
      referencedFieldIds: [],
    },
  },
  {
    name: "Week Submitted",
    type: "formula",
    options: {
      formula: 'IF({Request Date},DATETIME_FORMAT({Request Date},"YYYY")&"-W"&DATETIME_FORMAT({Request Date},"WW"),BLANK())',
      isValid: true,
      referencedFieldIds: [],
    },
  },
];

const WORKBACK_TASKS_FIELDS = [
  { name: "Task Name", type: "singleLineText" },
  { name: "Request ID", type: "multipleRecordLinks", linkedTableName: "Requests" },
  { name: "Milestone", type: "singleSelect", options: opts("Intake", "Creative", "Production", "Post-Production", "Review", "Approval", "Launch", "Delivery", "Revision") },
  { name: "Owner", type: "singleCollaborator" },
  { name: "Due Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "Status", type: "singleSelect", options: opts("Not started", "In Progress", "Complete", "Blocked") },
  { name: "Dependency", type: "singleLineText" },
  { name: "Slack Notify?", type: "checkbox" },
  {
    name: "Is Overdue",
    type: "formula",
    options: {
      formula: 'IF(AND({Due Date},{Due Date}<TODAY(),{Status}!="Complete"),TRUE(),FALSE())',
      isValid: true,
      referencedFieldIds: [],
    },
  },
];

const APPROVAL_TRACKER_FIELDS = [
  { name: "Request ID", type: "multipleRecordLinks", linkedTableName: "Requests" },
  { name: "Approval Stage", type: "singleSelect", options: opts("Merchant Approval", "Creative Lead Approval", "Final Approval", "Executive Approval") },
  { name: "Status", type: "singleSelect", options: opts("Awaiting Approval", "Approved", "Needs Revision", "Rejected") },
  { name: "Approver", type: "singleCollaborator" },
  { name: "Due Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "Notes", type: "multilineText" },
];

const MARKETING_CALENDAR_FIELDS = [
  { name: "Campaign Name", type: "singleLineText" },
  { name: "Go-Live Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "Launch Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "Shoot Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "Due Date", type: "date", options: { dateFormat: { name: "iso" } } },
  { name: "Channel", type: "singleSelect", options: CHANNEL },
  { name: "Owner", type: "singleCollaborator" },
  { name: "Campaign", type: "singleLineText" },
];

const ASSET_HUB_FIELDS = [
  { name: "Asset Name", type: "singleLineText" },
  { name: "Category", type: "singleSelect", options: CATEGORY },
  { name: "Channel", type: "multipleSelects", options: CHANNEL },
  { name: "Usage Rights", type: "singleSelect", options: opts("Cleared", "Needs Review", "Expired", "Internal Only") },
  { name: "Tags", type: "multipleSelects", options: opts("PDP", "Campaign", "Social", "Email", "Packaging", "Reusable") },
  { name: "Reusable", type: "checkbox" },
  { name: "Rights Status", type: "singleSelect", options: opts("Cleared", "Needs Review", "Expired") },
  { name: "Preview", type: "multipleAttachments" },
];

const BUDGET_FIELDS = [
  { name: "Request ID", type: "multipleRecordLinks", linkedTableName: "Requests" },
  { name: "Line Item", type: "singleLineText" },
  { name: "Estimate", type: "currency", options: { precision: 2, symbol: "$" } },
  { name: "Actual", type: "currency", options: { precision: 2, symbol: "$" } },
  {
    name: "Variance",
    type: "formula",
    options: {
      formula: "{Estimate}-{Actual}",
      isValid: true,
      referencedFieldIds: [],
    },
  },
];

const CREATIVE_BRIEFS_FIELDS = [
  { name: "Brief Name", type: "singleLineText" },
  { name: "Request ID", type: "multipleRecordLinks", linkedTableName: "Requests" },
  { name: "Brief URL", type: "url" },
  { name: "Status", type: "singleSelect", options: opts("Draft", "In Review", "Approved") },
];

const TABLES = [
  { name: "Requests", fields: REQUESTS_FIELDS, primaryField: "Project Name" },
  { name: "Workback Tasks", fields: WORKBACK_TASKS_FIELDS, primaryField: "Task Name" },
  { name: "Approval Tracker", fields: APPROVAL_TRACKER_FIELDS, primaryField: "Approval Stage" },
  { name: "Marketing Calendar", fields: MARKETING_CALENDAR_FIELDS, primaryField: "Campaign Name" },
  { name: "Asset Hub", fields: ASSET_HUB_FIELDS, primaryField: "Asset Name" },
  { name: "Budget", fields: BUDGET_FIELDS, primaryField: "Line Item" },
  { name: "Creative Briefs", fields: CREATIVE_BRIEFS_FIELDS, primaryField: "Brief Name" },
];

/** Map Request Type Classification → legacy Request Type for workback script */
const CLASSIFICATION_TO_WORKBACK = [
  { match: /^PDP /, template: "PDP / Studio Photoshoot" },
  { match: /^Campaign /, template: "Campaign" },
  { match: /^(Organic Social|Paid Social)$/, template: "Campaign" },
  { match: /^(AI Image Generation|Creative — AI)$/, template: "AI Creative Request" },
  { match: /^(Design Only|Copy Only|Creative — Design|Creative — Copy|Retouching|Video \/ Motion)$/, template: "Design / Copy" },
  { match: /^(Email \/ Lifecycle|Web \/ Landing Page|Packaging|Direct Mail|Event \/ Trade Show|OOH \/ TVC)$/, template: "Design / Copy" },
];

module.exports = {
  BASE_ID,
  TABLES,
  CLASSIFICATION_TO_WORKBACK,
};
