/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { SERVER } from "../../../config";
import Card from "./Card.js";

class CardList extends Component {
  state = {
    ReviewData: [],
  };

  downloadReview = () => {
    fetch(`${SERVER}/products/${this.props.root}/review`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          ReviewData: data,
        });
      });
  };

  // onReviewOrderdRequest = (e) => {
  //   const target = e.target.value;
  //   fetch(`${SERVER}/products?order=${target}`, {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({
  //         reviewData: data,
  //       });
  //     });
  // };

  componentDidMount() {
    this.downloadReview();
  }

  render() {
    console.log(this.state.ReviewData);

    const { ReviewData } = this.state;
    const { results } = ReviewData;
    return (
      <div>
        {results?.map((card) => {
          return (
            <Card
              key={card.review_id}
              review_user_profile={card.review_user_profile}
              review_content={card.review_content}
              review_image={card.review_image}
              review_rate={card.review_rate}
              product_name={card.product_name}
              // created_at={card.created_at}
              day={card.day}
              review_user_name={card.review_user_name}
              review_like={card.review_like}
            />
          );
        })}
      </div>
    );
  }
}

export default withRouter(CardList);
