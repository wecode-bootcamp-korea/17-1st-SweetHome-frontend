import React, { Component } from "react";
import "./inputInSignUp.scss";

class InputInSignUp extends Component {
  render() {
    const {
      handleWarning,
      handleChangeValue,
      isTrue,
      isPwTrue,
      isPwCheckTrue,
      isNameTrue,
    } = this.props;
    return (
      <div className="inputInSignUp">
        <p className="emailInput">
          <h1 className={!isTrue && "colorOfAllWarning"}>이메일</h1>
          <input
            className={`email ${!isTrue && "redColorInput"}`}
            onChange={handleChangeValue}
            onBlur={handleWarning}
            type="text"
            placeholder="이메일"
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

        {!isTrue && <span className="warningEmail">필수 입력 사항입니다.</span>}

        <p className="passwordInput">
          <h1 className={!isPwTrue && "colorOfAllWarning"}>비밀번호</h1>
          <div>8자 이상 입력해주세요.</div>
          <input
            className={`password ${!isPwTrue && "warningColor"}`}
            onChange={handleChangeValue}
            onBlur={handleWarning}
            type="password"
            placeholder="비밀번호"
          ></input>
        </p>

        {!isPwTrue && (
          <span className="warningPassWord">8자 이상 입력해주세요.</span>
        )}

        <p className="checkPasswordInput">
          <h1 className={!isPwCheckTrue && "colorOfAllWarning"}>
            비밀번호 확인
          </h1>
          <input
            className={`checkPw ${!isPwCheckTrue && "colorChange"}`}
            onBlur={handleWarning}
            onChange={handleChangeValue}
            disabled={!this.props.targetValue && true}
            type="password"
            placeholder="비밀번호 확인"
          ></input>
        </p>

        {!isPwCheckTrue && (
          <span className="warningCheckPassWord">
            비밀번호를 일치시켜 주세요.
          </span>
        )}

        <p className="nickNameInput">
          <h1 className={!isNameTrue && "colorOfAllWarning"}>별명</h1>
          <div>다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)</div>
          <input
            className={`nickName ${!isNameTrue && "nameColor"}`}
            onBlur={handleWarning}
            onChange={handleChangeValue}
            type="text"
            placeholder="별명 (2~15자)"
          ></input>
        </p>
        {!isNameTrue && (
          <span className="warningName">2~15자로 입력해주세요</span>
        )}
      </div>
    );
  }
}

export default InputInSignUp;
