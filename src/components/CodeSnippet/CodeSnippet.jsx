import React, { Component } from "react";

export default class CodeSnippet extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="app-wrapper">
          <div className="app-panel" id="app-panel">
            <div className="app-search">
              <input
                className="search-field"
                placeholder="Search"
                type="search"
              />
              <i className="search-icon fa fa-search" />
            </div>
            {/* /.app-search */}
            <div className="app-panel-inner">
              <div className="scroll-container">
                <div className="p-3">
                  <button
                    className="btn btn-success py-3 btn-block btn-lg"
                    data-toggle="modal"
                    data-target="#projects-task-modal"
                  >
                    ADD NEW TASK
                  </button>
                </div>
                <hr className="m-0" />
                <div className="projects-list">
                  <div className="media">
                    <div
                      className="avatar avatar-circle avatar-md project-icon"
                      data-plugin="firstLitter"
                      data-target="#project-1"
                    />
                    <div className="media-body">
                      <h6 className="project-name" id="project-1">
                        Android App Project
                      </h6>
                      <small className="project-detail">
                        Task: programming modules
                      </small>
                    </div>
                  </div>
                  {/* /.media */}
                  <div className="media selected">
                    <div
                      className="avatar avatar-circle avatar-md project-icon"
                      data-plugin="firstLitter"
                      data-target="#project-2"
                    />
                    <div className="media-body">
                      <h6 className="project-name" id="project-2">
                        Luxury Project
                      </h6>
                      <small className="project-detail">Task: UI design</small>
                    </div>
                  </div>
                  {/* /.media */}
                  <div className="media">
                    <div
                      className="avatar avatar-circle avatar-md project-icon"
                      data-plugin="firstLitter"
                      data-target="#project-3"
                    />
                    <div className="media-body">
                      <h6 className="project-name" id="project-3">
                        Windows Phone App
                      </h6>
                      <small className="project-detail">Task: deployment</small>
                    </div>
                  </div>
                  {/* /.media */}
                  <div className="media">
                    <div
                      className="avatar avatar-circle avatar-md project-icon"
                      data-plugin="firstLitter"
                      data-target="#project-4"
                    />
                    <div className="media-body">
                      <h6 className="project-name" id="project-4">
                        IOS Mobile App
                      </h6>
                      <small className="project-detail">finished project</small>
                    </div>
                  </div>
                  {/* /.media */}
                  <div className="media">
                    <div
                      className="avatar avatar-circle avatar-md project-icon"
                      data-plugin="firstLitter"
                      data-target="#project-5"
                    />
                    <div className="media-body">
                      <h6 className="project-name" id="project-5">
                        Digital Recording Project
                      </h6>
                      <small className="project-detail">
                        in analysis phase
                      </small>
                    </div>
                  </div>
                  {/* /.media */}
                </div>
                {/* /.projects-list */}
              </div>
              {/* /.scroll-container */}
            </div>
            {/* /.app-panel-inner  */}
            {/* panel-toggle button */}
            <a
              href="#"
              className="app-panel-toggle"
              data-toggle="class"
              data-target="#app-panel"
              data-class="show"
            >
              <i className="fa fa-chevron-right" />
              <i className="fa fa-chevron-left" />
            </a>
          </div>
          {/* /.app-panel */}
          <div className="app-main">
            <div className="app-main-header">
              <h5 className="app-main-heading text-center">
                Code Snippets
              </h5>
            </div>
            {/* /.app-main-header */}
            <div className="app-main-content">
              <div className="project-tasks">
                <div className="project-task">
                  <div className="checkbox checkbox-circle checkbox-lg">
                    <input id="pj-task-1" type="checkbox" />
                    <label htmlFor="pj-task-1">
                      Project initiation and proposal preparing
                    </label>
                  </div>
                </div>
              </div>
              {/* /.project-tasks */}
            </div>
            {/* /.app-main-content */}
          </div>
          {/* /.app-main */}
        </div>
        <div
          className="modal fade"
          id="projects-task-modal"
          tabIndex={-1}
          role="dialog"
          aria-divledby="myModaldiv"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-div="Close"
                >
                  <span aria-hidden="true">
                    <i className="zmdi zmdi-close" />
                  </span>
                </button>
                <div className="task-pickers">
                  <div className="task-field-picker task_username_picker">
                    <div htmlFor="task_username">
                      <i className="zmdi zmdi-plus" />
                    </div>
                    <input
                      id="task_username"
                      name="task_username"
                      defaultValue
                      placeholder="Username"
                      type="text"
                    />
                  </div>
                  <div className="task-field-picker task_date_picker">
                    <div htmlFor="task_due_date">
                      <i className="zmdi zmdi-calendar" />
                    </div>
                    <input
                      id="task_due_date"
                      name="task_due_date"
                      defaultValue
                      placeholder="Due Date"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              {/* /.modal-header */}
              <div className="modal-body">
                <div className="task-name-wrap">
                  <span>
                    <i className="zmdi zmdi-check" />
                  </span>
                  <input
                    className="task-name-field"
                    placeholder="Task Name"
                    type="text"
                  />
                </div>
                <hr />
                <div className="task-desc-wrap">
                  <textarea
                    className="task-desc-field"
                    name
                    id
                    placeholder="Description"
                    defaultValue={""}
                  />
                </div>
              </div>
              {/* /.modal-body */}
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
      </React.Fragment>
    );
  }
}
