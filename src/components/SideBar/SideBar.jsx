import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class SideBar extends Component {
  render() {
    return (
      <React.Fragment>
        <aside className="site-menubar">
          <div className="site-menubar-inner">
            <ul className="site-menu">
              {/* MAIN NAVIGATION SECTION */}
              <li className="menu-section-heading">MAIN NAVIGATION</li>
              <li>
                <Link to="/dashboard">
                  <i className="menu-icon zmdi zmdi-home zmdi-hc-lg" />
                  <span className="menu-text">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/other">
                  <i className="menu-icon zmdi zmdi-pages zmdi-hc-lg" />
                  <span className="menu-text">Pages</span>
                  <i className="menu-caret zmdi zmdi-hc-sm zmdi-chevron-right" />
                </Link>
              </li>
            </ul>
            {/* /.site-menu */}
          </div>
          {/* /.site-menubar-inner */}
        </aside>
      </React.Fragment>
    );
  }
}
