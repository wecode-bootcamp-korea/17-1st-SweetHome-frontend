import React, { Component } from "react";
import "./inputInSignUp.scss";

class InputInSignUp extends Component {
  render() {
    const { handleWarning, isTrue, isPwTrue } = this.props;
    return (
      <div className="inputInSignUp">
        <p className="emailInput">
          <h1>이메일</h1>
          <input
            className={!isTrue && "redColorInput"}
            onBlur={handleWarning}
            type="text"
          ></input>
          <span>@</span>
          <select name="email" className={!isTrue && "redColorInput"}>
            <option value="선택해주세요" selected="selected">
              선택해주세요
            </option>
            <option value="naver.com">naver.com</option>
            <option value="daum.net">daum.net</option>
            <option value="gmail.co.kr">gmail.co.kr</option>
            <option value="직접입력">직접입력</option>
          </select>
        </p>
        {!this.props.isTrue && (
          <span className="warningEmail">필수 입력 사항입니다.</span>
        )}
        <p className="passwordInput">
          <h1>비밀번호</h1>
          <div>8자 이상 입력해주세요.</div>
          <input
            className={!isPwTrue && "warningColor"}
            onBlur={handleWarning}
            type="password"
            placeholder="비밀번호"
          ></input>
        </p>
        {!this.props.isPwTrue && (
          <span className="warningPassWord">8자 이상 입력해주세요.</span>
        )}

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
