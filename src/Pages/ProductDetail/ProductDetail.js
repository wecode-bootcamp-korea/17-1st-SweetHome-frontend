import React, { Component } from "react";
import ProductReview from "./ProductReview/ProductReview";
import ReviewModal from "./ProductReview/ReviewModal";

import "./ProductDetail";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <ProductReview />
        <ReviewModal />
      </div>
    );
  }
}

export default ProductDetail;
