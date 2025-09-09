
            class InnovationExperimentIdeationDefineHypothesis extends HTMLElement {
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
        <h2>Define Hypothesis</h2>
        <form id="form">
          
            <label for="exp_hypothesis">Hypothesis</label>
            <input type="text" id="exp_hypothesis" name="exp_hypothesis" value="${this._formData["exp_hypothesis"] || ""}" />
          
            <label for="exp_methodology">Methodology</label>
            <input type="text" id="exp_methodology" name="exp_methodology" value="${this._formData["exp_methodology"] || ""}" />
          
            <label for="exp_leadEmail">Lead Email</label>
            <input type="text" id="exp_leadEmail" name="exp_leadEmail" value="${this._formData["exp_leadEmail"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["exp_hypothesis"] = this.shadowRoot.querySelector("#exp_hypothesis").value;
      data["exp_methodology"] = this.shadowRoot.querySelector("#exp_methodology").value;
      data["exp_leadEmail"] = this.shadowRoot.querySelector("#exp_leadEmail").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("innovation-experiment-ideation-define-hypothesis", InnovationExperimentIdeationDefineHypothesis);
export default InnovationExperimentIdeationDefineHypothesis;
