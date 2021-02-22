import React, { Component } from "react";
import "./ProductMain.scss";
import { withRouter } from "react-router-dom";
import Slide from "./Slide/Slide";
import ProductCategory from "./ProductCategory/ProductCategory";
import ProductList from "./ProductList/ProductList";

class ProductMain extends Component {
  constructor() {
    super();
    this.state = {
      productCategory: [],
      productList: [],
    };
  }

  onDataRequest = () => {
    fetch("http://10.58.2.60:8000/products", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          productList: data,
        });
      });
  };

  gotoDetail = (id) => {
    this.props.history.push(`/productDetail/${id}`);
  };

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
    this.onDataRequest();
  }

  render() {
    console.log(this.state.productCategory);
    const { productCategory, productList } = this.state;
    return (
      <div className="productMain">
        <ProductCategory
          category={productCategory}
          onDataRequest={this.onDataRequest}
        />
        <div className="mainRight">
          <div className="slide">{/* <Slide /> */}</div>
          <ProductList productList={productList} gotoDetail={this.gotoDetail} />
        </div>
      </div>
    );
  }
}

export default withRouter(ProductMain);
