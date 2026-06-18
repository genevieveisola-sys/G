// Airtable Automation script: Generate Workback Tasks from Request Type
// Trigger: When a record is created in Requests OR when Request Type is set/changed
// Input variable: requestRecordId = Record ID from trigger
//
// Creates task records in Workback Tasks based on Request Type templates.
// Each task links to Request ID and sets Status = Not started.

const { requestRecordId } = input.config();

const REQUESTS = "Requests";
const TASKS = "Workback Tasks";

const TEMPLATES = {
  "PDP / Studio Photoshoot": [
    { name: "Sample Received", milestone: "Intake", slackNotify: false, dependsOn: null },
    { name: "Intake Complete", milestone: "Intake", slackNotify: false, dependsOn: "Sample Received" },
    { name: "Shoot Scheduled", milestone: "Production", slackNotify: false, dependsOn: "Intake Complete" },
    { name: "Shoot Complete", milestone: "Production", slackNotify: false, dependsOn: "Shoot Scheduled" },
    { name: "Retouching", milestone: "Post-Production", slackNotify: false, dependsOn: "Shoot Complete" },
    { name: "Upload to Contentful", milestone: "Delivery", slackNotify: false, dependsOn: "Retouching" },
    { name: "Approval", milestone: "Approval", slackNotify: true, dependsOn: "Upload to Contentful" },
    { name: "Go Live", milestone: "Launch", slackNotify: true, dependsOn: "Approval" },
  ],
  "Campaign": [
    { name: "Brief Approval", milestone: "Intake", slackNotify: true, dependsOn: null },
    { name: "Concepting", milestone: "Creative", slackNotify: false, dependsOn: "Brief Approval" },
    { name: "Internal Review", milestone: "Review", slackNotify: false, dependsOn: "Concepting" },
    { name: "Executive Review", milestone: "Review", slackNotify: true, dependsOn: "Internal Review" },
    { name: "Production", milestone: "Production", slackNotify: false, dependsOn: "Executive Review" },
    { name: "Shoot", milestone: "Production", slackNotify: false, dependsOn: "Production" },
    { name: "Retouching", milestone: "Post-Production", slackNotify: false, dependsOn: "Shoot" },
    { name: "Final Approval", milestone: "Approval", slackNotify: true, dependsOn: "Retouching" },
    { name: "Launch", milestone: "Launch", slackNotify: true, dependsOn: "Final Approval" },
  ],
  "AI Creative Request": [
    { name: "Prompt Development", milestone: "Intake", slackNotify: false, dependsOn: null },
    { name: "Generation", milestone: "Production", slackNotify: false, dependsOn: "Prompt Development" },
    { name: "Review", milestone: "Review", slackNotify: false, dependsOn: "Generation" },
    { name: "Revisions", milestone: "Revision", slackNotify: false, dependsOn: "Review" },
    { name: "Delivery", milestone: "Delivery", slackNotify: true, dependsOn: "Revisions" },
  ],
  "Design / Copy": [
    { name: "Brief Review", milestone: "Intake", slackNotify: false, dependsOn: null },
    { name: "First Draft", milestone: "Creative", slackNotify: false, dependsOn: "Brief Review" },
    { name: "Internal Review", milestone: "Review", slackNotify: false, dependsOn: "First Draft" },
    { name: "Stakeholder Review", milestone: "Review", slackNotify: true, dependsOn: "Internal Review" },
    { name: "Revision", milestone: "Revision", slackNotify: false, dependsOn: "Stakeholder Review" },
    { name: "Final Delivery", milestone: "Delivery", slackNotify: true, dependsOn: "Revision" },
  ],
};

const requestsTable = base.getTable(REQUESTS);
const tasksTable = base.getTable(TASKS);

const request = await requestsTable.selectRecordAsync(requestRecordId);
if (!request) throw new Error("Request record not found.");

function resolveWorkbackTemplate(request) {
  const classification = request.getCellValueAsString("Request Type Classification");
  const legacyType = request.getCellValueAsString("Request Type");

  if (legacyType && TEMPLATES[legacyType]) return legacyType;

  if (!classification) return null;

  if (/^PDP /i.test(classification)) return "PDP / Studio Photoshoot";
  if (/^Campaign /i.test(classification)) return "Campaign";
  if (/^(Organic Social|Paid Social)$/i.test(classification)) return "Campaign";
  if (/^(AI Image Generation|Creative — AI)$/i.test(classification)) return "AI Creative Request";
  if (/^(Design Only|Copy Only|Creative — Design|Creative — Copy|Retouching|Video \/ Motion|Email \/ Lifecycle|Web \/ Landing Page|Packaging|Direct Mail|Event \/ Trade Show|OOH \/ TVC)$/i.test(classification)) {
    return "Design / Copy";
  }

  return legacyType || null;
}

const requestType = resolveWorkbackTemplate(request);
if (!requestType) {
  output.set("skipped", "No Request Type or Request Type Classification set");
  return;
}

const template = TEMPLATES[requestType];
if (!template) {
  output.set("skipped", `No template for: ${requestType}`);
  return;
}

// Skip if tasks already exist for this request
const existing = await tasksTable.selectRecordsAsync({
  fields: ["Request ID", "Task Name"],
});
const alreadyHasTasks = existing.records.some((r) => {
  const linked = r.getCellValue("Request ID");
  return linked && linked[0]?.id === request.id;
});
if (alreadyHasTasks) {
  output.set("skipped", "Tasks already exist for this request");
  return;
}

const requestId = request.getCellValueAsString("Request ID") || request.name;
const launchDate = request.getCellValue("Launch Date");
const dueDate = request.getCellValue("Due Date");
const creativePoc = request.getCellValue("Creative POC");

function offsetDate(baseDate, daysBack) {
  if (!baseDate) return null;
  const d = new Date(baseDate);
  d.setDate(d.getDate() - daysBack);
  return d.toISOString().split("T")[0];
}

const total = template.length;
const records = template.map((task, index) => {
  const daysBeforeLaunch = Math.round(((total - index) / total) * 14);
  const taskDue = offsetDate(dueDate || launchDate, daysBeforeLaunch) || dueDate || launchDate;

  const fields = {
    "Task Name": task.name,
    "Request ID": [{ id: request.id }],
    Milestone: task.milestone,
    Status: { name: "Not started" },
    "Slack Notify?": task.slackNotify,
  };

  if (taskDue) fields["Due Date"] = taskDue;
  if (creativePoc) fields.Owner = creativePoc;
  if (task.dependsOn) fields.Dependency = task.dependsOn;

  return { fields };
});

while (records.length) {
  await tasksTable.createRecordsAsync(records.splice(0, 50));
}

output.set("createdCount", template.length);
output.set("requestType", requestType);
