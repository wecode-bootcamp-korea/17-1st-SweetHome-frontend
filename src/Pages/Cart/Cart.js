import React, { Component } from "react";
import MainInCart from "./mainInCart/mainInCart";
import PRODUCTMOCKDATA from "./mainInCart/addedProduct/productInform/PRODUCTMOCKDATA";
import "./Cart.scss";

class Cart extends Component {
  constructor() {
    super();
    this.state = { mockData: PRODUCTMOCKDATA };
  }

  render() {
    return (
      <div className="cart">
        <MainInCart mockData={this.state.mockData} />
      </div>
    );
  }
}

export default Cart;
