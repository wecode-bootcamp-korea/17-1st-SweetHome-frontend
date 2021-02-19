import React, { Component } from "react";
import "./checkInInput.scss";

class CheckInInput extends Component {
  render() {
    return (
      <div className="checkInInput">
        <h1>약관동의</h1>
        <p className="containerForCheck">
          <div className="전체동의">
            <input type="checkbox"></input>
            <span>전체동의</span>
          </div>

          <div className="연령제한">
            <input type="checkbox"></input>
            <span>만 14세 이상입니다.</span>
            <span className="필수">(필수)</span>
          </div>

          <div className="이용약관">
            <input type="checkbox"></input>
            <span>이용약관</span>
            <span className="필수">(필수)</span>
          </div>

          <div className="개인정보처리방침">
            <input type="checkbox"></input>
            <span>개인정보처리방침</span>
            <span className="필수">(필수)</span>
          </div>

          <div className="기타">
            <input type="checkbox"></input>
            <span>이벤트,프로모션 알림 메일 및 SNS수신</span>
            <span className="선택">(선택)</span>
          </div>
        </p>
      </div>
    );
  }
}

export default CheckInInput;
