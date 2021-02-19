import React, { Component } from "react";
import InputInSignUp from "./inputInSignUp/inputInSignUp";
import CheckInInput from "./checkInInput/checkInInput";
import "./mainInSignUp.scss";

class MainInSignUp extends Component {
  constructor() {
    super();
    this.state = {
      isTrue: true,
      isPwTrue: true,
    };
  }

  handleWarningCondition = (e) => {
    if (e.target.type === "text") {
      return e.target.value.length < 1
        ? this.setState({ isTrue: false })
        : this.setState({ isTrue: true });
    }
    if (e.target.type === "password") {
      e.target.value.length < 8
        ? this.setState({ isPwTrue: false })
        : this.setState({ isPwTrue: true });
    }
  };

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
          <InputInSignUp
            handleWarning={this.handleWarningCondition}
            isTrue={this.state.isTrue}
            isPwTrue={this.state.isPwTrue}
          />
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
