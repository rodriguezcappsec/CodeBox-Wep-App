import React, { Component } from "react";

export default class NavBar extends Component {
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="nav-icon fa fa-bell-o" />
                  <span className="badge badge-circle badge-danger">4</span>
                </a>
                <div
                  className="media-list dropdown-menu p-0"
                  data-plugin="dropdownCaret"
                >
                  <div className="dropdown-item dropdown-menu-cap d-flex">
                    <span className="mr-auto my-1">
                      You Have 4 Unread Notifications
                    </span>
                    <a className="btn btn-sm btn-light my-1">See all</a>
                  </div>
                  <div className="scroll-container">
                    <a className="media dropdown-item">
                      <span
                        className="avatar bg-success"
                        data-plugin="firstLitter"
                        data-target="#message-1"
                      />
                      <div className="media-body">
                        <h6 className="media-heading" id="message-1">
                          Mohamed Ali
                        </h6>
                        <small>
                          Lorem ipsum dolor sit amet, Lorem ipsum dolor.
                        </small>
                      </div>
                    </a>
                    <a className="media dropdown-item">
                      <span
                        className="avatar bg-warning"
                        data-plugin="firstLitter"
                        data-target="#message-2"
                      />
                      <div className="media-body">
                        <h6 className="media-heading" id="message-2">
                          Sophia Smith
                        </h6>
                        <small>
                          Lorem ipsum dolor sit amet, Lorem ipsum dolor.
                        </small>
                      </div>
                    </a>
                    <a className="media dropdown-item">
                      <span
                        className="avatar bg-primary"
                        data-plugin="firstLitter"
                        data-target="#message-3"
                      />
                      <div className="media-body">
                        <h6 className="media-heading" id="message-3">
                          Sarah Adams
                        </h6>
                        <small>
                          Lorem ipsum dolor sit amet, Lorem ipsum dolor.
                        </small>
                      </div>
                    </a>
                    <a className="media dropdown-item">
                      <span
                        className="avatar bg-danger"
                        data-plugin="firstLitter"
                        data-target="#message-4"
                      />
                      <div className="media-body">
                        <h6 className="media-heading" id="message-4">
                          John Doe
                        </h6>
                        <small>
                          Lorem ipsum dolor sit amet, Lorem ipsum dolor.
                        </small>
                      </div>
                    </a>
                  </div>
                  {/* /.scroll-container */}
                </div>
                {/* /.media-list */}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="nav-icon fa fa-envelope-o" />
                  <span className="badge badge-circle badge-success">3</span>
                </a>
                <div
                  className="media-list dropdown-menu p-0"
                  data-plugin="dropdownCaret"
                >
                  <div className="dropdown-item dropdown-menu-cap d-flex">
                    <span className="mr-auto my-1">
                      You Have 3 Unread Messages
                    </span>
                    <a className="btn btn-sm btn-light my-1">See all</a>
                  </div>
                  <div className="scroll-container">
                    <a className="media dropdown-item">
                      <div className="avatar">
                        <img src="../assets/global/images/203.jpg" alt="true" />
                        <span className="badge badge-success">5</span>
                      </div>
                      <div className="media-body">
                        <h6 className="media-heading">Ahmed Gamal</h6>
                        <small>
                          Lorem ipsum dolor sit amet, Lorem ipsum dolor.
                        </small>
                      </div>
                    </a>
                    <a className="media dropdown-item">
                      <div className="avatar">
                        <img src="../assets/global/images/101.jpg" alt="true" />
                        <span className="badge badge-success">9</span>
                      </div>
                      <div className="media-body">
                        <h6 className="media-heading">Nick Pettit</h6>
                        <small>
                          Lorem ipsum dolor sit amet, Lorem ipsum dolor.
                        </small>
                      </div>
                    </a>
                    <a className="media dropdown-item">
                      <div className="avatar">
                        <img src="../assets/global/images/202.jpg" alt="true" />
                        <span className="badge badge-success">1</span>
                      </div>
                      <div className="media-body">
                        <h6 className="media-heading">Media heading</h6>
                        <small>
                          Lorem ipsum dolor sit amet, Lorem ipsum dolor.
                        </small>
                      </div>
                    </a>
                  </div>
                  {/* /.scroll-container */}
                </div>
                {/* /.media-list */}
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
                  <span className="nav-text hidden-sm-down ml-2">Daniel</span>
                  <i className="nav-caret hidden-sm-down zmdi zmdi-hc-sm zmdi-chevron-down" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right p-0"
                  data-plugin="dropdownCaret"
                >
                  <a className="dropdown-item dropdown-menu-cap">
                    Daniel Alexander
                  </a>
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
