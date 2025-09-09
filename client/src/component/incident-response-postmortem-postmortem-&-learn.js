
            class IncidentResponsePostmortemPostmortem&Learn extends HTMLElement {
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
        <h2>Postmortem & Learn</h2>
        <form id="form">
          
            <label for="inc_details">Details</label>
            <input type="text" id="inc_details" name="inc_details" value="${this._formData["inc_details"] || ""}" />
          
            <label for="proj_id">Project ID</label>
            <input type="text" id="proj_id" name="proj_id" value="${this._formData["proj_id"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["inc_details"] = this.shadowRoot.querySelector("#inc_details").value;
      data["proj_id"] = this.shadowRoot.querySelector("#proj_id").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("incident-response-postmortem-postmortem-&-learn", IncidentResponsePostmortemPostmortem&Learn);
export default IncidentResponsePostmortemPostmortem&Learn;
