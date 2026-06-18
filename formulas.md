# Dashboard Formulas and Rollups

Add these fields only if they do not already exist. Do not delete or rename existing fields.

---

## Requests table

### At Risk (formula, checkbox output)

```text
IF(
  OR(
    AND({Due Date}, {Due Date} < TODAY(), {Status} != "Complete"),
    AND({Launch Date}, {Launch Date} < TODAY(), {Status} != "Complete"),
    {Status} = "Blocked"
  ),
  TRUE(),
  FALSE()
)
```

### Turnaround Days (formula)

Days from created to complete:

```text
IF(
  {Status} = "Complete",
  DATETIME_DIFF({Completed Date}, CREATED_TIME(), 'days'),
  BLANK()
)
```

> Add `Completed Date` (date field) if missing; set via automation when Status → Complete.

### On Time (formula, for rollup)

```text
IF(
  AND({Status} = "Complete", {Completed Date}, {Due Date}),
  IF({Completed Date} <= {Due Date}, "On Time", "Late"),
  BLANK()
)
```

### Open Request (formula, for counting)

```text
IF(
  AND({Status} != "Complete", {Status} != "Canceled"),
  1,
  0
)
```

### Launch This Month (formula)

```text
IF(
  AND(
    {Launch Date},
    MONTH({Launch Date}) = MONTH(TODAY()),
    YEAR({Launch Date}) = YEAR(TODAY())
  ),
  1,
  0
)
```

---

## Dashboard Metrics table (or Executive Dashboard rollups)

If using a dedicated metrics table, create one record per reporting period.

| Metric | Formula / rollup |
|--------|------------------|
| Total open requests | Rollup SUM of Open Request from Requests |
| Requests at risk | Count/filter At Risk = true |
| Avg turnaround | Average of Turnaround Days |
| On-time delivery % | Count On Time = "On Time" / Count completed |
| Budget vs actual | SUM Budget Allocated vs SUM Actual Spend |
| Budget variance | SUM(Budget Allocated) - SUM(Actual Spend) |
| Asset reuse % | Count Reusable = true / Count all assets |
| Launches this month | SUM Launch This Month |

### On-Time Delivery % (formula in metrics record)

```text
IF(
  {Completed Count} > 0,
  ROUND({On Time Count} / {Completed Count} * 100, 1) & "%",
  "N/A"
)
```

### Budget Variance (formula)

```text
{Total Budget Allocated} - {Total Actual Spend}
```

### Asset Reuse % (formula)

```text
IF(
  {Total Assets} > 0,
  ROUND({Reusable Asset Count} / {Total Assets} * 100, 1) & "%",
  "N/A"
)
```

---

## Workback Tasks table

### Is Overdue (formula)

```text
IF(
  AND({Due Date}, {Due Date} < TODAY(), {Status} != "Complete"),
  TRUE(),
  FALSE()
)
```

### Due Tomorrow (formula, for scheduled automation find)

```text
IF(
  AND({Due Date}, {Due Date} = DATEADD(TODAY(), 1, 'days'), {Status} != "Complete"),
  TRUE(),
  FALSE()
)
```

---

## Approval Tracker table

### All Approvals Complete (rollup on Requests)

Rollup from linked Approval Tracker: count where Status ≠ Approved = 0 and count records > 0.

### Launch Readiness (formula on Requests)

```text
IF(
  AND(
    {All Approvals Complete},
    {Open Tasks Count} = 0,
    {Asset Status} = "Ready"
  ),
  "Ready for Launch",
  "Not Ready"
)
```

---

## Marketing Calendar

No formulas required beyond standard date fields. Use calendar view date fields:

- Go-Live Date
- Launch Date
- Shoot Date
- Due Date
