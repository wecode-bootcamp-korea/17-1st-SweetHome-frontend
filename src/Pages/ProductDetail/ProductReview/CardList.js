/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Card from "./Card.js";

class CardList extends Component {
  state = {
    ReviewData: [],
  };

  // downloadReview = () => {
  //   // fetch(`http://10.58.2.21:8000/products${this.props.location.search}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         ReviewData: data,
  //       });
  //     });
  // };

  componentDidMount() {
    this.downloadReview();
  }

  render() {
    const { ReviewData } = this.state;
    const { results } = ReviewData;
    console.log(results);
    return (
      <div>
        {results?.map(card => {
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
