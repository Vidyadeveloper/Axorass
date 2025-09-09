
            class ProductProposalApprovalDecision extends HTMLElement {
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
        <h2>Decision</h2>
        <form id="form">
          
            <label for="prop_status">Status</label>
            <input type="text" id="prop_status" name="prop_status" value="${this._formData["prop_status"] || ""}" />
          
            <label for="prop_requestedBudget">Requested Budget</label>
            <input type="text" id="prop_requestedBudget" name="prop_requestedBudget" value="${this._formData["prop_requestedBudget"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["prop_status"] = this.shadowRoot.querySelector("#prop_status").value;
      data["prop_requestedBudget"] = this.shadowRoot.querySelector("#prop_requestedBudget").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("product-proposal-approval-decision", ProductProposalApprovalDecision);
export default ProductProposalApprovalDecision;
