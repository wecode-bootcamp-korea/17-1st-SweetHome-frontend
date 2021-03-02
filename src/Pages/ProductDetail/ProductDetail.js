import React, { Component } from "react";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductReview from "./ProductReview/ProductReview";
import { SERVER } from "../../config";

// import StarRating from "react-svg-star-rating";

import "./ProductDetail.scss";
import CardList from "./ProductReview/CardList";

class ProductDetail extends Component {
  state = {
    reviewData: [],
  };
  onReviewOrderdRequest = (target) => {
    fetch(`${SERVER}/products?order=${target}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          reviewData: data,
        });
      });
  };

  render() {
    return (
      <div>
        <ProductInfo root={this.props.match.params.id} />
        <div className="ProductDetail">
          <ProductReview onReviewOrderdRequest={this.onReviewOrderdRequest} />
          <CardList
            root={this.props.match.params.id}
            reviewData={this.state.reviewData}
          />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
