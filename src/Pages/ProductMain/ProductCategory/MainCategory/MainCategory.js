import React, { Component } from "react";
import "./MainCategory.scss";

class MainCategory extends Component {
  render() {
    const {
      selectedCategory,
      categoryListOnOff,
      onSelectCategory,
      isListOnOff,
    } = this.props;
    return (
      <div className="mainCategoryItem">
        <div>
          {selectedCategory.map((category) => {
            return (
              <h2 className="mainCategoryItemName" onClick={categoryListOnOff}>
                {category.title}
              </h2>
            );
          })}
        </div>
        <ul className="productList">
          {selectedCategory.map((product) => {
            return (
              <div>
                {isListOnOff && (
                  <ul className="subProductCategory">
                    {product.subtitle.map((subProduct) => {
                      return (
                        <li onClick={onSelectCategory}>
                          {subProduct.subtitlename}
                          <button>∨</button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MainCategory;
