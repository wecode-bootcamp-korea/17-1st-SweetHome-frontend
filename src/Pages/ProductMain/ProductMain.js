import React from "react";
import "./ProductMain.scss";
import { withRouter } from "react-router-dom";
import ProductCategory from "./ProductCategory/ProductCategory";
import ProductList from "./ProductList/ProductList";
import ProductEventList from "./ProductEventList/ProductEventList";

const ProductMain = () => {
  return (
    <div className="productMain">
      <ProductCategory />
      <div className="mainRight">
        <ProductEventList />
        <ProductList />
      </div>
    </div>
  );
};

export default withRouter(ProductMain);
