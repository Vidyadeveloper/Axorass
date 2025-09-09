
            class ProjectLaunchReview&CloseReview&Close extends HTMLElement {
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
        <h2>Review & Close</h2>
        <form id="form">
          
            <label for="proj_id">Project ID</label>
            <input type="text" id="proj_id" name="proj_id" value="${this._formData["proj_id"] || ""}" />
          
            <label for="proj_endDate">End Date</label>
            <input type="text" id="proj_endDate" name="proj_endDate" value="${this._formData["proj_endDate"] || ""}" />
          
            <label for="proj_description">Description</label>
            <input type="text" id="proj_description" name="proj_description" value="${this._formData["proj_description"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["proj_id"] = this.shadowRoot.querySelector("#proj_id").value;
      data["proj_endDate"] = this.shadowRoot.querySelector("#proj_endDate").value;
      data["proj_description"] = this.shadowRoot.querySelector("#proj_description").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("project-launch-review-&-close-review-&-close", ProjectLaunchReview&CloseReview&Close);
export default ProjectLaunchReview&CloseReview&Close;
