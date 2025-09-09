
            class IncidentResponseAssign&ContainAssignResponder extends HTMLElement {
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
        <h2>Assign Responder</h2>
        <form id="form">
          
            <label for="proj_id">Project ID</label>
            <input type="text" id="proj_id" name="proj_id" value="${this._formData["proj_id"] || ""}" />
          
            <label for="proj_ownerEmail">Owner Email</label>
            <input type="text" id="proj_ownerEmail" name="proj_ownerEmail" value="${this._formData["proj_ownerEmail"] || ""}" />
          
            <label for="stk_email">Email</label>
            <input type="text" id="stk_email" name="stk_email" value="${this._formData["stk_email"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["proj_id"] = this.shadowRoot.querySelector("#proj_id").value;
      data["proj_ownerEmail"] = this.shadowRoot.querySelector("#proj_ownerEmail").value;
      data["stk_email"] = this.shadowRoot.querySelector("#stk_email").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("incident-response-assign-&-contain-assign-responder", IncidentResponseAssign&ContainAssignResponder);
export default IncidentResponseAssign&ContainAssignResponder;
