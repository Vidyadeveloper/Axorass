const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class IncidentResponseCase extends BlazeCase {
  constructor() {
    super(
      "Incident_Response",
      "Incident Response",
      [
        {
          id: "Triage",
          label: "Triage",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "incident-response-triage-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ir.log",
              label: "Log Incident",
              type: "manual",
              status: "pending",
              view: "incident-response-triage-log-incident",
              dataModelReference: { models: ["inc_summary", "inc_severity", "inc_reportedAt", "inc_reporterEmail", "inc_details"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "incident-response-triage-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Assign_&_Contain",
          label: "Assign & Contain",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "incident-response-assign-&-contain-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ir.assign",
              label: "Assign Responder",
              type: "manual",
              status: "pending",
              view: "incident-response-assign-&-contain-assign-responder",
              dataModelReference: { models: ["proj_id", "proj_ownerEmail", "stk_email"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "incident-response-assign-&-contain-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Resolve",
          label: "Resolve",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "incident-response-resolve-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ir.resolve",
              label: "Resolve Incident",
              type: "manual",
              status: "pending",
              view: "incident-response-resolve-resolve-incident",
              dataModelReference: { models: ["inc_status", "inc_details"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "incident-response-resolve-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Postmortem",
          label: "Postmortem",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "incident-response-postmortem-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ir.postmortem",
              label: "Postmortem & Learn",
              type: "manual",
              status: "pending",
              view: "incident-response-postmortem-postmortem-&-learn",
              dataModelReference: { models: ["inc_details", "proj_id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "incident-response-postmortem-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new IncidentResponseCase();