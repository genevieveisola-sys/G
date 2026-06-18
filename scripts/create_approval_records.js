// Airtable Automation script: Create Approval Tracker records when Status = In Review
// Trigger: When Status field changes in Requests
// Condition: Status = "In Review"
// Input variable: requestRecordId = Record ID from trigger

const { requestRecordId } = input.config();

const REQUESTS = "Requests";
const APPROVALS = "Approval Tracker";

const BASE_STAGES = [
  "Merchant Approval",
  "Creative Lead Approval",
  "Final Approval",
];

const requestsTable = base.getTable(REQUESTS);
const approvalsTable = base.getTable(APPROVALS);

const request = await requestsTable.selectRecordAsync(requestRecordId);
if (!request) throw new Error("Request record not found.");

const status = request.getCellValueAsString("Status");
if (status !== "In Review") {
  output.set("skipped", "Status is not In Review");
  return;
}

const priority = request.getCellValueAsString("Priority");
const stages = [...BASE_STAGES];
if (priority === "P0 - Business Critical") {
  stages.push("Executive Approval");
}

// Avoid duplicates
const existing = await approvalsTable.selectRecordsAsync({
  fields: ["Request ID", "Approval Stage"],
});
const existingStages = new Set(
  existing.records
    .filter((r) => {
      const linked = r.getCellValue("Request ID");
      return linked && linked[0]?.id === request.id;
    })
    .map((r) => r.getCellValueAsString("Approval Stage"))
);

const dueDate = request.getCellValue("Due Date");
const records = stages
  .filter((stage) => !existingStages.has(stage))
  .map((stage) => ({
    fields: {
      "Request ID": [{ id: request.id }],
      "Approval Stage": stage,
      Status: { name: "Awaiting Approval" },
      ...(dueDate ? { "Due Date": dueDate } : {}),
    },
  }));

if (records.length) {
  while (records.length) {
    await approvalsTable.createRecordsAsync(records.splice(0, 50));
  }
}

output.set("createdCount", stages.length - existingStages.size);
