import React, { Component } from "react";
import AddedProduct from "./addedProduct/addedProduct";
import CalculatorAndBuy from "./calculatorAndBuy/calculatorAndBuy";

import "./mainInCart.scss";

class mainInCart extends Component {
  render() {
    return (
      <main className="mainInCart">
        <AddedProduct
          handlePriceChangeByComboBox={this.props.handlePriceChangeByComboBox}
          handleChangeCalculator={this.props.handleChangeCalculator}
          handleIdChangeByComboBox={this.props.handleIdChangeByComboBox}
          mockData={this.props.mockData}
          quentityValue={this.props.quentityValue}
        />
        <CalculatorAndBuy
          mockData={this.props.mockData}
          quentityValue={this.props.quentityValue}
        />
      </main>
    );
  }
}

export default mainInCart;
