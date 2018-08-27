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
{/* <div className="sweet-alert showSweetAlert visible" data-custom-class data-has-cancel-button="false" data-has-confirm-button="true" data-allow-outside-click="false" data-has-done-function="false" data-animation="pop" data-timer="null" style={{ display: 'block', marginTop: '-116px' }}><div className="sa-icon sa-error" style={{ display: 'none' }}>
    <span className="sa-x-mark">
        <span className="sa-line sa-left" />
        <span className="sa-line sa-right" />
    </span>
</div><div className="sa-icon sa-warning" style={{ display: 'none' }}>
        <span className="sa-body" />
        <span className="sa-dot" />
    </div><div className="sa-icon sa-info" style={{ display: 'none' }} /><div className="sa-icon sa-success" style={{ display: 'none' }}>
        <span className="sa-line sa-tip" />
        <span className="sa-line sa-long" />
        <div className="sa-placeholder" />
        <div className="sa-fix" />
    </div><div className="sa-icon sa-custom" style={{ display: 'none' }} /><h2>Here's a message!</h2>
    <p style={{ display: 'block' }}>It's pretty, isn't it?</p>
    <fieldset>
        <input tabIndex={3} placeholder type="text" />
        <div className="sa-input-error" />
    </fieldset><div className="sa-error-container">
        <div className="icon">!</div>
        <p>Not valid!</p>
    </div><div className="sa-button-container">
        <button className="cancel" tabIndex={2} style={{ display: 'none', boxShadow: 'none' }}>Cancel</button>
        <div className="sa-confirm-button-container">
            <button className="confirm" tabIndex={1} style={{ display: 'inline-block', backgroundColor: 'rgb(140, 212, 245)', boxShadow: 'rgba(140, 212, 245, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset' }}>OK</button><div className="la-ball-fall">
                <div />
                <div />
                <div />
            </div>
        </div>
    </div></div> */}
