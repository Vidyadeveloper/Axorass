const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class InnovationExperimentCase extends BlazeCase {
  constructor() {
    super(
      "Innovation_Experiment",
      "Innovation Experiment",
      [
        {
          id: "Ideation",
          label: "Ideation",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "innovation-experiment-ideation-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ie.ideate",
              label: "Define Hypothesis",
              type: "manual",
              status: "pending",
              view: "innovation-experiment-ideation-define-hypothesis",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "innovation-experiment-ideation-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Setup",
          label: "Setup",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "innovation-experiment-setup-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ie.setup",
              label: "Plan Experiment",
              type: "manual",
              status: "pending",
              view: "innovation-experiment-setup-plan-experiment",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "innovation-experiment-setup-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Run",
          label: "Run",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "innovation-experiment-run-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ie.run",
              label: "Execute Experiment",
              type: "manual",
              status: "pending",
              view: "innovation-experiment-run-execute-experiment",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "innovation-experiment-run-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Analyze",
          label: "Analyze",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "innovation-experiment-analyze-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ie.analyze",
              label: "Analyze Results",
              type: "manual",
              status: "pending",
              view: "innovation-experiment-analyze-analyze-results",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "innovation-experiment-analyze-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Publish",
          label: "Publish",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "innovation-experiment-publish-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ie.publish",
              label: "Publish Insights",
              type: "manual",
              status: "pending",
              view: "innovation-experiment-publish-publish-insights",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "innovation-experiment-publish-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new InnovationExperimentCase();