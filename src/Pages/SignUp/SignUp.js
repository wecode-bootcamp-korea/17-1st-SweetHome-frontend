import React, { Component } from "react";
import MainInSignUp from "./mainInSignUp/mainInSignUp";
import "./SignUp.scss";

class SignUp extends Component {
  render() {
    return (
      <div className="signUp">
        <div className="divForArrayCenter">
          <span className="logo">
            <i class="fas fa-home"></i>
            스위트홈
          </span>
          <MainInSignUp />
        </div>
      </div>
    );
  }
}

export default SignUp;
