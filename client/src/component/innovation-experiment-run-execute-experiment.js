
            class InnovationExperimentRunExecuteExperiment extends HTMLElement {
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
        <h2>Execute Experiment</h2>
        <form id="form">
          
            <label for="exp_methodology">Methodology</label>
            <input type="text" id="exp_methodology" name="exp_methodology" value="${this._formData["exp_methodology"] || ""}" />
          
            <label for="exp_startDate">Start Date</label>
            <input type="text" id="exp_startDate" name="exp_startDate" value="${this._formData["exp_startDate"] || ""}" />
          
            <label for="exp_endDate">End Date</label>
            <input type="text" id="exp_endDate" name="exp_endDate" value="${this._formData["exp_endDate"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["exp_methodology"] = this.shadowRoot.querySelector("#exp_methodology").value;
      data["exp_startDate"] = this.shadowRoot.querySelector("#exp_startDate").value;
      data["exp_endDate"] = this.shadowRoot.querySelector("#exp_endDate").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("innovation-experiment-run-execute-experiment", InnovationExperimentRunExecuteExperiment);
export default InnovationExperimentRunExecuteExperiment;
