import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import Slide from "@material-ui/core/Slide";
import { Route, Switch, Redirect } from "react-router-dom";
import CodeSnippet from "./components/CodeSnippet/CodeSnippet";
import "./index.css"
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
              {/* <Slide in={true} mountOnEnter unmountOnExit direction="up"> */}
                <div className="site-content">
                  <Switch>
                    <Route
                      exact
                      path="/dashboard"
                      render={props => (
                        <CodeSnippet {...props} user={this.state.user} />
                      )}
                    />
                    <Redirect exact from="/" to="/dashboard" />
                  </Switch>
                </div>
              {/* </Slide> */}
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
