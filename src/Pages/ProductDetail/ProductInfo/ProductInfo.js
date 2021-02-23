import React, { Component } from "react";
import "./ProductInfo.scss";

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      itemImgList: [],
      imgNo: 0,
      selectdItem: [
        {
          item: "DK53 3인용 풀커버 그레이 발수 패브릭 소파",
          company: "스위트홈",
          img:
            "https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg",
          discount: "43",
          price: 299000,
          avg: 4.7,
          review: 90,
          isFreeDelivery: true,
          isReduced: true,
          size: ["대형 (100,000원)", "중형 (70,000원)", "소형 (50,0000원)"],
          color: [
            "모스그레이 (60,000원)",
            "골든엘로우 (60,000원)",
            "아로나블루 (60,000원)",
          ],
        },
      ],
    };
  }

  handleImgChange = (id) => {
    this.setState({
      imgNo: id,
    });
  };

  onRequestProductDetail = () => {
    fetch(`http://10.58.2.60:8000/products/1`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          selectdItem: data,
        });
      });
  };

  componentDidMount() {
    this.onRequestProductDetail();
  }

  render() {
    console.log(this.state.selectdItem.product);
    const { selectdItem, imgNo } = this.state;
    return (
      <div className="productDetail">
        <div className="itmeImgOverview">
          <ul className="itemImgList">
            {selectdItem.product.map((item, index) => {
              return (
                <div
                  key={index}
                  className="itemImg"
                  onMouseOver={() => this.handleImgChange(index)}
                >
                  <img alt="상품이미지" src={item.img} />
                </div>
              );
            })}
          </ul>
          <div className="itemCoverImg">
            {selectdItem.product.length > 0 && (
              <img alt="상품" src={selectdItem.product[imgNo].img} />
            )}
          </div>
        </div>
        <div className="itemContent">
          <div className="itemContentOverview">
            {selectdItem.product.map((item) => {
              return (
                <div>
                  <div className="itemContentCompany">{item.company}</div>
                  <h1 className="itemContentName">{item.name}</h1>
                  <div className="itemContentReview">
                    <div className="reviewStar">
                      {"★".repeat(item.rate_average)}
                    </div>
                    <span> {item.review}개 리뷰</span>
                  </div>
                  <div className="itemPriceInfo">
                    <span className="itemContentDiscount">
                      {item.discount_percentage}
                      <span>%</span>
                    </span>
                    <span className="itemContentPrice">
                      {item.discount_price} 원
                    </span>
                    <div className="itemContentReduced">
                      {item.is_on_sale && <div> 특가 </div>}
                    </div>
                  </div>
                  <div className="itemDeliveryInfo">
                    <div className="itemContentDelivery">
                      {item.is_free_delivery && <div> 무료배송 </div>}
                    </div>
                    <p>
                      • 조건에 따라 추가비용 발생 가능 (상품 상세 정보 참고)
                    </p>
                    <p>• 제주도/도서산간 지역 배송 불가</p>
                  </div>
                  <div className="itemCompanyLink">
                    <div className="companyText">{item.company} 브랜드홈</div>
                  </div>
                  <div className="optionInputBox">
                    {item.size && (
                      <select type="select option" className="formControl">
                        <option disabled>사이즈</option>
                        <option value="0">{item.size[0]}</option>
                        <option value="1">{item.size[1]}</option>
                        <option value="2">{item.size[2]}</option>
                      </select>
                    )}
                    {item.color && (
                      <select type="select option" className="formControl">
                        <option disabled>색상</option>
                        <option value="0">{item.color[0]}</option>
                        <option value="1">{item.color[1]}</option>
                        <option value="2">{item.color[2]}</option>
                      </select>
                    )}
                    <div className="optionPriceBox">
                      <div className="priceBoxLeft">
                        <span>주문금액</span>
                      </div>
                      <div className="priceBoxRight">
                        <span>0</span>원
                      </div>
                    </div>
                    <div className="itemBuyOption">
                      <button className="cart">장바구니</button>
                      <button className="buy">바로구매</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
