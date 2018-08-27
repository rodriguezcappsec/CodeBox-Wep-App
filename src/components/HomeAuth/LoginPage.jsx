import React, { Component } from "react";
import apiUrl from "../../endPoint.js";
import LoginForms from "./LoginForms.jsx";
import App from "../../App.js";
import Axios from "axios";
import "../../index.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: apiUrl,
      signedUser: {
        user: "",
        email: "",
        password: ""
      },
      islogged: false
    };
  }
  loginRequest = onSubmit => {
    onSubmit.preventDefault();
    Axios.post(`${this.state.api}/sign-in`, {
      credentials: {
        email: this.state.signedUser.email,
        password: this.state.signedUser.password
      }
    })
      .then(user => {
        const loggedUser = { ...this.state.signedUser };
        loggedUser.user = user.data;
        this.setState({ islogged: true });
        this.setState({ signedUser: loggedUser });
        console.log(this.state.signedUser.user);
      })
      .catch(exe => {
        console.log(exe);
      });
  };
  handleInput = ({ currentTarget: input }) => {
    let user = { ...this.state.signedUser };
    user[input.name] = input.value;
    this.setState({ signedUser: user });
    console.log(this.state.signedUser);
  };
  conditionalRender = () => {
    if (!this.state.islogged) {
      return (
        <div>
          <LoginForms
            loginRequest={this.loginRequest}
            handleInput={this.handleInput}
          />
        </div>
      );
    }
    return (
      <React.Fragment>
        <App user={this.state.signedUser.user} />
      </React.Fragment>
    );
  };

  render() {
    return this.conditionalRender();
  }
}
export default LoginPage;
