import React, { Component } from "react";
import mockdata from "./mockdata";
import categoryFilter from "./categoryFilter/categoryFilter";
import "./ProductList.scss";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      showDropMenu: false,
      filteredList: [],
      target: "",
    };
  }

  activeDropMenu = (e) => {
    this.setState(
      {
        target: e.target.innerText,
      },
      () => this.dropMenuValueChange()
    );
  };

  dropMenuValueChange = () => {
    const { target, showDropMenu } = this.state;
    this.setState({
      filteredList: mockdata[target],
      showDropMenu: showDropMenu ? false : true,
    });
  };

  render() {
    const { productList } = this.props;
    const { filteredList } = this.state;
    return (
      <div className="itemList">
        <div className="categoryFilter">
          <div className="filterBar">
            <button onClick={this.onDataRequest}>인기 BEST</button>
            <button onClick={(e) => this.activeDropMenu(e)}>사용인원</button>
            <button onClick={(e) => this.activeDropMenu(e)}>사이즈</button>
            <button onClick={(e) => this.activeDropMenu(e)}>색상</button>
            <button onClick={(e) => this.activeDropMenu(e)}>형태</button>
          </div>
          {this.state.showDropMenu ? (
            <div className="filterPanel">
              {filteredList &&
                filteredList.map((list, index) => {
                  return (
                    <div key={index} className="filterItem">
                      <div className="filterSelector">
                        <button>
                          <div className="filterSelectorItem">
                            <input type="checkbox"></input>
                            <span className="selectorItemName">{list}</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : null}
          <div className="itemFilterd">
            <span>전체 100,000개</span>
            <button className="orderFilter">
              인기순 <span>▼</span>
            </button>
          </div>
        </div>
        <ul>
          {productList.message &&
            productList.message.map((product) => {
              return (
                <div className="item" key={product.id}>
                  <div className="itemImg">
                    <img alt="상품" src={product.image} />
                  </div>
                  <div className="itemContent">
                    <h1 className="itemName">{product.name}</h1>
                    <div className="priceInfo">
                      <span className="discount">
                        {product.discount_percentage}
                        <span>%</span>
                      </span>
                      <span className="price">{product.discount_price}</span>
                    </div>
                    <div className="itemEvaluation">
                      <span className="avg">
                        <span>★</span>
                        {product.rate_average}
                      </span>
                      <div className="review">
                        <span>리뷰</span>
                        {product.review_count}
                      </div>
                    </div>
                    <div className="itemBadag">
                      {product.is_free_delivery && (
                        <div className="freeDelivery">무료배송</div>
                      )}
                      {product.is_on_sale && <div className="onSale">특가</div>}
                    </div>
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default ProductList;
