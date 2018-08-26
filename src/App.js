import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SideBar />
      </React.Fragment>
    );
  }
}

export default App;
