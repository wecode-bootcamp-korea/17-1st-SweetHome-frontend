import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footerOfTop">
          <div className="leftSideOfFooter">
            <span className="고객센터">고객센터 {">"}</span>
            <span className="전화번호">1670-0876</span>
            <span className="영업시간">
              평일 09:00 ~ 18:00(주말 {"&"} 공휴일 제외)
            </span>
          </div>
          <div className="icons">
            <i className="fab fa-apple apple"></i>
            <i className="fab fa-google-play"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="footerOfBody">
          <div className="navInFooter">
            <a href="wecode.com">브랜드 스토리</a>
            <a href="wecode.com">회사소개</a>
            <a href="wecode.com">채용정보</a>
            <a href="wecode.com">이용약관</a>
            <a className="개인정보" href="wecode.com">
              개인정보처리방침
            </a>
            <a href="wecode.com">공지사항</a>
            <a href="wecode.com">고객센터</a>
            <a href="wecode.com">고객의 소리</a>
            <a href="wecode.com">전문가 등록</a>
            <a href="wecode.com">사업자 구매회원</a>
            <a href="wecode.com">제휴/광고 문의</a>
            <a href="wecode.com">입점신청 문의 </a>
          </div>
          <div className="informationInFooter">
            <span>상호명 :(주)스위트홈</span>
            <span>이메일 :(고객문의)sweethome.com</span>
            <span>대표이사 :곽진석</span>
            <span>사업자등록번호 :141-46-00503</span>
            <span>통신판매업신고번호 :제2017-서울용산-3623호</span>
            <span>주소 :서울 용산구</span>
          </div>
          <div className="nicePayInform">
            NICEPAY 안전거래 서비스 : 고객님의 안전거래를 위해 현금 결제 시,
            저희 사이트에서 가입한 구매안전 서비스를 이용할 수 있습니다.
            <strong>가입확인</strong>
          </div>
          <div className="informationOfResponse">
            (주)스위트홈은 통신판매중개자로서 통신판매의 당사자가 아니며,
            입점업체가 등록한 상품, 상품정보 및 거래에 대하여 (주)스위트홈은
            일체 책임을 지지 않습니다.
          </div>
          <div className="copyright">
            Copytight 2021. sweethome.Co.,Ltd.All rights reserved
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
