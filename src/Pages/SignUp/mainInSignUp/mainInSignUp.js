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
              <i className="fab fa-facebook" />
              <i className="far fa-user-circle" />
              <i className="fab fa-twitter-square" />
            </ol>
          </div>
          <InputInSignUp />
          <CheckInInput />
          <button className="signUpButton">회원가입 완료</button>
          <div className="linkLogin">
            이미 아이디가 있으신가요? <a href="www.wecode.com">로그인</a>
          </div>
        </div>
      </div>
    );
  }
}

export default MainInSignUp;
