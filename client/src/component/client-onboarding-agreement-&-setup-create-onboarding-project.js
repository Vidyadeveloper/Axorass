
            class ClientOnboardingAgreement&SetupCreateOnboardingProject extends HTMLElement {
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
        <h2>Create Onboarding Project</h2>
        <form id="form">
          
            <label for="proj_title">Title</label>
            <input type="text" id="proj_title" name="proj_title" value="${this._formData["proj_title"] || ""}" />
          
            <label for="proj_description">Description</label>
            <input type="text" id="proj_description" name="proj_description" value="${this._formData["proj_description"] || ""}" />
          
            <label for="proj_startDate">Start Date</label>
            <input type="text" id="proj_startDate" name="proj_startDate" value="${this._formData["proj_startDate"] || ""}" />
          
            <label for="client_onboardingDate">Onboarding Date</label>
            <input type="text" id="client_onboardingDate" name="client_onboardingDate" value="${this._formData["client_onboardingDate"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["proj_title"] = this.shadowRoot.querySelector("#proj_title").value;
      data["proj_description"] = this.shadowRoot.querySelector("#proj_description").value;
      data["proj_startDate"] = this.shadowRoot.querySelector("#proj_startDate").value;
      data["client_onboardingDate"] = this.shadowRoot.querySelector("#client_onboardingDate").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("client-onboarding-agreement-&-setup-create-onboarding-project", ClientOnboardingAgreement&SetupCreateOnboardingProject);
export default ClientOnboardingAgreement&SetupCreateOnboardingProject;
