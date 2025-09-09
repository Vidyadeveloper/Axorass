// Data Model: DM_INCIDENT
module.exports = {
  "id": "DM_INCIDENT",
  "label": "Incident",
  "description": "Rapid-response incident model for containment, resolution and futuristic postmortems.",
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
      "id": "inc_id",
      "label": "Incident ID",
      "type": "text",
      "description": "Unique incident identifier.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "inc_summary",
      "label": "Summary",
      "type": "text",
      "description": "One-line summary of the incident.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "inc_details",
      "label": "Details",
      "type": "text",
      "description": "Detailed incident log and updates.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "inc_severity",
      "label": "Severity",
      "type": "text",
      "description": "Severity level (e.g., Critical, Major, Minor).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "inc_reportedAt",
      "label": "Reported At",
      "type": "date",
      "description": "Timestamp when the incident was reported.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "inc_status",
      "label": "Status",
      "type": "text",
      "description": "Current lifecycle status of the incident.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "inc_reporterEmail",
      "label": "Reporter Email",
      "type": "email",
      "description": "Contact of the person who reported the incident.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};