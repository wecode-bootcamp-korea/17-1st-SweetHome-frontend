import React, { Component } from "react";
import "./ProductMain.scss";
import Slide from "./Slide/Slide";
import ProductCategory from "./ProductCategory/ProductCategory";
import ProductList from "./ProductList/ProductList";

class ProductMain extends Component {
  constructor() {
    super();
    this.state = {
      productCategory: [],
    };
  }

  componentDidMount() {
    fetch("data/ProductMenu.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          productCategory: data,
        });
      });
  }

  render() {
    console.log(this.state.productCategory);
    return (
      <div className="productMain">
        <ProductCategory category={this.state.productCategory} />
        <div className="mainRight">
          <div className="slide">{/* <Slide /> */}</div>
          <ProductList />
        </div>
      </div>
    );
  }
}

export default ProductMain;
