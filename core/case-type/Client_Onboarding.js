const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class ClientOnboardingCase extends BlazeCase {
  constructor() {
    super(
      "Client_Onboarding",
      "Client Onboarding",
      [
        {
          id: "Intake",
          label: "Intake",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "client-onboarding-intake-start",
              dataModelReference: { models: [] }
            },
            {
              id: "co.intake",
              label: "Collect Client Info",
              type: "manual",
              status: "pending",
              view: "client-onboarding-intake-collect-client-info",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "client-onboarding-intake-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Agreement_&_Setup",
          label: "Agreement & Setup",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "client-onboarding-agreement-&-setup-start",
              dataModelReference: { models: [] }
            },
            {
              id: "co.setup",
              label: "Create Onboarding Project",
              type: "manual",
              status: "pending",
              view: "client-onboarding-agreement-&-setup-create-onboarding-project",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "client-onboarding-agreement-&-setup-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Stakeholder_Alignment",
          label: "Stakeholder Alignment",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "client-onboarding-stakeholder-alignment-start",
              dataModelReference: { models: [] }
            },
            {
              id: "co.team",
              label: "Assign Account Team",
              type: "manual",
              status: "pending",
              view: "client-onboarding-stakeholder-alignment-assign-account-team",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "client-onboarding-stakeholder-alignment-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Launch",
          label: "Launch",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "client-onboarding-launch-start",
              dataModelReference: { models: [] }
            },
            {
              id: "co.kickoff",
              label: "Kickoff",
              type: "manual",
              status: "pending",
              view: "client-onboarding-launch-kickoff",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "client-onboarding-launch-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new ClientOnboardingCase();