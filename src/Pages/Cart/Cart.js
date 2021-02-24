import React, { Component } from "react";
import MainInCart from "./mainInCart/mainInCart";
// import PRODUCTMOCKDATA from "./mainInCart/addedProduct/productInform/PRODUCTMOCKDATA";
import NoProduct from "./noProduct/noProduct";
import "./Cart.scss";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      mockData: [],
      quentityValue: "",
      quentityId: "",
      id: "",
      quantity: "",
    };
  }

  componentDidMount() {
    fetch("http://10.58.2.37:8000/orders/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          mockData: data,
        });
      });
  }

  handlePriceChangeByComboBox = async (e) => {
    console.log(e.target.id, e.target.value);
    const idValue = e.target.id;
    const quantityValue = e.target.value;

    await fetch("http://10.58.2.37:8000/orders/products", {
      method: "POST",
      body: JSON.stringify({
        id: idValue,
        quantity: quantityValue,
      }),
    });

    await fetch("http://10.58.2.37:8000/orders/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results[1].quantity);
        this.setState({
          mockData: data,
        });
      });
  };

  handleChangeCalculator = (e) => {
    console.log("kwkw");
    this.setState({});
  };

  render() {
    return (
      <div className="cart">
        {this.state.mockData.length === 0 ? (
          <NoProduct />
        ) : (
          <MainInCart
            handlePriceChangeByComboBox={this.handlePriceChangeByComboBox}
            handleChangeCalculator={this.handleChangeCalculator}
            handleIdChangeByComboBox={this.handleIdChangeByComboBox}
            mockData={this.state.mockData}
            quentityValue={this.state.quentityValue}
          />
        )}
      </div>
    );
  }
}

export default Cart;
