import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getProductListData } from "../../../store/modules/productList";
import "./ProductList.scss";

const ProductList = () => {
  const { productList, loading } = useSelector((state) => state.productList);
  const [filteredList, setFilterdList] = useState("");
  const [isfitlerDropMenu, setIsfilterDropMenu] = useState(false);
  const [isorderDropMenu, setIsorderDropMenut] = useState(false);
  const [order, setOrder] = useState("최신순");
  const [btnIdx, setBtnIdx] = useState(0);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    dispatch(getProductListData(""));
    fetch("data/FilterBar.json")
      .then((res) => res.json())
      .then((data) => {
        setFilterdList(data);
      });
  }, []);

  const productOrderOnOff = () => {
    setIsorderDropMenut(!isorderDropMenu);
  };

  const filterDropMenuOnOff = (idx) => {
    setIsfilterDropMenu(!isfitlerDropMenu);
    setBtnIdx(idx);
  };

  const gotoDetail = (id) => {
    history.push(`/productDetail/${id}`);
  };

  const onDataFilterRequest = (e) => {
    const queryString = location.search;
    const stringValue = e.target.name;
    const searchParams = new URLSearchParams(queryString);
    const isString = searchParams.has(stringValue);
    let string = "";

    if (isString) {
      searchParams.delete(stringValue);
    }
    if (stringValue === "order") {
      searchParams.append(stringValue, e.target.value);
      string += searchParams.toString();
      setOrder(e.target.innerText);
    } else {
      searchParams.append(stringValue, Number(e.target.value) + 1);
      string += searchParams.toString();
    }

    history.push(`productmain?${string}`);
    dispatch(getProductListData(`?${string}`));
  };

  const onFilterReset = () => {
    history.push(`productmain`);
    dispatch(getProductListData(""));
  };

  return (
    <div className="itemList">
      <div className="categoryFilter">
        {filteredList.categories?.map((category, idx) => {
          return (
            <div className="filterBar">
              <button key={idx} value={idx}>
                <span onClick={() => filterDropMenuOnOff(idx)}>
                  {category.categoryName}
                </span>
                <span className="btnArrow">⋁</span>
                <div className="subfilterBar">
                  {isfitlerDropMenu && idx === btnIdx && (
                    <div className="subfilterList">
                      {category.category.map((subFilter, idx) => {
                        return (
                          <div key={idx}>
                            <button
                              className="subfilterName"
                              value={idx}
                              name={subFilter.name}
                              onClick={(e) => onDataFilterRequest(e)}
                            >
                              {subFilter.value}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </button>
            </div>
          );
        })}
        <button className="filterResetBtn" onClick={() => onFilterReset()}>
          ⟳ 필터초기화
        </button>
      </div>
      <div className="itemFilterd">
        <div className="itemCountedNum">
          <span>전체 {productList.count}개</span>
        </div>
        <div className="orderFilter">
          <button onClick={() => productOrderOnOff()}>
            {order}
            <div>▼</div>
          </button>
          <div>
            {isorderDropMenu && (
              <div className="orderPanel">
                {orderValue.map((order) => {
                  return (
                    <button
                      key={order.id}
                      value={order.value}
                      name={order.name}
                      onClick={(e) => onDataFilterRequest(e)}
                    >
                      {order.text}
                    </button>
                  );
                })}
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
                    <span className="price">
                      {(product.discount_price - "").toLocaleString()}
                    </span>
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
};

export default ProductList;

const orderValue = [
  { id: 1, text: "최신순", name: "order", value: "recent" },
  { id: 2, text: "오래된순", name: "order", value: "old" },
  { id: 3, text: "높은 가격순", name: "order", value: "max_price" },
  { id: 4, text: "낮은 가격순", name: "order", value: "min_price" },
  { id: 5, text: "리뷰순", name: "order", value: "review" },
];
