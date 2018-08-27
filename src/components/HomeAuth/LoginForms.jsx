import React from "react";

const registerModal = props => {
  return (
    <div
      className="modal fade wizard-modal"
      id="wizard-modal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="image-gallery-modal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md" role="document">
        <div className="modal-content">
          <div className="modal-body p-5">
            <div className="text-center" style={{ marginBottom: "4.5rem" }}>
              <h4>Register</h4>
            </div>
            <form >
              <div
                className="wizard p-4"
                id="modal-wizard"
                style={{ borderRadius: 6 }}
              >
                <ul className="nav nav-tabs vertices" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#ex2-step-1"
                      role="tab"
                    >
                      <div className="vertex vertex-circle">
                        <span className="vertex-inner">
                          <svg
                            width={22}
                            height={22}
                            className="svg-isvg-pin-icon"
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane p-5 active"
                    id="ex2-step-1"
                    role="tabpanel"
                  >
                    <h6 className="text-center mb-5">Sign up as a new user</h6>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <input
                            name="userName"
                            className="form-control"
                            placeholder="Your Name"
                            type="text"
                            onChange={props.handleNewUser}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            name="email"
                            className="form-control"
                            placeholder="Email Address"
                            type="email"
                            onChange={props.handleNewUser}
                          />
                        </div>
                      </div>
                      {/* /.col */}
                      <div className="col">
                        <div className="form-group">
                          <input
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            type="password"
                            onChange={props.handleNewUser}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            name="password_confirmation"
                            className="form-control"
                            placeholder="Password confirmation"
                            type="password"
                            onChange={props.handleNewUser}
                          />
                        </div>
                      </div>
                      {/* /.col */}
                    </div>
                    {/* /.row */}
                  </div>
                  <div className="pager d-flex justify-content-between">
                    <button
                      type="button"
                      className="next btn btn-outline-success btn-rounded px-5"
                      onClick={props.registerRequest}
                    >
                      SignUp
                    </button>
                  </div>
                  {/* /.pager */}
                </div>
                {/* /.tab-content */}
              </div>
              {/* /.form-wizard */}
            </form>
          </div>
          {/* /.modal-body */}
        </div>
        {/* /.modal-content */}
      </div>
      {/* /.modal-dialog */}
    </div>
  );
};
const LoginForms = props => {
  return (
    <div className="login-box">
      <div className="login-logo">
        <img // src="../../../public/favicon.ico"
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
        <button
          className="btn btn-primary "
          data-toggle="modal"
          data-target="#wizard-modal"
        >
          Show Wizard
        </button>
      </div>
      {registerModal(props)}
      {/* /.login-box-body */}
    </div>
  );
};

export default LoginForms;
