import React, { Component } from "react";
import "./ProductMain.scss";
import { withRouter } from "react-router-dom";
import ProductCategory from "./ProductCategory/ProductCategory";
import ProductList from "./ProductList/ProductList";
import BannderSlide from "./Slide/BannerSlide";
import ProductEventList from "./ProductEventList/ProductEventList";

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

  // onCategoryDataRequest = () => {
  //   fetch("http://10.58.2.60:8000/products/category", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({
  //         productCategory: data,
  //       });
  //     });
  // };

  onDateOrderdRequest = (order) => {
    fetch(`http://10.58.2.60:8000/products?order=${order}`, {
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
    // this.onCategoryDataRequest();
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
          {/* <BannderSlide /> */}
          <ProductEventList />
          <ProductList
            productList={productList}
            gotoDetail={this.gotoDetail}
            onDateOrderdRequest={this.onDateOrderdRequest}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(ProductMain);
