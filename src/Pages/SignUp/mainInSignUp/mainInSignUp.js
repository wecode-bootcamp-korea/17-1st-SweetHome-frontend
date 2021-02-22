import React, { Component } from "react";
import InputInSignUp from "./inputInSignUp/inputInSignUp";
import CheckInInput from "./checkInInput/checkInInput";
import "./mainInSignUp.scss";

class MainInSignUp extends Component {
  constructor() {
    super();
    this.state = {
      addedValue: "",
      targetValue: "",
      emailValue: "",
      checkPasswordValue: "",
      nameValue: "",
      isTrue: true,
      isPwTrue: true,
      isPwCheckTrue: true,
      isNameTrue: true,
      isChecked: true,
    };
  }

  handleChangeValue = (e) => {
    if (e.target.className.includes("email")) {
      this.setState({ emailValue: e.target.value + "@" });
    }
    if (
      e.target.value === "naver.com" ||
      e.target.value === "gmail.co.kr" ||
      e.target.value === "daum.net"
    ) {
      this.setState({ addedValue: this.state.emailValue + e.target.value });
    }
    if (e.target.className.includes("password")) {
      this.setState({ targetValue: e.target.value });
    }
    if (e.target.className.includes("checkPw")) {
      this.setState({ checkPasswordValue: e.target.value });
    }
    if (e.target.className.includes("nickName")) {
      this.setState({ nameValue: e.target.value });
    }
  };

  handleClickCheckBox = (e) => {
    this.state.isChecked
      ? this.setState({
          isChecked: false,
        })
      : this.setState({
          isChecked: true,
        });
  };

  handleWarningCondition = (e) => {
    if (e.target.className.includes("email")) {
      return e.target.value.length < 1
        ? this.setState({ isTrue: false })
        : this.setState({ isTrue: true });
    }
    if (e.target.className.includes("password")) {
      return e.target.value.length < 8
        ? this.setState({ isPwTrue: false })
        : this.setState({ isPwTrue: true });
    }
    if (e.target.className.includes("checkPw")) {
      return e.target.value !== this.state.targetValue
        ? this.setState({ isPwCheckTrue: false })
        : this.setState({ isPwCheckTrue: true });
    }
    if (e.target.className.includes("nickName")) {
      return e.target.value.length > 2 && e.target.value.length < 15
        ? this.setState({ isNameTrue: true })
        : this.setState({ isNameTrue: false });
    }
  };

  handleSignUp = () => {
    const { targetValue, emailValue, nameValue } = this.state;

    fetch("http://10.58.2.32:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: targetValue,
        name: nameValue,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        result.message === "SUCCESS"
          ? alert("회원가입 완료")
          : alert("입력을 확인해주세요.");
      });
  };

  render() {
    const {
      addedValue,
      targetValue,
      checkPasswordValue,
      nameValue,
      isTrue,
      isPwTrue,
      isPwCheckTrue,
      isNameTrue,
      isChecked,
    } = this.state;

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
            handleChangeValue={this.handleChangeValue}
            isTrue={isTrue}
            isPwTrue={isPwTrue}
            isPwCheckTrue={isPwCheckTrue}
            isNameTrue={isNameTrue}
            targetValue={targetValue}
            addedValue={addedValue}
          />
          <CheckInInput
            handleClickCheckBox={this.handleClickCheckBox}
            isChecked={isChecked}
          />
          <button
            className={
              addedValue.indexOf(".") !== -1 &&
              targetValue.length > 7 &&
              1 < nameValue.length &&
              nameValue.length < 15 &&
              checkPasswordValue === targetValue
                ? "signUpButton"
                : "cantLogin"
            }
            disabled={
              addedValue.indexOf(".") !== -1 &&
              targetValue.length > 7 &&
              1 < nameValue.length &&
              nameValue.length < 15 &&
              checkPasswordValue === targetValue
                ? false
                : true
            }
            onClick={this.handleSignUp}
          >
            회원가입 완료
          </button>
          <div className="linkLogin">
            이미 아이디가 있으신가요? <a href="www.wecode.com">로그인</a>
          </div>
        </div>
      </div>
    );
  }
}

export default MainInSignUp;
