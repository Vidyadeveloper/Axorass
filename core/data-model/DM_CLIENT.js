// Data Model: DM_CLIENT
module.exports = {
  "id": "DM_CLIENT",
  "label": "Client",
  "description": "Client profile and onboarding model for versatile partnerships.",
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
      "id": "client_id",
      "label": "Client ID",
      "type": "text",
      "description": "Unique client identifier.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "client_name",
      "label": "Name",
      "type": "text",
      "description": "Client primary contact name.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "client_contactEmail",
      "label": "Contact Email",
      "type": "email",
      "description": "Primary contact email.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "client_company",
      "label": "Company",
      "type": "text",
      "description": "Client company name.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "client_onboardingDate",
      "label": "Onboarding Date",
      "type": "date",
      "description": "Date client onboarding was completed.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};