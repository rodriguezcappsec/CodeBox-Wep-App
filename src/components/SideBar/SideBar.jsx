import React, { Component } from "react";

export default class SideBar extends Component {
  render() {
    return (
      <aside className="site-menubar">
        <div className="site-menubar-inner">
          <ul className="site-menu">
            {/* MAIN NAVIGATION SECTION */}
            <li className="menu-section-heading">MAIN NAVIGATION</li>
            <li>
              <a href="index.html">
                <i className="menu-icon zmdi zmdi-home zmdi-hc-lg" />
                <span className="menu-text">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="" className="submenu-toggle">
                <i className="menu-icon zmdi zmdi-pages zmdi-hc-lg" />
                <span className="menu-text">Pages</span>
                <i className="menu-caret zmdi zmdi-hc-sm zmdi-chevron-right" />
              </a>
              <ul className="submenu">
                <li>
                  <a href="timeline.html">
                    <span className="menu-text">Timeline</span>
                  </a>
                </li>
                <li>
                  <a href="profile.html">
                    <span className="menu-text">Profile</span>
                  </a>
                </li>
                <li>
                  <a href="login.html">
                    <span className="menu-text">Login</span>
                  </a>
                </li>
                <li>
                  <a href="faq.html">
                    <span className="menu-text">FAQ</span>
                  </a>
                </li>
                <li>
                  <a href="price.html">
                    <span className="menu-text">Price</span>
                  </a>
                </li>
                <li>
                  <a href="blank.html">
                    <span className="menu-text">Blank Page</span>
                  </a>
                </li>
                <li>
                  <a href="" className="submenu-toggle">
                    <span className="menu-text">Error</span>
                    <i className="menu-caret zmdi zmdi-hc-sm zmdi-chevron-right" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="404.html">
                        <span className="menu-text">404</span>
                      </a>
                    </li>
                    <li>
                      <a href="403.html">
                        <span className="menu-text">403</span>
                      </a>
                    </li>
                    <li>
                      <a href="500.html">
                        <span className="menu-text">500</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="" className="submenu-toggle">
                    <span className="menu-text">Invoice</span>
                    <i className="menu-caret zmdi zmdi-hc-sm zmdi-chevron-right" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="invoice.1.html">
                        <span className="menu-text">Invoice v1</span>
                      </a>
                    </li>
                    <li>
                      <a href="invoice.2.html">
                        <span className="menu-text">Invoice v2</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          {/* /.site-menu */}
        </div>
        {/* /.site-menubar-inner */}
      </aside>
    );
  }
}
