import React, { Component } from "react";
import MainCategory from "./MainCategory/MainCategory";
import "./ProductCategory.scss";

class ProductCategory extends Component {
  constructor() {
    super();
    this.state = {
      isListOnOff: true,
      product: [],
      selectedCategory: [],
    };
  }

  categoryListOnOff = () => {
    this.setState({
      isListOnOff: !this.state.isListOnOff,
    });
  };

  onhandleListOnOff = (id) => {
    const selectCategory = this.props.category.filter((product) => {
      return product.id === id;
    });
    this.setState({
      selectedCategory: selectCategory,
    });
  };

  onSelectCategory = () => {
    this.props.onDataRequest();
  };

  componentDidMount() {
    this.onhandleListOnOff();
  }

  render() {
    const { category } = this.props;
    const { isListOnOff, selectedCategory } = this.state;
    return (
      <div className="productCategory">
        <div className="mainCategory">
          <MainCategory
            selectedCategory={selectedCategory}
            onSelectCategory={this.onSelectCategory}
            onhandleListOnOff={this.onhandleListOnOff}
            isListOnOff={isListOnOff}
            categoryListOnOff={this.categoryListOnOff}
          />
        </div>
        <ul className="otherCategoryList">
          <h1>
            {category.length > 0 &&
              category.map((product, index) => {
                return (
                  <div
                    className="otherCategory"
                    key={index}
                    onClick={() => this.onhandleListOnOff(index + 1)}
                  >
                    {product.title}
                  </div>
                );
              })}
          </h1>
        </ul>
      </div>
    );
  }
}

export default ProductCategory;
