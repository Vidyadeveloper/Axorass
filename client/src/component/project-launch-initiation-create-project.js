
            class ProjectLaunchInitiationCreateProject extends HTMLElement {
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
        <h2>Create Project</h2>
        <form id="form">
          
            <label for="proj_title">Title</label>
            <input type="text" id="proj_title" name="proj_title" value="${this._formData["proj_title"] || ""}" />
          
            <label for="proj_description">Description</label>
            <input type="text" id="proj_description" name="proj_description" value="${this._formData["proj_description"] || ""}" />
          
            <label for="proj_startDate">Start Date</label>
            <input type="text" id="proj_startDate" name="proj_startDate" value="${this._formData["proj_startDate"] || ""}" />
          
            <label for="proj_endDate">End Date</label>
            <input type="text" id="proj_endDate" name="proj_endDate" value="${this._formData["proj_endDate"] || ""}" />
          
            <label for="proj_budget">Budget</label>
            <input type="text" id="proj_budget" name="proj_budget" value="${this._formData["proj_budget"] || ""}" />
          
            <label for="proj_ownerEmail">Owner Email</label>
            <input type="text" id="proj_ownerEmail" name="proj_ownerEmail" value="${this._formData["proj_ownerEmail"] || ""}" />
          
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
      data["proj_endDate"] = this.shadowRoot.querySelector("#proj_endDate").value;
      data["proj_budget"] = this.shadowRoot.querySelector("#proj_budget").value;
      data["proj_ownerEmail"] = this.shadowRoot.querySelector("#proj_ownerEmail").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("project-launch-initiation-create-project", ProjectLaunchInitiationCreateProject);
export default ProjectLaunchInitiationCreateProject;
