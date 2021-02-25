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
      handlePriceChangeByComboBox,
      quentityValue,
      productImage,
      isChecked,
      handleAddMoneyOnCalculator,
      index,
      handleRemoveChart,
    } = this.props;

    const PriceWon = (comboboxquantity * productPrice).toLocaleString("ko-KR", {
      style: "currency",
      currency: "KRW",
    });

    return (
      <div className="productInform">
        <div className="companyName">{productCompany}</div>
        <p className="productContent">
          <div className="checkboxInContent">
            {isChecked ? (
              <input
                onChange={handleAddMoneyOnCalculator}
                name={productOption}
                type="checkbox"
              ></input>
            ) : (
              <input
                onChange={handleAddMoneyOnCalculator}
                name={productOption}
                type="checkbox"
                checked
              ></input>
            )}
          </div>
          <div className="mainInContent">
            <div className="productImageWithInform">
              <img className="productImage" src={productImage} alt=""></img>
              <div className="imageInform">
                <div className="productName">{productName}</div>
                {productDeliveryFee === 0 ? (
                  <div className="deliveryFree">무료배송</div>
                ) : (
                  <div className="deliveryFree">{productDeliveryFee} 원</div>
                )}

                <span className="deliveryType"> | {productDelivery}</span>
              </div>
              <button
                onClick={handleRemoveChart}
                id={`results${index}`}
                className={`buttonRemove ${index}`}
              >
                X{/* <i className="fas fa-times" /> */}
              </button>
            </div>
            <p className="productColorAndSizeInform">
              <div className="productColorAndSizeContainer">
                <span className="colorAndSize">
                  {productColor}, {productSize}
                </span>
                <button className="buttonRemove">X</button>
              </div>
              <div className="quentityBox">
                <select
                  onChange={(e) => handlePriceChangeByComboBox(e)}
                  className="quentity"
                  id={productOption}
                >
                  <option selected="selected">{comboboxquantity}</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10+</option>
                </select>
                <span> {PriceWon} 원</span>
              </div>
              <div className="wanted">
                <div className="wantedInput">
                  원하는 사이즈를 기입해주세요. 옵션 외에 별도의 특수 요청이
                  없으면 기재하지 않으셔도 됩니다. (선택)
                  <input className="wantedText" type="text"></input>
                </div>
              </div>
            </p>
            <div className="lastInMain">
              <span>
                <a href="">옵션변경 | </a>
                <a href="">바로구매</a>
              </span>
              <span> {PriceWon} 원</span>
            </div>
          </div>
        </p>
        <div className="lastOfMain">
          {productDeliveryFee === 0 ? (
            <span>무료배송</span>
          ) : (
            <span>{productDeliveryFee} 원</span>
          )}
        </div>
      </div>
    );
  }
}

export default ProductInform;
