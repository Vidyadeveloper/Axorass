
            class IncidentResponseResolveResolveIncident extends HTMLElement {
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
        <h2>Resolve Incident</h2>
        <form id="form">
          
            <label for="inc_status">Status</label>
            <input type="text" id="inc_status" name="inc_status" value="${this._formData["inc_status"] || ""}" />
          
            <label for="inc_details">Details</label>
            <input type="text" id="inc_details" name="inc_details" value="${this._formData["inc_details"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["inc_status"] = this.shadowRoot.querySelector("#inc_status").value;
      data["inc_details"] = this.shadowRoot.querySelector("#inc_details").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("incident-response-resolve-resolve-incident", IncidentResponseResolveResolveIncident);
export default IncidentResponseResolveResolveIncident;
