import React, { Component } from "react";
import InputInSignUp from "./inputInSignUp/inputInSignUp";
import CheckInInput from "./checkInInput/checkInInput";
import { SERVER } from "../../../config";
import "./mainInSignUp.scss";
import { withRouter } from "react-router";

class MainInSignUp extends Component {
  constructor() {
    super();
    this.state = {
      emailValue: "",
      targetValue: "",
      idValue: "",
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
    const { value, name } = e.target;
    if (
      value === "naver.com" ||
      value === "gmail.co.kr" ||
      value === "daum.net"
    ) {
      this.setState({ emailValue: value });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleClickCheckBox = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  handleWarningCondition = (e) => {
    const { name, value } = e.target;

    if (name === "idValue")
      !value
        ? this.setState({ isTrue: false })
        : this.setState({ isTrue: true });
    if (name === "targetValue") {
      value.length < 7
        ? this.setState({ isPwTrue: false })
        : this.setState({ isPwTrue: true });
    }
    if (name === "checkPasswordValue") {
      value !== this.state.targetValue
        ? this.setState({ isPwCheckTrue: false })
        : this.setState({ isPwCheckTrue: true });
    }
    if (name === "nameValue") {
      value.length > 1 && value.length < 16
        ? this.setState({ isNameTrue: true })
        : this.setState({ isNameTrue: false });
    }
  };

  handleSignUp = () => {
    const { targetValue, emailValue, nameValue, idValue } = this.state;

    fetch(`${SERVER}/user/signup`, {
      method: "POST",
      body: JSON.stringify({
        email: idValue + "@" + emailValue,
        password: targetValue,
        name: nameValue,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        result.message === "SUCCESS"
          ? this.props.history.push("/signin")
          : alert("입력을 확인해주세요.");
      });
  };

  render() {
    const {
      emailValue,
      idValue,
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
          />
          <CheckInInput
            handleClickCheckBox={this.handleClickCheckBox}
            isChecked={isChecked}
          />
          <button
            className={
              (idValue + emailValue).includes(".") &&
              targetValue.length > 7 &&
              1 < nameValue.length &&
              nameValue.length < 15 &&
              checkPasswordValue === targetValue
                ? "signUpButton"
                : "cantLogin"
            }
            disabled={
              (idValue + emailValue).includes(".") &&
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

export default withRouter(MainInSignUp);
