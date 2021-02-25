import React, { Component } from "react";
import "./noProduct.scss";

class NoProduct extends Component {
  render() {
    return (
      <div className="noProduct">
        <div className="buttonBox">
          <i class="fas fa-cat"></i>
          <a className="buyButton" href="/productmain">
            <button className="buy">상품 담으러 가기</button>
          </a>
        </div>
      </div>
    );
  }
}

export default NoProduct;
