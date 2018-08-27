import React from "react";

const LoginForms = props => {
  return (
    <div className="login-box">
      <div className="login-logo">
        <img
          // src="../../../public/favicon.ico"
          alt="CodeBox"
        />
      </div>
      {/* /.login-logo */}
      <div className="login-box-body">
        <p className="login-box-msg">Sign in to start your session</p>
        <form onSubmit={props.loginRequest}>
          <div className="form-group has-feedback">
            <input
              name="email"
              placeholder="Username"
              className="form-control"
              id="login"
              maxLength={80}
              size={30}
              type="text"
              onChange={props.handleInput}
              required
            />{" "}
            <span className="glyphicon glyphicon-user form-control-feedback" />
            <span>
              <font color="red" />
            </span>
          </div>
          <div className="form-group has-feedback">
            <input
              name="password"
              placeholder="Password"
              className="form-control"
              id="password"
              size={30}
              type="password"
              onChange={props.handleInput}
              required
            />{" "}
            <span className="glyphicon glyphicon-lock form-control-feedback" />
            <span>
              <font color="red" />
            </span>
          </div>
          <div className="row">
            <div className="col-xs-8" />
            {/* /.col */}
            <div className="col-xs-4">
              <input
                name="submit"
                defaultValue="Sign In"
                id="submit"
                className="btn btn-primary btn-block btn-flat"
                type="submit"
              />{" "}
            </div>
            {/* /.col */}
          </div>
        </form>{" "}
        <br />
        <a className="text-center">Register a new membership</a>
      </div>
      {/* /.login-box-body */}
    </div>
  );
};

export default LoginForms;
