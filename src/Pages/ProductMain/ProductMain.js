import React, { Component } from "react";
import "./ProductMain.scss";
import { withRouter } from "react-router-dom";
import ProductCategory from "./ProductCategory/ProductCategory";
import ProductList from "./ProductList/ProductList";
import BannderSlide from "./Slide/BannerSlide";
import ProductEventList from "./ProductEventList/ProductEventList";
import { SERVER } from "../../config";

class ProductMain extends Component {
  constructor() {
    super();
    this.state = {
      productCategory: [],
      productList: [],
    };
  }

  onDataRequest = () => {
    fetch(`${SERVER}/products`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          productList: data,
        });
      });
  };

  onCategoryDataRequest = () => {
    fetch(`${SERVER}/products/category`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          productCategory: data,
        });
      });
  };

  onDateOrderdRequest = (order) => {
    fetch(`${SERVER}/products?order=${order}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          productList: data,
        });
      });
  };

  onDateFilterRequest = (filter, filterName) => {
    fetch(`${SERVER}/products?${filterName}=${filter}`, {
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
    this.onCategoryDataRequest();
    this.onDataRequest();
  }

  render() {
    const { productCategory, productList } = this.state;
    return (
      <div className="productMain">
        <ProductCategory
          category={productCategory}
          onDataRequest={this.onDataRequest}
        />
        <div className="mainRight">
          <ProductEventList />
          <ProductList
            productList={productList}
            gotoDetail={this.gotoDetail}
            onDateOrderdRequest={this.onDateOrderdRequest}
            onDateFilterRequest={this.onDateFilterRequest}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(ProductMain);
