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
    const { emailValue, passwordValue } = this.state;

    fetch("http://192.168.43.45:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.TOKEN) {
          localStorage.setItem("token", result.TOKEN);
          alert("축하합니다");
          this.props.history.push("/communitymain");
        } else {
          alert("아이디나 비밀번호를 확인해주세요.");
        }
      });
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
