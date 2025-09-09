
            class ClientOnboardingIntakeCollectClientInfo extends HTMLElement {
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
        <h2>Collect Client Info</h2>
        <form id="form">
          
            <label for="client_name">Name</label>
            <input type="text" id="client_name" name="client_name" value="${this._formData["client_name"] || ""}" />
          
            <label for="client_contactEmail">Contact Email</label>
            <input type="text" id="client_contactEmail" name="client_contactEmail" value="${this._formData["client_contactEmail"] || ""}" />
          
            <label for="client_company">Company</label>
            <input type="text" id="client_company" name="client_company" value="${this._formData["client_company"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["client_name"] = this.shadowRoot.querySelector("#client_name").value;
      data["client_contactEmail"] = this.shadowRoot.querySelector("#client_contactEmail").value;
      data["client_company"] = this.shadowRoot.querySelector("#client_company").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("client-onboarding-intake-collect-client-info", ClientOnboardingIntakeCollectClientInfo);
export default ClientOnboardingIntakeCollectClientInfo;
