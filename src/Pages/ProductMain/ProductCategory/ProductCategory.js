import React, { Component } from "react";
import "./ProductCategory.scss";

class ProductCategory extends Component {
  constructor() {
    super();
    this.state = {
      isListOnOff: false,
      product: [],
    };
  }

  onhandleListOnOff = () => {
    this.setState({
      isListOnOff: !this.state.isListOnOff,
    });
  };

  onSelectCategory = () => {
    this.props.onDataRequest();
  };

  componentDidMount() {}

  render() {
    const { category } = this.props;
    const { isListOnOff } = this.state;
    return (
      <div className="productCategory">
        <ul className="productList">
          {category.map((product) => {
            return (
              <li
                className="product"
                key={product.id}
                onClick={() => this.onhandleListOnOff()}
              >
                {product.title}
                {isListOnOff && (
                  <ul className="subProductCategory">
                    {product.subtitle.map((subProduct) => {
                      return (
                        <li onClick={() => this.onSelectCategory()}>
                          {subProduct.subtitlename}
                          <button>∨</button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductCategory;
