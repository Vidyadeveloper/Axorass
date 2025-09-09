
            class ProductProposalDraftDraftProposal extends HTMLElement {
         constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._formData = {};
    this.render();
  }

  get formData() { return this._formData; }
  set formData(data) { this._formData = data; this.render(); }

  render() {
    this.shadowRoot.innerHTML = `
      <style>/* styling */</style>
      <div>
        <h2>Draft Proposal</h2>
        <form id="form">
          
            <label for="prop_title">Title</label>
            <input type="text" id="prop_title" name="prop_title" value="${this._formData["prop_title"] || ""}" />
          
            <label for="prop_summary">Summary</label>
            <input type="text" id="prop_summary" name="prop_summary" value="${this._formData["prop_summary"] || ""}" />
          
            <label for="prop_targetMarket">Target Market</label>
            <input type="text" id="prop_targetMarket" name="prop_targetMarket" value="${this._formData["prop_targetMarket"] || ""}" />
          
            <label for="prop_requestedBudget">Requested Budget</label>
            <input type="text" id="prop_requestedBudget" name="prop_requestedBudget" value="${this._formData["prop_requestedBudget"] || ""}" />
          
            <label for="prop_submittedByEmail">Submitted By</label>
            <input type="text" id="prop_submittedByEmail" name="prop_submittedByEmail" value="${this._formData["prop_submittedByEmail"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["prop_title"] = this.shadowRoot.querySelector("#prop_title").value;
      data["prop_summary"] = this.shadowRoot.querySelector("#prop_summary").value;
      data["prop_targetMarket"] = this.shadowRoot.querySelector("#prop_targetMarket").value;
      data["prop_requestedBudget"] = this.shadowRoot.querySelector("#prop_requestedBudget").value;
      data["prop_submittedByEmail"] = this.shadowRoot.querySelector("#prop_submittedByEmail").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("product-proposal-draft-draft-proposal", ProductProposalDraftDraftProposal);
export default ProductProposalDraftDraftProposal;
