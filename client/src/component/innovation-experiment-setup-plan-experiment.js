
            class InnovationExperimentSetupPlanExperiment extends HTMLElement {
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
        <h2>Plan Experiment</h2>
        <form id="form">
          
            <label for="exp_startDate">Start Date</label>
            <input type="text" id="exp_startDate" name="exp_startDate" value="${this._formData["exp_startDate"] || ""}" />
          
            <label for="exp_endDate">End Date</label>
            <input type="text" id="exp_endDate" name="exp_endDate" value="${this._formData["exp_endDate"] || ""}" />
          
            <label for="exp_leadEmail">Lead Email</label>
            <input type="text" id="exp_leadEmail" name="exp_leadEmail" value="${this._formData["exp_leadEmail"] || ""}" />
          
            <label for="proj_id">Project ID</label>
            <input type="text" id="proj_id" name="proj_id" value="${this._formData["proj_id"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["exp_startDate"] = this.shadowRoot.querySelector("#exp_startDate").value;
      data["exp_endDate"] = this.shadowRoot.querySelector("#exp_endDate").value;
      data["exp_leadEmail"] = this.shadowRoot.querySelector("#exp_leadEmail").value;
      data["proj_id"] = this.shadowRoot.querySelector("#proj_id").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("innovation-experiment-setup-plan-experiment", InnovationExperimentSetupPlanExperiment);
export default InnovationExperimentSetupPlanExperiment;
