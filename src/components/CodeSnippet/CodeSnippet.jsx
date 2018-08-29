import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import Axios from "axios";
import apiUrl from "../../endPoint.js";
import swal from "sweetalert";
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
      options: { mode: "", theme: "", lineNumbers: true },
      list: { codeList: [], selectedSnippet: "" },
      editID: "",
      showCode: { code: "", language: "", theme: "", showEditor: false }
    };
  }
  validateCreateForm = () => {
    const { code, snippetname } = this.state;
    if (code === "" || snippetname === "") {
      swal("Oh oh!!", "Code snippet or snippet name cannot be empty", "error");
      return;
    }
    swal(
      "Good Job!!",
      "Snippet Created!, you can continue adding more.. ",
      "success"
    );
  };
  validateEditForm = () => {
    const { code, snippetname } = this.state;
    if (code === "" || snippetname === "") {
      swal(
        "Oh oh!!",
        "Code snippet or new snippet name cannot be empty",
        "error"
      );
      return;
    }
    swal(
      "Good Job Editing!!",
      "Snippet Edited!, you can continue editing it more.. ",
      "success"
    );
  };
  getID = ({ target }) => {
    this.setState({ editID: target.id });
  };
  createSnippet = onsubmit => {
    onsubmit.preventDefault();
    this.validateCreateForm();
    let copy = {
      ...this.state.code
    };
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
        this.setState({ snippetName: "" });
        this.setState({ code: "" });
        document.getElementsByClassName("task-name-field").value = "";
      })
      .catch(exe => {
        console.log(exe);
      });
  };
  editSnippet = onsubmit => {
    onsubmit.preventDefault();
    this.validateEditForm();
    const { code, snippetname } = this.state;
    if (code === "" || snippetname === "") {
      swal("Oh oh!!", "Code snippet or snippet name cannot be empty", "error");
      return;
    } else {
      let copy = {
        ...this.state.code
      };
      copy = this.state.code.replace(/"/g, "'");
      Axios.patch(
        `${apiUrl}/codes/${this.state.editID}`,
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
        .then(codes => {
          this.renderCodeList();
          this.setState({ snippetName: "" });
          this.setState({ code: "" });
          document.getElementsByClassName("task-name-field").value = "";
        })
        .catch(err => {
          console.log("error trying to edit");
        });
    }
  };
  renderCodeList = () => {
    Axios.get(`${apiUrl}/codes`, {
      headers: {
        Authorization: "Bearer " + this.state.user.token
      }
    })
      .then(codes => {
        let code = codes.data.codes.filter(
          code => code.userID === this.state.user._id
        );
        console.log(code);
        let listCopy = {
          ...this.state.list
        };
        listCopy.codeList = code;
        this.setState({ list: listCopy });
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.renderCodeList();
  }
  pickTheme = ({ target: input }) => {
    const options = {
      ...this.state.options
    };
    options.theme = input.value;
    this.setState({ options });
  };
  pickCode = ({ target: input }) => {
    const options = {
      ...this.state.options
    };
    options.mode = input.value;
    this.setState({ options });
  };
  snippetName = ({ currentTarget: input }) => {
    this.setState({ snippetname: input.value });
  };
  deleteSnippet = ({ currentTarget: input }) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this snippet!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        Axios.delete(`${apiUrl}/codes/${input.id}`, {
          headers: {
            Authorization: "Bearer " + this.state.user.token
          }
        })
          .then(codes => {
            this.renderCodeList();
          })
          .catch(err => {
            console.log("error trying to delete");
          });
        swal("Poof! Your snippet has been deleted!", {
          icon: "success"
        });
      } else {
        swal("Your snippet file is safe!");
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="app-wrapper">
          <div className="app-panel" id="app-panel">
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
                      <div className="row" key={key}>
                        <div className="media col">
                          <div className="media-body">
                            <h6
                              className="project-name"
                              id={code._id}
                              onClick={this.showSnippet}
                            >
                              {code.title}
                            </h6>
                          </div>
                          <div className="col-md-2">
                            <input
                              name="editSnippet"
                              defaultValue="edit"
                              id={code._id}
                              className="btn btn-warning btn-small"
                              onClick={this.getID}
                              type="button"
                              data-toggle="modal"
                              data-target="#projects-edittask-modal"
                            />
                          </div>
                          <div className="col">
                            <input
                              name="deleteSnippet"
                              defaultValue="delete"
                              id={code._id}
                              className="btn btn-danger btn-small"
                              type="button"
                              onClick={this.deleteSnippet}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
                <div className="project-task">
                  {this.state.showCode.showEditor && (
                    <CodeMirror
                      value={this.state.showCode.code}
                      options={{
                        mode: this.state.showCode.language,
                        theme: this.state.showCode.theme,
                        lineNumbers: true
                      }}
                    />
                  )}
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
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <p color="secondary">
                  20 character max for the snippet name. <br /> Code Formatting
                  still in development, please try to format it yourself.
                </p>
                <div className="task-pickers" />
              </div>
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
                    />
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
        {this.editSnippetModal()}

        {/* /.modal */}
      </React.Fragment>
    );
  }
  showSnippet = ({ target }) => {
    Axios.get(`${apiUrl}/codes/${target.id}`, {
      headers: {
        Authorization: "Bearer " + this.state.user.token
      }
    })
      .then(codes => {
        let code = { ...this.state.showCode };
        code.code = codes.data.code.snippet;
        code.language = codes.data.code.language;
        code.theme = codes.data.code.theme;
        code.showEditor = true;
        this.setState({ showCode: code });
      })
      .catch(err => {
        console.log("error trying to edit");
      });
  };
  editSnippetModal = () => {
    return (
      <div
        className="modal fade"
        id="projects-edittask-modal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <p color="secondary">
                20 character max for the snippet name. <br /> Code Formatting
                still in development, please try to format it yourself.
              </p>
              <div className="task-pickers" />
            </div>
            <form onSubmit={this.editSnippet} name="createNippetForm">
              <div className="modal-body">
                <div className="task-name-wrap">
                  <span>
                    <i className="zmdi zmdi-check" />
                  </span>
                  <input
                    className="task-name-field"
                    placeholder="New Snippet Name"
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
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    name="submit"
                    defaultValue="Create Snippet"
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
    );
  };
}
