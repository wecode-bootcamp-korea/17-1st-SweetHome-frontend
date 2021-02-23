import React, { Component } from "react";
import "./productInform.scss";

class ProductInform extends Component {
  render() {
    const {
      productOption,
      productName,
      productColor,
      productSize,
      comboboxquantity,
      productPrice,
      productCompany,
      productDelivery,
      productDeliveryFee,
    } = this.props;
    return (
      <div className="productInform">
        <div className="companyName">{productCompany}</div>
        <p className="productContent">
          <div className="checkboxInContent">
            <input type="checkbox"></input>
          </div>
          <div className="mainInContent">
            <div className="productImageWithInform">
              <img
                className="productImage"
                src="data:image/png;base64,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"
                alt=""
              ></img>
              <div className="imageInform">
                <div className="productName">{productName}</div>
                {productDeliveryFee === 0 ? (
                  <div className="deliveryFree">무료배송</div>
                ) : (
                  <div className="deliveryFree">{productDeliveryFee}</div>
                )}
                <span className="deliveryType"> | {productDelivery}</span>
              </div>
              <button className="buttonRemove">
                <i className="fas fa-times" />
              </button>
            </div>
            <p className="productColorAndSizeInform">
              <div className="productColorAndSizeContainer">
                <span className="colorAndSize">
                  {productColor}, {productSize}
                </span>
                <button className="buttonRemove">
                  <i className="fas fa-times" />
                </button>
              </div>
              <div className="quentityBox">
                <select className="quentity">
                  <option value="선택해주세요" selected="selected">
                    {comboboxquantity}
                  </option>
                  <option value="naver.com">1</option>
                  <option value="daum.net">2</option>
                  <option value="gmail.co.kr">3</option>
                  <option value="직접입력">4</option>
                  <option value="직접입력">5</option>
                  <option value="naver.com">6</option>
                  <option value="daum.net">7</option>
                  <option value="gmail.co.kr">8</option>
                  <option value="직접입력">9</option>
                  <option value="직접입력">10+</option>
                </select>
                <span>{productPrice}원</span>
              </div>
            </p>
            <div className="lastInMain">
              <span>
                <a href="">옵션변경 | </a>
                <a href="">바로구매</a>
              </span>
              <span>{productPrice}원</span>
            </div>
          </div>
        </p>
        <div className="lastOfMain">
          {productDeliveryFee === 0 ? (
            <span>무료배송</span>
          ) : (
            <span>{productDeliveryFee}</span>
          )}
        </div>
      </div>
    );
  }
}

export default ProductInform;
