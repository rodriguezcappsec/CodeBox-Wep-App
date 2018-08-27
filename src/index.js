import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import LoginPage from "./components/HomeAuth/LoginPage.jsx";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <LoginPage />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
