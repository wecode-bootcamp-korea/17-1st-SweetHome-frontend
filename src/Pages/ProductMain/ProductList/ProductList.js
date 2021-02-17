import React, { Component } from "react";
import "./ProductList.scss";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch("data/ProductList.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          productList: data,
        });
      });
  }

  render() {
    const { productList } = this.state;
    return (
      <div className="itemList">
        <div className="itemQuantity">전체 100,000개</div>
        <ul>
          {productList.map((product) => {
            return (
              <div className="item" key={product.id}>
                <div className="itemImg">
                  <img alt="상품" src={product.img} />
                </div>
                <div className="itemContent">
                  <h1 className="itemName">{product.item}</h1>
                  <div className="priceInfo">
                    <span className="discount">
                      {product.discount}
                      <span>%</span>
                    </span>
                    <span className="price">{product.price}</span>
                  </div>
                  <div className="itemEvaluation">
                    <span className="avg">
                      <span>★</span>
                      {product.avg}
                    </span>
                    <div className="review">
                      <span>리뷰</span>
                      {product.review}
                    </div>
                  </div>
                  <div className="itemBadag">
                    {product.isFreeDelivery && (
                      <div className="freeDelivery">무료배송</div>
                    )}
                    {product.isReduced && <div className="onSale">특가</div>}
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductList;
