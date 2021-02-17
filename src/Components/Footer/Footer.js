import React, { Component } from "react";
import NavInFooter from "./NavInFooter/NavInFooter";
import "./Footer.scss";
import InformationInFooter from "./InformationInFooter/InformationInFooter";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      navInFooter: [
        {
          id: "navInFooter",
          content1: "브랜드 스토리",
          content2: "회사소개",
          content3: "채용정보",
          content4: "이용약관",
          content5: "개인정보처리방침",
          content6: "공지사항",
          content7: "고객센터",
          content8: "고객의 소리",
          content9: "전문가 등록",
          content10: "사업자 구매회원",
          content11: "제휴/광고 문의",
          content12: "입점신청 문의",
        },
      ],
      informationInFooter: [
        {
          id: "informationInFooter",
          content1: "상호명 :(주)스위트홈",
          content2: "이메일 :(고객문의)sweethome.com",
          content3: "대표이사 :곽진석",
          content4: "사업자등록번호 :141-46-00503",
          content5: "통신판매업신고번호 :제2017-서울용산-3623호",
          content6: "서울 용산구",
        },
      ],
      addCommentList: [],
    };
  }
  render() {
    const { informationInFooter, navInFooter } = this.state;
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
            <i className="fab fa-apple apple" />
            <i className="fab fa-google-play" />
            <i className="fab fa-facebook-f" />
            <i className="fab fa-instagram" />
          </div>
        </div>
        <div className="footerOfBody">
          <NavInFooter navInFooter={navInFooter} />
          <InformationInFooter informationInFooter={informationInFooter} />
          <div className="nicePayInform">
            NICEPAY 안전거래 서비스: 고객님의 안전거래를 위해 현금 결제 시, 저희
            사이트에서 가입한 구매안전 서비스를 이용할 수 있습니다.
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
