
            class ProjectLaunchPlanningPlanTasks extends HTMLElement {
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
        <h2>Plan Tasks</h2>
        <form id="form">
          
            <label for="task_title">Title</label>
            <input type="text" id="task_title" name="task_title" value="${this._formData["task_title"] || ""}" />
          
            <label for="task_description">Description</label>
            <input type="text" id="task_description" name="task_description" value="${this._formData["task_description"] || ""}" />
          
            <label for="task_dueDate">Due Date</label>
            <input type="text" id="task_dueDate" name="task_dueDate" value="${this._formData["task_dueDate"] || ""}" />
          
            <label for="task_estimateHours">Estimate (hours)</label>
            <input type="text" id="task_estimateHours" name="task_estimateHours" value="${this._formData["task_estimateHours"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["task_title"] = this.shadowRoot.querySelector("#task_title").value;
      data["task_description"] = this.shadowRoot.querySelector("#task_description").value;
      data["task_dueDate"] = this.shadowRoot.querySelector("#task_dueDate").value;
      data["task_estimateHours"] = this.shadowRoot.querySelector("#task_estimateHours").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("project-launch-planning-plan-tasks", ProjectLaunchPlanningPlanTasks);
export default ProjectLaunchPlanningPlanTasks;
