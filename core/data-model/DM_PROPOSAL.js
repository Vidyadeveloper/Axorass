// Data Model: DM_PROPOSAL
module.exports = {
  "id": "DM_PROPOSAL",
  "label": "Proposal",
  "description": "Product and feature proposal model for futuristic idea-to-decision flow.",
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
      "id": "prop_id",
      "label": "Proposal ID",
      "type": "text",
      "description": "Unique identifier for the proposal.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "prop_title",
      "label": "Title",
      "type": "text",
      "description": "Proposal title.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "prop_summary",
      "label": "Summary",
      "type": "text",
      "description": "Executive summary of the proposal.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "prop_requestedBudget",
      "label": "Requested Budget",
      "type": "number",
      "description": "Budget requested to realize the proposal.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "prop_targetMarket",
      "label": "Target Market",
      "type": "text",
      "description": "Primary market or audience.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "prop_submittedByEmail",
      "label": "Submitted By",
      "type": "email",
      "description": "Email of proposal submitter.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "prop_status",
      "label": "Status",
      "type": "text",
      "description": "Current approval status.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};