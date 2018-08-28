import React, { Component } from "react";

class NavBar extends Component {
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
              <li className="nav-item">
                <div id="navbar-search" className="navbar-search">
                  <form className="form-inline navbar-search-form">
                    <input
                      className="form-control navbar-search-field"
                      type="text"
                      placeholder="Search"
                    />
                    <button type="submit" className="navbar-search-submit">
                      <svg className="svg-search-icon">
                        <use xlinkHref="../assets/global/svg-sprite/sprite.svg#search" />
                      </svg>
                    </button>
                    <button
                      className="navbar-search-close"
                      data-toggle="navbar-search"
                    >
                      <i className="zmdi zmdi-close" />
                    </button>
                  </form>
                  <div
                    className="navbar-search-backdrop"
                    data-toggle="navbar-search"
                  />
                </div>
                {/* /.navbar-search */}
              </li>
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
                    {this.props.user.userName}
                  </span>
                  <i className="nav-caret hidden-sm-down zmdi zmdi-hc-sm zmdi-chevron-down" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right p-0"
                  data-plugin="dropdownCaret"
                >
                  <a className="dropdown-item">
                    <i className="fa fa-user-o mr-3" />
                    <span>My Profile</span>
                  </a>
                  <a className="dropdown-item">
                    <i className="fa fa-list-ul mr-3" />
                    <span>My Tasks</span>
                  </a>
                  <a className="dropdown-item">
                    <i className="fa fa-envelope-o mr-3" />
                    <span>My Inbox</span>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item">
                    <i className="fa fa-file-o mr-3" />
                    <span>Lock Screen</span>
                  </a>
                  <a className="dropdown-item">
                    <i className="fa fa-power-off mr-3" />
                    <span>Logout</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default NavBar;
