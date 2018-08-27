import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import Slide from "@material-ui/core/Slide";
import { Route, Switch, Router } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="menubar-left menubar-dark dashboard dashboard-v1">
          <Slide in={true} mountOnEnter unmountOnExit direction="left">
            <NavBar />
          </Slide>
          <div className="site-wrapper">
              <Slide in={true} mountOnEnter unmountOnExit direction="right">
                <SideBar />
              </Slide>
            <main className="site-main">
              <div className="site-content">
                <Switch>
                  <Route exact path="/dashboard"   />
                </Switch>
              </div>
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
