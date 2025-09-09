// Data Model: DM_PROJECT
module.exports = {
  "id": "DM_PROJECT",
  "label": "Project",
  "description": "Core project record for bold, futuristic initiatives—captures scope, timeline, budget and ownership.",
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
      "id": "proj_id",
      "label": "Project ID",
      "type": "text",
      "description": "Unique identifier for the project.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "proj_title",
      "label": "Title",
      "type": "text",
      "description": "Short, bold title for the project.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "proj_description",
      "label": "Description",
      "type": "text",
      "description": "Versatile summary describing scope and goals.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "proj_priority",
      "label": "Priority",
      "type": "text",
      "description": "Priority label (e.g., High, Medium, Low).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "proj_budget",
      "label": "Budget",
      "type": "number",
      "description": "Planned budget for the project in platform currency.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "proj_startDate",
      "label": "Start Date",
      "type": "date",
      "description": "Planned start date.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "proj_endDate",
      "label": "End Date",
      "type": "date",
      "description": "Planned completion date.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "proj_ownerEmail",
      "label": "Owner Email",
      "type": "email",
      "description": "Primary owner's contact email.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};