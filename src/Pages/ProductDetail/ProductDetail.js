import React, { Component } from "react";
import ProductReview from "./ProductReview/ProductReview";
import "./ProductDetail";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <ProductReview />
      </div>
    );
  }
}

export default ProductDetail;
