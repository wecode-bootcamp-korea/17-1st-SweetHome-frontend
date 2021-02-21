import React, { Component } from "react";
import "./inputInMain.scss";

class InputInMain extends Component {
  render() {
    return (
      <div className="inputInMain">
        <input type="text" className="email" placeholder="이메일"></input>
        <input
          type="password"
          className="password"
          placeholder="비밀번호"
        ></input>
      </div>
    );
  }
}

export default InputInMain;
