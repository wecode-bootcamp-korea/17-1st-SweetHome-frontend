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
              <span>바꿔야하는부분</span>
            </div>
            <div>
              <li className="totalDelivery">총 배송비</li>
              <span>바꿔야하는부분</span>
            </div>
            <div>
              <li className="discount">총 할인금액</li>
              <span>바꿔야하는부분</span>
            </div>
            <div>
              <li className="totalMoney">결제금액</li>
              <span className="totalPay">바꿔야하는부분</span>
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
