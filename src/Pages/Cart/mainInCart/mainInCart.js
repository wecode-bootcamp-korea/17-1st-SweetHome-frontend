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
          isChecked={this.props.isChecked}
          handleAddMoneyOnCalculator={this.props.handleAddMoneyOnCalculator}
          handleRemoveChart={this.props.handleRemoveChart}
        />
        <CalculatorAndBuy
          mockData={this.props.mockData}
          quentityValue={this.props.quentityValue}
          isChecked={this.props.isChecked}
          productTotalPrice={this.props.productTotalPrice}
          allProductPrice={this.props.allProductPrice}
          onlyDelivery={this.props.onlyDelivery}
        />
      </main>
    );
  }
}

export default mainInCart;
