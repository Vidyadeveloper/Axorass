
            class ProductProposalHandoffHandoffToDelivery extends HTMLElement {
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
        <h2>Handoff to Delivery</h2>
        <form id="form">
          
            <label for="proj_title">Title</label>
            <input type="text" id="proj_title" name="proj_title" value="${this._formData["proj_title"] || ""}" />
          
            <label for="proj_ownerEmail">Owner Email</label>
            <input type="text" id="proj_ownerEmail" name="proj_ownerEmail" value="${this._formData["proj_ownerEmail"] || ""}" />
          
            <label for="prop_id">Proposal ID</label>
            <input type="text" id="prop_id" name="prop_id" value="${this._formData["prop_id"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["proj_title"] = this.shadowRoot.querySelector("#proj_title").value;
      data["proj_ownerEmail"] = this.shadowRoot.querySelector("#proj_ownerEmail").value;
      data["prop_id"] = this.shadowRoot.querySelector("#prop_id").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("product-proposal-handoff-handoff-to-delivery", ProductProposalHandoffHandoffToDelivery);
export default ProductProposalHandoffHandoffToDelivery;
