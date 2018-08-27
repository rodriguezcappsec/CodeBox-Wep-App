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
        email: "",
        password: ""
      },
      currentUser: "",

      islogged: false,
      signUp: {
        userName: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
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
        let loggedUser = { ...this.state.signedUser };
        // loggedUser.currentUser = user.data;
        this.setState({ currentUser: user.data });
        this.setState({ islogged: true });
        this.setState({ signedUser: loggedUser });
      })
      .catch(exe => {
        console.log(exe);
      });
  };
  registerRequest = onSubmit => {
    onSubmit.preventDefault();
    Axios.post(`${this.state.api}/sign-up`, {
      credentials: {
        userName: this.state.signUp.userName,
        profilePicture: "",
        email: this.state.signUp.email,
        password: this.state.signUp.password,
        password_confirmation: this.state.signUp.password_confirmation
      }
    })
      .then(user => {
        console.log("registered");
      })
      .catch(exe => {
        console.log(exe);
      });
  };
  handleNewUser = ({ currentTarget: input }) => {
    let newUser = { ...this.state.signUp };
    newUser[input.name] = input.value;
    this.setState({ signUp: newUser });
    console.log(newUser);
  };
  handleInput = ({ currentTarget: input }) => {
    let user = { ...this.state.signedUser };
    user[input.name] = input.value;
    this.setState({ signedUser: user });
  };
  conditionalRender = () => {
    if (!this.state.islogged) {
      return (
        <LoginForms
          loginRequest={this.loginRequest}
          handleInput={this.handleInput}
          handleNewUser={this.handleNewUser}
          registerRequest={this.registerRequest}
        />
      );
    } else {
      return <App loggedUser={this.state.currentUser} />;
    }
  };

  render() {
    return this.conditionalRender();
  }
}
export default LoginPage;
