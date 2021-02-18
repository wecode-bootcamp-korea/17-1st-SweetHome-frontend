import React, { Component } from "react";
import NavInFooter from "./NavInFooter/NavInFooter";
import InformationInFooter from "./InformationInFooter/InformationInFooter";
import BrandInformData from "./BrandInformData";
import "./Footer.scss";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      navInFooter: BrandInformData,
    };
  }

  render() {
    const { navInFooter } = this.state;
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
          <NavInFooter informBrand={navInFooter.informBrand} />
          <InformationInFooter informCeo={navInFooter.informCeo} />
          <div className="nicePayInform">
            NICEPAY 안전거래 서비스: 고객님의 안전거래를 위해 현금 결제 시, 저희
            사이트에서 가입한 구매안전 서비스를 이용할 수 있습니다.
            <span className="가입확인"> 가입확인</span>
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
