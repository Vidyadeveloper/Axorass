const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class ProjectLaunchCase extends BlazeCase {
  constructor() {
    super(
      "Project_Launch",
      "Project Launch",
      [
        {
          id: "Initiation",
          label: "Initiation",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "project-launch-initiation-start",
              dataModelReference: { models: [] }
            },
            {
              id: "pl.create_project",
              label: "Create Project",
              type: "manual",
              status: "pending",
              view: "project-launch-initiation-create-project",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "project-launch-initiation-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Team_Setup",
          label: "Team Setup",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "project-launch-team-setup-start",
              dataModelReference: { models: [] }
            },
            {
              id: "pl.setup_team",
              label: "Assign Stakeholders",
              type: "manual",
              status: "pending",
              view: "project-launch-team-setup-assign-stakeholders",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "project-launch-team-setup-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Planning",
          label: "Planning",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "project-launch-planning-start",
              dataModelReference: { models: [] }
            },
            {
              id: "pl.plan_tasks",
              label: "Plan Tasks",
              type: "manual",
              status: "pending",
              view: "project-launch-planning-plan-tasks",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "project-launch-planning-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Execution",
          label: "Execution",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "project-launch-execution-start",
              dataModelReference: { models: [] }
            },
            {
              id: "pl.execute",
              label: "Execute & Monitor",
              type: "manual",
              status: "pending",
              view: "project-launch-execution-execute-&-monitor",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "project-launch-execution-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Review_&_Close",
          label: "Review & Close",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "project-launch-review-&-close-start",
              dataModelReference: { models: [] }
            },
            {
              id: "pl.close",
              label: "Review & Close",
              type: "manual",
              status: "pending",
              view: "project-launch-review-&-close-review-&-close",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "project-launch-review-&-close-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new ProjectLaunchCase();