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
          {selectedCategory &&
            selectedCategory.map((category) => {
              return (
                <h2
                  className="mainCategoryItemName"
                  onClick={categoryListOnOff}
                >
                  {category.name}
                </h2>
              );
            })}
        </div>
        <ul className="productList">
          {selectedCategory &&
            selectedCategory.map((product) => {
              return (
                <div>
                  {isListOnOff && (
                    <ul className="subProductCategory">
                      {product.sub_category.map((subProduct) => {
                        return (
                          <li onClick={onSelectCategory}>
                            {subProduct.name}
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
