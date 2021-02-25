import React, { Component } from "react";
import "./ProductEventList.scss";

class ProductEventList extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch("http://10.58.2.60:8000/products?top=discount")
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
      <div className="productEventList">
        <p className="eventName"># 지금은 할인중</p>
        <ul>
          {productList.products &&
            productList.products.map((product) => {
              return (
                <div className="item" key={product.id}>
                  <div className="itemImg">
                    <img alt="상품" src={product.image} />
                  </div>
                  <div className="itemContent">
                    <h1 className="itemName">{product.name}</h1>
                    <div className="priceInfo">
                      <span className="discount">
                        {product.discount_percentage}
                        <span>%</span>
                      </span>
                      <span className="price">{product.discount_price}</span>
                    </div>
                    <div className="itemEvaluation">
                      <span className="avg">
                        <span>★</span>
                        {product.rate_average}
                      </span>
                      <div className="review">
                        <span>리뷰</span>
                        {product.review_count}
                      </div>
                    </div>
                    <div className="itemBadag">
                      {product.is_free_delivery && (
                        <div className="freeDelivery">무료배송</div>
                      )}
                      {product.is_on_sale && <div className="onSale">특가</div>}
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

export default ProductEventList;
