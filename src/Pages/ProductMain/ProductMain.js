import React, { useEffect } from "react";
import "./ProductMain.scss";
import { withRouter } from "react-router-dom";
import ProductCategory from "./ProductCategory/ProductCategory";
import ProductList from "./ProductList/ProductList";
import ProductEventList from "./ProductEventList/ProductEventList";
import { SERVER } from "../../config";

const ProductMain = () => {
  const [productCategory, setProductCategory] = [];

  useEffect(() => {
    onCategoryDataRequest();
  });

  const onCategoryDataRequest = () => {
    fetch(`${SERVER}/products/category`)
      .then((response) => response.json())
      .then((data) => {
        setProductCategory(data);
      });
  };

  return (
    <div>
      <div className="productMain">
        <ProductCategory category={productCategory} />
        <div className="mainRight">
          <ProductEventList />
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductMain);
