
            class InnovationExperimentPublishPublishInsights extends HTMLElement {
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
        <h2>Publish Insights</h2>
        <form id="form">
          
            <label for="exp_outcomeSummary">Outcome Summary</label>
            <input type="text" id="exp_outcomeSummary" name="exp_outcomeSummary" value="${this._formData["exp_outcomeSummary"] || ""}" />
          
            <label for="stk_email">Email</label>
            <input type="text" id="stk_email" name="stk_email" value="${this._formData["stk_email"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["exp_outcomeSummary"] = this.shadowRoot.querySelector("#exp_outcomeSummary").value;
      data["stk_email"] = this.shadowRoot.querySelector("#stk_email").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("innovation-experiment-publish-publish-insights", InnovationExperimentPublishPublishInsights);
export default InnovationExperimentPublishPublishInsights;
