// Data Model: DM_EXPERIMENT
module.exports = {
  "id": "DM_EXPERIMENT",
  "label": "Experiment",
  "description": "Lightweight experiment model for rapid, futuristic innovation cycles.",
  "isEditable": true,
  "attributes": [
    {
      "id": "id",
      "type": "string",
      "label": "ID",
      "required": true,
      "unique": true,
      "indexed": true
    },
    {
      "id": "description",
      "type": "string",
      "label": "Description",
      "defaultValue": ""
    },
    {
      "id": "startDate",
      "type": "date",
      "label": "Start Date",
      "required": true
    },
    {
      "id": "endDate",
      "type": "date",
      "label": "End Date"
    },
    {
      "id": "createdBy",
      "type": "string",
      "label": "Created By",
      "accessControl": {
        "read": [
          "admin"
        ],
        "write": [
          "admin"
        ]
      }
    },
    {
      "id": "createdAt",
      "type": "datetime",
      "label": "Created At"
    },
    {
      "id": "status",
      "type": "string",
      "label": "Status",
      "defaultValue": "draft",
      "allowedValues": [
        "draft",
        "active",
        "inactive",
        "archived"
      ]
    },
    {
      "id": "version",
      "type": "number",
      "label": "Version",
      "defaultValue": 1
    },
    {
      "id": "createdAge",
      "type": "computed",
      "label": "Age (days)",
      "dependencies": [
        "createdAt"
      ]
    },
    {
      "id": "exp_id",
      "label": "Experiment ID",
      "type": "text",
      "description": "Unique experiment identifier.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "exp_hypothesis",
      "label": "Hypothesis",
      "type": "text",
      "description": "Concise hypothesis statement.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "exp_methodology",
      "label": "Methodology",
      "type": "text",
      "description": "Planned approach and steps.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "exp_startDate",
      "label": "Start Date",
      "type": "date",
      "description": "Experiment start date.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "exp_endDate",
      "label": "End Date",
      "type": "date",
      "description": "Experiment end date.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "exp_leadEmail",
      "label": "Lead Email",
      "type": "email",
      "description": "Experiment lead contact.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "exp_outcomeSummary",
      "label": "Outcome Summary",
      "type": "text",
      "description": "Results and interpretation.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "exp_resultScore",
      "label": "Result Score",
      "type": "number",
      "description": "Numeric score or KPI from the experiment.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};