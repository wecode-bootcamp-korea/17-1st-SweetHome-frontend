import React, { Component } from "react";
import ProductReview from "./ProductReview/ProductReview";

// import StarRating from "react-svg-star-rating";

import "./ProductDetail.scss";
import CardList from "./ProductReview/CardList";

class ProductDetail extends Component {
  render() {
    return (
      <div className="ProductDetail">
        <ProductReview />
        <CardList />
      </div>
    );
  }
}

export default ProductDetail;
