import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MainInSignIn from "./mainInSignIn/mainInSignIn";
import "./SignIn.scss";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="SignIn">
        <MainInSignIn />
      </div>
    );
  }
}

export default withRouter(SignIn);
