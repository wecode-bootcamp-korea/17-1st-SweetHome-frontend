import React, { Component } from "react";
import "./ProductInfo.scss";

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      itemImgList: [],
      imgNo: 0,
      selectdItem: [],
      size: "",
      color: "",
      quantity: 1,
    };
  }

  handleImgChange = (id) => {
    this.setState({
      imgNo: id,
    });
  };

  onhandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onRequestProductDetail = () => {
    fetch(`http://10.58.2.60:8000/products/${this.props.root}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          selectdItem: data,
        });
      });
  };

  onSendOrderInfo = () => {
    const { size, color, quantity } = this.state;
    fetch(`http://10.58.2.37:8000/products/${this.props.root}`, {
      method: "POST",
      body: JSON.stringify({
        size: size,
        color: color,
        quantity: quantity,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log("결과: ", result));
  };

  componentDidMount() {
    this.onRequestProductDetail();
  }

  render() {
    const { selectdItem, imgNo, size, color, quantity } = this.state;
    console.log(color);
    console.log(size);
    console.log(quantity);
    return (
      <div className="productDetail">
        <div className="itmeImgOverview">
          <ul className="itemImgList">
            {selectdItem.product &&
              selectdItem.product.image.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="itemImg"
                    onMouseOver={() => this.handleImgChange(index)}
                  >
                    <img alt="상품이미지" src={item} />
                  </div>
                );
              })}
          </ul>
          <div className="itemCoverImg">
            {selectdItem.product && (
              <img alt="상품" src={selectdItem.product.image[imgNo]} />
            )}
          </div>
        </div>
        <div className="itemContent">
          <div className="itemContentOverview">
            {selectdItem.product && (
              <div>
                <div className="itemContentCompany">
                  {selectdItem.product.company}
                </div>
                <h1 className="itemContentName">{selectdItem.product.name}</h1>
                <div className="itemContentReview">
                  <div className="reviewStar">
                    {"★".repeat(selectdItem.product.rate_average)}
                  </div>
                  {selectdItem.product.review_count > 0 && (
                    <span> {selectdItem.product.review_count}개 리뷰</span>
                  )}
                </div>
                <div className="itemPriceInfo">
                  <span className="itemContentDiscount">
                    {selectdItem.product.discount_percentage}
                    <span>%</span>
                  </span>
                  <div>
                    <div className="itemOriginPrice">
                      {selectdItem.product.original_price} 원
                    </div>
                    <span className="itemDiscountPrice">
                      {selectdItem.product.discount_price} 원
                    </span>
                  </div>
                  <div>
                    {selectdItem.product.is_on_sale && (
                      <div className="itemContentReduced"> 특가 </div>
                    )}
                  </div>
                </div>
                <div className="itemDeliveryInfo">
                  <div>
                    {!selectdItem.product.is_free_delivery && (
                      <div className="itemdeliveryType">
                        {selectdItem.product.delivery_type}
                      </div>
                    )}
                  </div>
                  <div>
                    {selectdItem.product.is_free_delivery && (
                      <div className="itemContentDelivery"> 무료배송 </div>
                    )}
                  </div>
                  <p>• 조건에 따라 추가비용 발생 가능 (상품 상세 정보 참고)</p>
                  <p>• 제주도/도서산간 지역 배송 불가</p>
                </div>
                <div className="itemCompanyLink">
                  <div className="companyText">
                    {selectdItem.product.company} 브랜드홈
                  </div>
                </div>
                <div className="optionInputBox">
                  {selectdItem.product.size && (
                    <select
                      type="select option"
                      className="formControl"
                      onChange={this.onhandleChange}
                    >
                      <option disabled>사이즈</option>
                      {selectdItem.product.size.map((size, idx) => {
                        return (
                          <option key={idx} value={size} name="size">
                            {size}
                          </option>
                        );
                      })}
                    </select>
                  )}
                  {selectdItem.product.color && (
                    <select
                      type="select option"
                      className="formControl"
                      onChange={this.onhandleChange}
                    >
                      <option disabled>색상</option>
                      {selectdItem.product.color.map((color, idx) => {
                        return (
                          <option key={idx} value={color} name="color">
                            {color}
                          </option>
                        );
                      })}
                    </select>
                  )}
                  <div className="orderInfoBox">
                    <div>{selectdItem.product.name}</div>
                    <div>{size}</div>
                    <div>{color}</div>
                    <select type="select option">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="optionPriceBox">
                    <div className="priceBoxLeft">
                      <span>주문금액</span>
                    </div>
                    <div className="priceBoxRight">
                      <span>
                        {selectdItem.product.discount_price * quantity}
                      </span>
                      원
                    </div>
                  </div>
                  <div className="itemBuyOption">
                    <button className="cart" onClick={this.onSendOrderInfo}>
                      장바구니
                    </button>
                    <button className="buy">바로구매</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
