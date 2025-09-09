const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class ProductProposalCase extends BlazeCase {
  constructor() {
    super(
      "Product_Proposal",
      "Product Proposal",
      [
        {
          id: "Draft",
          label: "Draft",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "product-proposal-draft-start",
              dataModelReference: { models: [] }
            },
            {
              id: "pp.draft",
              label: "Draft Proposal",
              type: "manual",
              status: "pending",
              view: "product-proposal-draft-draft-proposal",
              dataModelReference: { models: ["prop_title", "prop_summary", "prop_targetMarket", "prop_requestedBudget", "prop_submittedByEmail"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "product-proposal-draft-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Review",
          label: "Review",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "product-proposal-review-start",
              dataModelReference: { models: [] }
            },
            {
              id: "pp.review",
              label: "Internal Review",
              type: "manual",
              status: "pending",
              view: "product-proposal-review-internal-review",
              dataModelReference: { models: ["stk_email", "prop_status"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "product-proposal-review-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Approval",
          label: "Approval",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "product-proposal-approval-start",
              dataModelReference: { models: [] }
            },
            {
              id: "pp.approval",
              label: "Decision",
              type: "manual",
              status: "pending",
              view: "product-proposal-approval-decision",
              dataModelReference: { models: ["prop_status", "prop_requestedBudget"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "product-proposal-approval-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Handoff",
          label: "Handoff",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "product-proposal-handoff-start",
              dataModelReference: { models: [] }
            },
            {
              id: "pp.handoff",
              label: "Handoff to Delivery",
              type: "manual",
              status: "pending",
              view: "product-proposal-handoff-handoff-to-delivery",
              dataModelReference: { models: ["proj_title", "proj_ownerEmail", "prop_id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "product-proposal-handoff-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new ProductProposalCase();