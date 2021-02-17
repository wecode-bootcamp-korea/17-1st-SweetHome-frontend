import React, { Component } from "react";
import "./ProductMain.scss";
import Slide from "./Slide/Slide";
import ProductList from "./ProductList/ProductList";

class ProductMain extends Component {
  state = {
    data: [
      {
        id: 1,
        title: "가구",
        isProductListonOff: false,
        subtitle: [
          {
            id: 1,
            subtitlename: "소파/거실 가구",
          },
          {
            id: 2,
            subtitlename: "침실 가구",
          },
        ],
      },
      {
        id: 2,
        title: "가전",
        isProductListonOff: false,
        subtitle: [
          {
            id: 1,
            subtitlename: "대형가전",
          },
          {
            id: 2,
            subtitlename: "주방가전",
          },
          {
            id: 3,
            subtitlename: "일반가전",
          },
        ],
      },
    ],
  };

  onClickListOnOff = () => {
    this.setState({
      isProductListonOff: !this.state.isProductListonOff,
    });
  };

  render() {
    const { data, isProductListonOff } = this.state;
    return (
      <div className="productMain">
        <div className="productCategory">
          <ul className="productList">
            {data.map((product) => {
              return (
                <li className="product" onClick={this.onClickListOnOff}>
                  {product.title}
                  <ul className="subProductList">
                    {product.subtitle.map((subProduct) => {
                      return (
                        isProductListonOff && <li>{subProduct.subtitlename}</li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mainRight">
          <div className="slide">
            <Slide />
          </div>
          <ProductList />
        </div>
      </div>
    );
  }
}

export default ProductMain;
