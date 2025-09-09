// Data Model: DM_TASK
module.exports = {
  "id": "DM_TASK",
  "label": "Task",
  "description": "Execution-level record for work items tied to projects—streamlined and futuristic task metadata.",
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
      "id": "task_id",
      "label": "Task ID",
      "type": "text",
      "description": "Unique identifier for the task.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "task_title",
      "label": "Title",
      "type": "text",
      "description": "Short task title.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "task_description",
      "label": "Description",
      "type": "text",
      "description": "Details and acceptance criteria.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "task_assigneeEmail",
      "label": "Assignee Email",
      "type": "email",
      "description": "Email of assigned team member.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "task_dueDate",
      "label": "Due Date",
      "type": "date",
      "description": "Planned completion date for the task.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "task_status",
      "label": "Status",
      "type": "text",
      "description": "Current task status (e.g., To Do, In Progress, Done).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "task_estimateHours",
      "label": "Estimate (hours)",
      "type": "number",
      "description": "Estimated effort in hours.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};