import React, { Component } from "react";
import apiUrl from "../../endPoint.js";
import LoginForms from "./LoginForms.jsx";
import App from "../../App.js";
import Axios from "axios";
import "../../index.css";
import swal from "sweetalert";

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
        this.setState({ currentUser: user.data });
        this.setState({ islogged: true });
        this.setState({ signedUser: loggedUser });
        swal(`Welcome! ${user.data.user.userName}`, "", "success");
      })
      .catch(exe => {
        swal("Oh oh!!", "Email or Password are wrong!", "error");
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
        swal(`Good Job!`, "You can now login with your new user!!", "success");
      })
      .catch(exe => {
        swal("Oh oh!!", "Some invalid field!", "error");
      });
  };
  handleNewUser = ({ currentTarget: input }) => {
    let newUser = { ...this.state.signUp };
    newUser[input.name] = input.value;
    this.setState({ signUp: newUser });
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
