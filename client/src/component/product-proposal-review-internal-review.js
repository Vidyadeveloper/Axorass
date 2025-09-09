
            class ProductProposalReviewInternalReview extends HTMLElement {
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
        <h2>Internal Review</h2>
        <form id="form">
          
            <label for="stk_email">Email</label>
            <input type="text" id="stk_email" name="stk_email" value="${this._formData["stk_email"] || ""}" />
          
            <label for="prop_status">Status</label>
            <input type="text" id="prop_status" name="prop_status" value="${this._formData["prop_status"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["stk_email"] = this.shadowRoot.querySelector("#stk_email").value;
      data["prop_status"] = this.shadowRoot.querySelector("#prop_status").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("product-proposal-review-internal-review", ProductProposalReviewInternalReview);
export default ProductProposalReviewInternalReview;
