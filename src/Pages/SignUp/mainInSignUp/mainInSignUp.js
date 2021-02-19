import React, { Component } from "react";
import InputInSignUp from "./inputInSignUp/inputInSignUp";
import CheckInInput from "./checkInInput/checkInInput";
import "./mainInSignUp.scss";

class MainInSignUp extends Component {
  render() {
    return (
      <div className="mainInSignUp">
        <div className="divForArray">
          <h1>회원가입</h1>
          <div className="userSignUp">
            <p>sns계정으로 간편하게 회원가입</p>
            <ol>
              <i class="fab fa-facebook"></i>
              <i class="far fa-user-circle"></i>
              <i class="fab fa-twitter-square"></i>
            </ol>
          </div>
          <InputInSignUp />
          <CheckInInput />
        </div>
      </div>
    );
  }
}

export default MainInSignUp;
