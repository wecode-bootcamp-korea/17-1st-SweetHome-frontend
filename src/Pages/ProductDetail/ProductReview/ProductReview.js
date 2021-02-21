/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import CardList from "./CardList";
import "./ProductReview.scss";

class ProductReview extends Component {
  constructor() {
    super();
    this.state = {
      reviewData: [],
    };
  }

  componentDidMount() {
    fetch("/data/ReviewData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviewData: data,
        });
      });
  }

  render() {
    const { reviewData } = this.state;
    const { reviews } = reviewData;
    console.log({ reviews });
    return (
      <div className="ProductReview">
        <section>
          <header>
            <h1>
              리뷰<span>count</span>
            </h1>
            <button type="button">리뷰쓰기</button>
          </header>
          <div className="reviewAverage">
            <div className="starScore">
              <span>별그래프</span>
              <h1>4.5</h1>
            </div>
            <div className="scoreGraph">
              <ul>
                <li>
                  <span>5점</span>
                  <span>-</span>
                  <span>500</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="reviewFilter">
            <div className="filterByDate">
              <button>베스트순</button>
              <button>최신순</button>
              <button>사진리뷰</button>
            </div>
            <div>드롭다운필터</div>
          </div>
          <div className="reviewComponent">
            <CardList />
          </div>
        </section>
      </div>
    );
  }
}

export default ProductReview;
