import React, { Component } from "react";
import InputInMain from "./inputInMain/inputInMain";
import "./mainInSignIn.scss";

class MainInSignIn extends Component {
  render() {
    return (
      <div className="mainInSignIn">
        <p className="arrayMainCenter">
          <div className="logoContainer">
            <span className="iconContainer">
              <i className="fas fa-home" />
            </span>
            <span className="logoName">스위트홈</span>
          </div>
          <InputInMain />
          <button className="loginButton">로그인</button>
        </p>
      </div>
    );
  }
}

export default MainInSignIn;
