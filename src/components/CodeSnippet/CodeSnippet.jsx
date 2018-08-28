import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import Axios from "axios";
import apiUrl from "../../endPoint.js";
require("codemirror/mode/xml/xml.js");
require("codemirror/mode/javascript/javascript.js");
require("codemirror/mode/ruby/ruby.js");
require("codemirror/mode/sass/sass.js");
require("codemirror/mode/shell/shell.js");
require("codemirror/mode/python/python.js");
require("codemirror/mode/sql/sql.js");
require("codemirror/mode/sas/sas.js");
require("codemirror/mode/ruby/ruby.js");
require("codemirror/theme/material.css");
require("codemirror/theme/midnight.css");
require("codemirror/theme/monokai.css");
require("codemirror/theme/xq-light.css");
require("codemirror/theme/cobalt.css");
require("codemirror/theme/dracula.css");

export default class CodeSnippet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      code: "",
      snippetname: "",
      options: {
        mode: "",
        theme: "",
        lineNumbers: true
      },
      list: {
        codeList: [],
        selectedSnippet: ""
      }
    };
  }
  snippetName = ({ currentTarget: input }) => {
    this.setState({ snippetname: input.value });
  };
  createSnippet = onsubmit => {
    onsubmit.preventDefault();
    let copy = { ...this.state.code };
    copy = this.state.code.replace(/"/g, "'");
    // copy = copy.replace(/\n/g, " ");
    Axios.post(
      `${apiUrl}/codes`,
      {
        code: {
          title: this.state.snippetname,
          snippet: `${copy}`,
          theme: this.state.options.theme,
          language: this.state.options.mode
        }
      },
      {
        headers: {
          Authorization: "Bearer " + this.state.user.token
        }
      }
    )
      .then(code => {
        this.renderCodeList();
      })
      .catch(exe => {
        console.log(exe);
      });
  };
  renderCodeList = () => {
    Axios.get(`${apiUrl}/codes`, {
      headers: {
        Authorization: "Bearer " + this.state.user.token
      }
    }).then(codes => {
      let code = codes.data.codes.filter(
        code => code.userID === this.state.user._id
      );
      console.log(code);
      let listCopy = { ...this.state.list };
      listCopy.codeList = code;
      this.setState({ list: listCopy });
    });
  };
  componentDidMount() {
    this.renderCodeList();
  }
  pickTheme = ({ target: input }) => {
    const options = { ...this.state.options };
    options.theme = input.value;
    console.log(options.theme);
    this.setState({ options });
  };
  pickCode = ({ target: input }) => {
    const options = { ...this.state.options };
    options.mode = input.value;
    console.log(options.mode);
    this.setState({ options });
  };

  render() {
    return (
      <React.Fragment>
        <div className="app-wrapper">
          <div className="app-panel" id="app-panel">
            {/* <div className="app-search">
              <input
                className="search-field"
                placeholder="Search"
                type="search"
              />
              <i className="search-icon fa fa-search" />
            </div> */}
            {/* /.app-search */}
            <div className="app-panel-inner">
              <div className="scroll-container">
                <div className="p-3">
                  <button
                    className="btn btn-success py-3 btn-block btn-lg"
                    data-toggle="modal"
                    data-target="#projects-task-modal"
                  >
                    NEW CODE SNIPPET
                  </button>
                </div>
                <hr className="m-0" />
                <div className="projects-list">
                  {this.state.list.codeList.map((code, key) => {
                    return (
                      <div className="media" key={key} id={code._id}>
                        {/* <div
                          className="avatar avatar-circle avatar-md project-icon"
                          data-plugin="firstLitter"
                          data-target="#project-1"
                        /> */}
                        <div className="media-body">
                          <h6 className="project-name" id="project-1">
                            {code.title}
                          </h6>
                        </div>
                        <div className="row">
                          <div className="col">
                            <input
                              name="submit"
                              defaultValue="edit"
                              id={code._id}
                              className="btn btn-warning btn-small"
                              type="submit"
                            />
                          </div>
                          <div className="col">
                            <input
                              name="submit"
                              defaultValue="edit"
                              id={code._id}
                              className="btn btn-danger btn-small"
                              type="submit"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {/* <div className="media selected">
                    <div
                      className="avatar avatar-circle avatar-md project-icon"
                      data-plugin="firstLitter"
                      data-target="#project-1"
                    />
                    <div className="media-body">
                      <h6 className="project-name" id="project-1">
                        Android App Project
                      </h6>
                    </div>
                  </div> */}

                  {/* /.media */}
                </div>
                {/* /.projects-list */}
              </div>
              {/* /.scroll-container */}
            </div>
            {/* /.app-panel-inner  */}
            {/* panel-toggle button */}
            <a
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
              <h5 className="app-main-heading text-center">Code Snippets</h5>
            </div>
            {/* /.app-main-header */}
            <div className="app-main-content">
              <div className="project-tasks">
                {/* <div className="project-task">
                  <div className="checkbox checkbox-circle checkbox-lg">
                    <input id="pj-task-1" type="checkbox" />
                    <label htmlFor="pj-task-1">
                      Project initiation and proposal preparing
                    </label>
                  </div>
                </div> */}
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
          // aria-divledby="myModaldiv"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <p color="secondary">20 character max for the title</p>

                <div className="task-pickers" />
              </div>
              {/* /.modal-header */}

              <form onSubmit={this.createSnippet} name="createNippetForm">
                <div className="modal-body">
                  <div className="task-name-wrap">
                    <span>
                      <i className="zmdi zmdi-check" />
                    </span>
                    <input
                      className="task-name-field"
                      placeholder="Snippet Name"
                      name="snippetname"
                      type="text"
                      maxLength="20"
                      onChange={this.snippetName}
                    />
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <select
                          name="theme"
                          className="form-control"
                          onChange={this.pickTheme}
                        >
                          <option defaultValue>Theme</option>
                          {[
                            "xq-light",
                            "monokai",
                            "material",
                            "dracula",
                            "cobalt",
                            "midnight"
                          ].map((value, key) => (
                            <option value={value} key={key}>
                              {value}
                            </option>
                          ))}
                          {/* <option value="egypt"> xq-dark</option>
                          <option value="usa">USA</option>
                          <option value="germany">Germany</option>
                          <option value="japan">Japan</option> */}
                        </select>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <select
                          name="mode"
                          className="form-control"
                          onChange={this.pickCode}
                        >
                          <option defaultValue>Languages</option>
                          {[
                            "javascript",
                            "ruby",
                            "saas",
                            "sas",
                            "shell",
                            "sql",
                            "xml",
                            "python"
                          ].map((language, key) => (
                            <option value={language} key={key}>
                              {language}
                            </option>
                          ))}
                          {/* <option value="egypt">Egypt</option>
                          <option value="usa">USA</option>
                          <option value="germany">Germany</option>
                          <option value="japan">Japan</option> */}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="task-desc-wrap">
                    <CodeMirror
                      value={this.state.code}
                      options={this.state.options}
                      onBeforeChange={(editor, data, code) => {
                        this.setState({ code });
                      }}

                      // onChange={this.updateCode}
                    >
                      {/* <textarea
                      className="task-desc-field"
                      name
                      id
                      placeholder="Description"
                      defaultValue={""}
                    /> */}
                    </CodeMirror>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      name="submit"
                      defaultValue="Create Snippet"
                      id="submit"
                      className="btn btn-primary btn-block btn-flat"
                      type="submit"
                    />
                  </div>
                </div>
              </form>
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
  updateCode = updateCode => {
    this.setState({ code: updateCode });
  };
}
