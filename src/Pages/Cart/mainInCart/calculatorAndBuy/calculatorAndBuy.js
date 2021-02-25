import React, { Component } from "react";
import "./calculatorAndBuy.scss";

class CalculatorAndBuy extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <section className="calculatorAndBuy">
        <div className="calculatorBox">
          <ol className="paymentOfProduct">
            <div>
              <li className="totlaProductMoney">총 상품금액</li>
              {!this.props.isChecked ? (
                <span>{this.props.allProductPrice} 원</span>
              ) : (
                <span> 0 원</span>
              )}
            </div>
            <div>
              <li className="totalDelivery">총 배송비</li>
              {!this.props.isChecked ? (
                <span> {this.props.onlyDelivery} 원</span>
              ) : (
                <span>0 원</span>
              )}
            </div>
            <div>
              <li className="totalMoney">결제금액</li>
              {!this.props.isChecked ? (
                <span className="totalPay">
                  {this.props.productTotalPrice} 원
                </span>
              ) : (
                <span className="totalPay"> 0 원</span>
              )}
            </div>
          </ol>
          <div className="buttonBox">
            <a className="buyButton" href="/payment">
              <button className="buy">상품 구매하기</button>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default CalculatorAndBuy;
