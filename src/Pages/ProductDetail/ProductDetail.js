import React, { Component } from "react";
import ProductInfo from "./ProductInfo/ProductInfo";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <ProductInfo root={this.props.match.params.id} />
      </div>
    );
  }
}

export default ProductDetail;
