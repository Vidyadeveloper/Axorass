
            class ProjectLaunchTeamSetupAssignStakeholders extends HTMLElement {
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
        <h2>Assign Stakeholders</h2>
        <form id="form">
          
            <label for="stk_name">Name</label>
            <input type="text" id="stk_name" name="stk_name" value="${this._formData["stk_name"] || ""}" />
          
            <label for="stk_role">Role</label>
            <input type="text" id="stk_role" name="stk_role" value="${this._formData["stk_role"] || ""}" />
          
            <label for="stk_email">Email</label>
            <input type="text" id="stk_email" name="stk_email" value="${this._formData["stk_email"] || ""}" />
          
            <label for="stk_org">Organization</label>
            <input type="text" id="stk_org" name="stk_org" value="${this._formData["stk_org"] || ""}" />
          
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
      data["stk_org"] = this.shadowRoot.querySelector("#stk_org").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("project-launch-team-setup-assign-stakeholders", ProjectLaunchTeamSetupAssignStakeholders);
export default ProjectLaunchTeamSetupAssignStakeholders;
