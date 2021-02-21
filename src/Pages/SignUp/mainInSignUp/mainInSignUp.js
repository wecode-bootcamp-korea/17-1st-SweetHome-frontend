import React, { Component } from "react";
import InputInSignUp from "./inputInSignUp/inputInSignUp";
import CheckInInput from "./checkInInput/checkInInput";
import "./mainInSignUp.scss";

class MainInSignUp extends Component {
  constructor() {
    super();
    this.state = {
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
      this.setState({ emailValue: e.target.value });
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
    alert("login");
    const {
      targetValue,
      emailValue,
      checkPasswordValue,
      nameValue,
    } = this.state;

    fetch("http://192.168.43.45:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: targetValue,
        rePassword: checkPasswordValue,
        nickName: nameValue,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        // 회원가입;
        result.message === "SUCCESS"
          ? alert("오이오이 히사시부리")
          : alert("만 19세 미만입니다");
        // // 회원가입 후 로그인
        // if (result.TOKEN) {
        //   localStorage.setItem("token", result.TOKEN);
        //   alert("축하합니다");
        //   this.props.history.push("/mainKwak");
        // } else {
        //   alert("아이디나 비밀번호를 확인해주세요.");
        // }
      });
  };

  render() {
    const {
      targetValue,
      emailValue,
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
          />
          <CheckInInput
            handleClickCheckBox={this.handleClickCheckBox}
            isChecked={isChecked}
          />
          <button
            className={
              emailValue &&
              targetValue.length > 7 &&
              checkPasswordValue === targetValue &&
              2 < nameValue.length < 15
                ? "signUpButton"
                : "cantLogin"
            }
            disabled={
              emailValue &&
              targetValue.length > 7 &&
              checkPasswordValue === targetValue &&
              2 < nameValue.length < 15
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
