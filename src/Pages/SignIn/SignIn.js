import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MainInSignIn from "./mainInSignIn/mainInSignIn";
import "./SignIn.scss";

class SignIn extends Component {
  constructor() {
    super();
    this.state = { emailValue: "", passwordValue: "" };
  }

  handleChangeValue = (e) => {
    e.target.className.includes("email")
      ? this.setState({ emailValue: e.target.value })
      : this.setState({ passwordValue: e.target.value });
  };

  handleLogin = (e) => {
    console.log(e.target.disabled);
  };

  render() {
    return (
      <div className="SignIn">
        <MainInSignIn
          handleChangeValue={this.handleChangeValue}
          handleLogin={this.handleLogin}
          emailValue={this.state.emailValue}
          passwordValue={this.state.passwordValue}
        />
      </div>
    );
  }
}

export default withRouter(SignIn);
