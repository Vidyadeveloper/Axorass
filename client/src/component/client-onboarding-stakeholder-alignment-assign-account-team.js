
            class ClientOnboardingStakeholderAlignmentAssignAccountTeam extends HTMLElement {
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
        <h2>Assign Account Team</h2>
        <form id="form">
          
            <label for="stk_name">Name</label>
            <input type="text" id="stk_name" name="stk_name" value="${this._formData["stk_name"] || ""}" />
          
            <label for="stk_role">Role</label>
            <input type="text" id="stk_role" name="stk_role" value="${this._formData["stk_role"] || ""}" />
          
            <label for="stk_email">Email</label>
            <input type="text" id="stk_email" name="stk_email" value="${this._formData["stk_email"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["stk_name"] = this.shadowRoot.querySelector("#stk_name").value;
      data["stk_role"] = this.shadowRoot.querySelector("#stk_role").value;
      data["stk_email"] = this.shadowRoot.querySelector("#stk_email").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("client-onboarding-stakeholder-alignment-assign-account-team", ClientOnboardingStakeholderAlignmentAssignAccountTeam);
export default ClientOnboardingStakeholderAlignmentAssignAccountTeam;
