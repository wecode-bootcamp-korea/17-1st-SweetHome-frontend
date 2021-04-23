import React, { useEffect, useState } from "react";
import MainCategory from "./MainCategory/MainCategory";
import "./ProductCategory.scss";
import { SERVER } from "../../../config";

const ProductCategory = () => {
  const [productCategory, setProductCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [isListOnOff, setIsListOnOff] = useState(true);

  useEffect(() => {
    onCategoryDataRequest();
  }, []);

  const onCategoryDataRequest = () => {
    fetch(`${SERVER}/products/category`)
      .then((response) => response.json())
      .then((data) => {
        setProductCategory(data);
      });
  };

  const categoryListOnOff = () => {
    setIsListOnOff(!isListOnOff);
  };

  const onhandleListOnOff = (id) => {
    const selectCategory = productCategory.categories?.filter((product) => {
      return product.id === id;
    });
    setSelectedCategory(selectCategory);
  };

  return (
    <div className="productCategory">
      <div className="mainCategory">
        <MainCategory
          selectedCategory={selectedCategory}
          isListOnOff={isListOnOff}
          onhandleListOnOff={onhandleListOnOff}
          categoryListOnOff={categoryListOnOff}
        />
      </div>
      <ul className="otherCategoryList">
        <h1>
          {productCategory.categories &&
            productCategory.categories.map((product, index) => {
              return (
                <div
                  className="otherCategory"
                  key={index}
                  onClick={() => onhandleListOnOff(index + 1)}
                >
                  {product.name}
                </div>
              );
            })}
        </h1>
      </ul>
    </div>
  );
};

export default ProductCategory;
