import React, { Component } from "react";
import mockdata from "./mockdata";
import categoryFilter from "./categoryFilter/categoryFilter";
import "./ProductList.scss";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      showDropMenu: false,
      isOrderDropMenu: false,
      filteredList: [],
    };
  }

  activeCategoryDropMenu = (e) => {
    this.setState(
      {
        target: e.target.innerText,
      },
      () => this.CategorydropMenuValueChange()
    );
  };

  productOrderOnOff = () => {
    this.setState({
      isOrderDropMenu: !this.state.isOrderDropMenu,
    });
  };

  orderFilter = (e) => {
    const order = e.target.value;
    this.props.onDateOrderdRequest(order);
  };

  dropMenuValueChange = () => {
    const { target, showDropMenu } = this.state;
    this.setState({
      filteredList: mockdata[target],
      showDropMenu: showDropMenu ? false : true,
    });
  };

  componentDidMount() {
    fetch("data/FilterBar.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          filteredList: data,
        });
      });
  }

  render() {
    const { productList, gotoDetail } = this.props;
    const { filteredList, showDropMenu, isOrderDropMenu } = this.state;
    return (
      <div className="itemList">
        <div className="categoryFilter">
          {filteredList.categories?.map((category, idx) => {
            return (
              <div className="filterBar">
                <button key={idx}>
                  <span>{category.categoryName}</span>
                  <span className="btnArrow"> ▼ </span>
                </button>
              </div>
            );
          })}
        </div>
        <div className="itemFilterd">
          <span className="itemCountedNum">전체 100,000개</span>
          <div>
            <button
              className="orderFilter"
              onClick={(e) => this.productOrderOnOff(e)}
            >
              인기순
            </button>
            <div>
              {isOrderDropMenu && (
                <div className="orderPanel">
                  <button value="recent" onClick={(e) => this.orderFilter(e)}>
                    최신순
                  </button>
                  <button value="old" onClick={(e) => this.orderFilter(e)}>
                    오래된순
                  </button>
                  <button
                    value="max_price"
                    onClick={(e) => this.orderFilter(e)}
                  >
                    높은가격순
                  </button>
                  <button
                    value="min_price"
                    onClick={(e) => this.orderFilter(e)}
                  >
                    낮은가격순
                  </button>
                  <button value="review" onClick={(e) => this.orderFilter(e)}>
                    많은리뷰순
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <ul>
          {productList.products &&
            productList.products.map((product) => {
              return (
                <div className="item" key={product.id}>
                  <div className="itemImg">
                    <img
                      alt="상품"
                      src={product.image}
                      onClick={() => gotoDetail(product.id)}
                    />
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
