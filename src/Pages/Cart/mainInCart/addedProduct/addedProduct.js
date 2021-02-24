import React, { Component } from "react";
import ProductInform from "./productInform/productInform";
import "./addedProduct.scss";

class AddedProduct extends Component {
  render() {
    return (
      <section className="addedProduct">
        <div className="allCheckContainer">
          <div className="onlyCheckBox">
            <input
              onChange={(e) => this.props.handleChangeCalculator(e)}
              type="checkbox"
            ></input>
            <span>모두선택</span>
          </div>
          <span>선택삭제</span>
        </div>

        {this.props.mockData.results.map((product) => {
          return (
            <ProductInform
              key={product.product_option_id}
              productOption={product.product_option_id}
              productName={product.product_name}
              productColor={product.product_color}
              productSize={product.product_size}
              comboboxquantity={product.quantity}
              productPrice={product.product_price}
              productCompany={product.product_company}
              productDelivery={product.product_delivery_type}
              productDeliveryFee={product.product_delivery_fee}
              productImage={product.product_image}
              handlePriceChangeByComboBox={
                this.props.handlePriceChangeByComboBox
              }
              quentityValue={this.props.quentityValue}
              handleIdChangeByComboBox={this.props.handleIdChangeByComboBox}
            />
          );
        })}
      </section>
    );
  }
}

export default AddedProduct;
