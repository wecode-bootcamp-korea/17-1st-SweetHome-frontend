import React, { Component } from "react";
import "./inputInSignUp.scss";

class InputInSignUp extends Component {
  render() {
    return (
      <div className="inputInSignUp">
        <p className="emailInput">
          <h1>이메일</h1>
          <input type="text"></input>
          <span>@</span>
          <select name="email">
            <option value="선택해주세요" selected="selected">
              선택해주세요
            </option>
            <option value="naver.com">naver.com</option>
            <option value="daum.net">daum.net</option>
            <option value="gmail.co.kr">gmail.co.kr</option>
            <option value="직접입력">직접입력</option>
          </select>
        </p>

        <p className="passwordInput">
          <h1>비밀번호</h1>
          <div>8자 이상 입력해주세요.</div>
          <input type="password" placeholder="비밀번호"></input>
        </p>

        <p className="checkPasswordInput">
          <h1>비밀번호 확인</h1>
          <input type="password" placeholder="비밀번호 확인"></input>
        </p>

        <p className="nickNameInput">
          <h1>별명</h1>
          <div>다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)</div>
          <input type="text" placeholder="별명 (2~15자)"></input>
        </p>
      </div>
    );
  }
}

export default InputInSignUp;
