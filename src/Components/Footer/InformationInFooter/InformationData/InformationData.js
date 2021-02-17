import React, { Component } from "react";
import "./InformationData.scss";

class InformationData extends Component {
  render() {
    return (
      <div className="informationData">
        <span>상호명: (주)스위트홈</span>
        <span>이메일: (고객문의)sweethome.com</span>
        <span>대표이사: 곽진석</span>
        <span>사업자등록번호: 141-46-00503</span>
        <span>통신판매업신고번호: 제2017-서울용산-3623호</span>
        <span>주소: 서울 용산구</span>
      </div>
    );
  }
}

export default InformationData;
