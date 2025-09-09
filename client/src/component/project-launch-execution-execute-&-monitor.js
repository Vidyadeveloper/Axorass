
            class ProjectLaunchExecutionExecute&Monitor extends HTMLElement {
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
        <h2>Execute & Monitor</h2>
        <form id="form">
          
            <label for="task_status">Status</label>
            <input type="text" id="task_status" name="task_status" value="${this._formData["task_status"] || ""}" />
          
            <label for="task_assigneeEmail">Assignee Email</label>
            <input type="text" id="task_assigneeEmail" name="task_assigneeEmail" value="${this._formData["task_assigneeEmail"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["task_status"] = this.shadowRoot.querySelector("#task_status").value;
      data["task_assigneeEmail"] = this.shadowRoot.querySelector("#task_assigneeEmail").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("project-launch-execution-execute-&-monitor", ProjectLaunchExecutionExecute&Monitor);
export default ProjectLaunchExecutionExecute&Monitor;
