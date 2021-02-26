import React, { Component } from "react";
import MainInCart from "./mainInCart/mainInCart";
// import PRODUCTMOCKDATA from "./mainInCart/addedProduct/productInform/PRODUCTMOCKDATA";
import NoProduct from "./noProduct/noProduct";
import { SERVER } from "../../config";
import "./Cart.scss";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      mockData: [],
      quentityValue: "",
      quentityId: "",
      isChecked: "true",
      quantity: "",
      productTotalPrice: [],
      allProductPrice: [],
      onlyDelivery: [],
      removedData: [],
    };
  }

  componentDidMount() {
    fetch(`${SERVER}/orders/products`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          mockData: data,
        });
      });
  }

  handlePriceChangeByComboBox = async (e) => {
    const idValue = e.target.id;
    const quantityValue = e.target.value;

    await fetch(`${SERVER}/orders/products`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        id: idValue,
        quantity: quantityValue,
      }),
    });

    await fetch(`${SERVER}/orders/products`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          mockData: data,
        });
      });
  };

  handleChangeCalculator = (e) => {
    const total = this.state.mockData.results.map((data) => {
      return data.product_price * data.quantity + data.product_delivery_fee;
    });

    const withoutDelivery = this.state.mockData.results.map((data) => {
      return data.product_price * data.quantity;
    });

    const onlyDelivery = this.state.mockData.results.map((data) => {
      console.log(data.id);
      return data.product_delivery_fee;
    });

    this.setState({
      isChecked: !this.state.isChecked,
      productTotalPrice: total
        .reduce((a, b) => a + b)
        .toLocaleString("ko-KR", {
          style: "currency",
          currency: "KRW",
        }),
      allProductPrice: withoutDelivery
        .reduce((a, b) => a + b)
        .toLocaleString("ko-KR", {
          style: "currency",
          currency: "KRW",
        }),
      onlyDelivery: onlyDelivery
        .reduce((a, b) => a + b)
        .toLocaleString("ko-KR", {
          style: "currency",
          currency: "KRW",
        }),
    });
  };

  // handleRemoveChart = (e) => {
  //   //데이터의 리저트의 키와 인덱스 값을 접근하여 목데이터 삭제
  //   // console.log(this.state.mockData.results);
  //   let value = this.state.mockData.results.map((data, index) => {
  //     return index;
  //   });
  //   // console.log(e.target.classList[10.58.1.231  //   value = Number(e.target.classList[10.58.1.231  //   this.setState = {
  //     removedData: this.state.mockData.results.filter((idx) => idx !== value),
  //   };
  //   console.log(this.state.mockData);
  // };

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
            productTotalPrice={this.state.productTotalPrice}
            isChecked={this.state.isChecked}
            handleAddMoneyOnCalculator={this.handleAddMoneyOnCalculator}
            allProductPrice={this.state.allProductPrice}
            onlyDelivery={this.state.onlyDelivery}
            handleRemoveChart={this.handleRemoveChart}
          />
        )}
      </div>
    );
  }
}

export default Cart;
let token = localStorage.getItem("token");
