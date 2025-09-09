
            class IncidentResponseTriageLogIncident extends HTMLElement {
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
        <h2>Log Incident</h2>
        <form id="form">
          
            <label for="inc_summary">Summary</label>
            <input type="text" id="inc_summary" name="inc_summary" value="${this._formData["inc_summary"] || ""}" />
          
            <label for="inc_severity">Severity</label>
            <input type="text" id="inc_severity" name="inc_severity" value="${this._formData["inc_severity"] || ""}" />
          
            <label for="inc_reportedAt">Reported At</label>
            <input type="text" id="inc_reportedAt" name="inc_reportedAt" value="${this._formData["inc_reportedAt"] || ""}" />
          
            <label for="inc_reporterEmail">Reporter Email</label>
            <input type="text" id="inc_reporterEmail" name="inc_reporterEmail" value="${this._formData["inc_reporterEmail"] || ""}" />
          
            <label for="inc_details">Details</label>
            <input type="text" id="inc_details" name="inc_details" value="${this._formData["inc_details"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["inc_summary"] = this.shadowRoot.querySelector("#inc_summary").value;
      data["inc_severity"] = this.shadowRoot.querySelector("#inc_severity").value;
      data["inc_reportedAt"] = this.shadowRoot.querySelector("#inc_reportedAt").value;
      data["inc_reporterEmail"] = this.shadowRoot.querySelector("#inc_reporterEmail").value;
      data["inc_details"] = this.shadowRoot.querySelector("#inc_details").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("incident-response-triage-log-incident", IncidentResponseTriageLogIncident);
export default IncidentResponseTriageLogIncident;
