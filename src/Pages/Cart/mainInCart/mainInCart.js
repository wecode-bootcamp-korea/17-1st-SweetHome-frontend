import React, { Component } from "react";
import AddedProduct from "./addedProduct/addedProduct";
import CalculatorAndBuy from "./calculatorAndBuy/calculatorAndBuy";

import "./mainInCart.scss";

class mainInCart extends Component {
  render() {
    return (
      <main className="mainInCart">
        <AddedProduct mockData={this.props.mockData} />
        <CalculatorAndBuy />
      </main>
    );
  }
}

export default mainInCart;
