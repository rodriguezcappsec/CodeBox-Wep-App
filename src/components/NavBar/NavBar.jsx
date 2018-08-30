import React, { Component } from "react";
import swal from "sweetalert";
import Axios from "axios";
import apiUrl from "../../endPoint";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      newPassword: {
        old: "",
        new: ""
      },
      user: this.props.user
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  handleNewPassword = ({ currentTarget: input }) => {
    let newPass = { ...this.state.newPassword };
    newPass[input.name] = input.value;
    this.setState({ newPassword: newPass });
    console.log(newPass);
  };
  closeModal() {
    document.getElementById("closeModal").click();
  }
  changePasswordRequest = onsubmit => {
    onsubmit.preventDefault();
    Axios.patch(
      `${apiUrl}/change-password`,
      {
        passwords: {
          old: this.state.newPassword.old,
          new: this.state.newPassword.new
        }
      },
      { headers: { Authorization: "Bearer " + this.state.user.token } }
    )
      .then(() => {
        swal(`Success!!`, "Password was changed succesfully", "success");
        this.closeModal();
      })
      .catch(() => {
        swal(
          `Ay no no!!`,
          "There was an error try to change password",
          "error"
        );
      });
  };
  logOutRequest = onsubmit => {
    onsubmit.preventDefault();
    Axios.delete(`${apiUrl}/sign-out`, {
      headers: { Authorization: "Bearer " + this.state.user.token }
    })
      .then(() => {
        window.location.pathname = "";
      })
      .catch(() => {});
  };
  chagePasswordModal = () => {
    return (
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Change Password
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={this.changePasswordRequest}>
              <div className="modal-body">
                <div className="form-group row">
                  <label
                    className="col-sm-4 col-form-label text-sm-right"
                    htmlFor="firstname"
                  >
                    <i className="fa fa-eye-slash" aria-hidden="true" />
                  </label>
                  <div className="col-md-5 col-sm-8">
                    <input
                      className="form-control"
                      id="old-password"
                      name="old"
                      placeholder="Old Password"
                      type="password"
                      onChange={this.handleNewPassword}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-4 col-form-label text-sm-right"
                    htmlFor="firstname"
                  >
                    <i className="fa fa-eye-slash" aria-hidden="true" />
                  </label>
                  <div className="col-md-5 col-sm-8">
                    <input
                      className="form-control"
                      id="new-password"
                      name="new"
                      placeholder="New Password"
                      type="password"
                      onChange={this.handleNewPassword}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  id="closeModal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        <nav className="site-navbar navbar fixed-top navbar-expand-md navbar-light bg-blue">
          <div className="navbar-header">
            <a className="navbar-brand" href="">
              <span className="brand-name hidden-fold">CodeBox</span>
            </a>

            <button
              data-toggle="menubar"
              className="mr-auto hidden-md-up hamburger hamburger--collapse js-hamburger"
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>

            <button
              type="button"
              className="navbar-toggler hidden-md-up collapsed"
              data-toggle="navbar-search"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="zmdi zmdi-hc-lg zmdi-search" />
            </button>

            <button
              type="button"
              className="navbar-toggler hidden-md-up collapsed"
              data-toggle="collapse"
              data-target="#site-navbar-collapse"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="zmdi zmdi-hc-lg zmdi-more" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="site-navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item hidden-sm-down px-3 d-flex align-items-center">
                <button
                  data-toggle="menubar-fold"
                  className="hamburger hamburger--arrowalt is-active js-hamburger"
                  type="button"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li
                id="navbar-search-toggler"
                className="nav-item hidden-xl-up hidden-sm-down"
              >
                <a className="nav-link" data-toggle="navbar-search">
                  <span className="zmdi zmdi-hc-lg zmdi-search" />
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link site-user dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    className="nav-img"
                    src="../assets/global/images/user-img.png"
                    alt="true"
                  />
                  <span className="nav-text hidden-sm-down ml-2">
                    {this.state.user.userName}
                  </span>
                  <i className="nav-caret hidden-sm-down zmdi zmdi-hc-sm zmdi-chevron-down" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right p-0"
                  data-plugin="dropdownCaret"
                >
                  <a
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    <i className="fa fa-user-secret mr-3" aria-hidden="true" />
                    <span>Change Password</span>
                  </a>
                  <a
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                    onClick={this.logOutRequest}
                  >
                    <i className="fa fa-power-off mr-3" aria-hidden="true" />
                    <span>Logout</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        {this.chagePasswordModal()}
      </React.Fragment>
    );
  }
}
export default NavBar;
