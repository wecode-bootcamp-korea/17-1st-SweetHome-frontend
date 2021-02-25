import React, { Component } from "react";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductReview from "./ProductReview/ProductReview";

// import StarRating from "react-svg-star-rating";

import "./ProductDetail.scss";
import CardList from "./ProductReview/CardList";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <ProductInfo root={this.props.match.params.id} />
        <div className="ProductDetail">
          <ProductReview />
          <CardList />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
