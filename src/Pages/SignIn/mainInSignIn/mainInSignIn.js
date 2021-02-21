import React, { Component } from "react";
import InputInMain from "./inputInMain/inputInMain";
import "./mainInSignIn.scss";

class MainInSignIn extends Component {
  render() {
    const { emailValue, passwordValue } = this.props;
    return (
      <div className="mainInSignIn">
        <p className="arrayMainCenter">
          <div className="logoContainer">
            <span className="iconContainer">
              <i className="fas fa-home" />
            </span>
            <span className="logoName">스위트홈</span>
          </div>
          <InputInMain handleChangeValue={this.props.handleChangeValue} />
          <button
            className={
              emailValue && passwordValue.length > 7
                ? "loginButton"
                : "cantLogin"
            }
            onClick={this.props.handleLogin}
            disabled={emailValue && passwordValue.length > 7 ? false : true}
          >
            로그인
          </button>
          <div className="goToSignUp">
            <a href="http://localhost:3000/signup">비밀번호 재설정</a>
            <a href="http://localhost:3000/signup">회원가입</a>
          </div>
          <div className="userSignUp">
            <p>sns계정으로 간편하게 회원가입</p>
            <ol>
              <i className="fab fa-facebook" />
              <i className="far fa-user-circle" />
              <i className="fab fa-twitter-square" />
            </ol>
          </div>
          <div className="비회원주문조회">비회원 주문 조회하기</div>
          <div className="footerDiv">
            <div className="lastSentence">
              ©SweetHome Inc. All Rights Reserved
            </div>
          </div>
        </p>
      </div>
    );
  }
}

export default MainInSignIn;
