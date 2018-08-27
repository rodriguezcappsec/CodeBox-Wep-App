import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import Slide from "@material-ui/core/Slide";
import { Route, Switch, Redirect } from "react-router-dom";
import CodeSnippet from "./components/CodeSnippet/CodeSnippet";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.loggedUser.user };
  }
  render() {
    return (
      <React.Fragment>
        <div className="menubar-left menubar-dark dashboard dashboard-v1">
          <Slide in={true} mountOnEnter unmountOnExit direction="left">
            <NavBar user={this.state.user} />
          </Slide>
          <div className="site-wrapper">
            <Slide in={true} mountOnEnter unmountOnExit direction="right">
              <SideBar />
            </Slide>
            <main className="site-main">
              <div className="site-content">
                <Switch>
                  <Route exact path="/dashboard" component={CodeSnippet} />
                  <Redirect exact from="/" to="/dashboard" />
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
