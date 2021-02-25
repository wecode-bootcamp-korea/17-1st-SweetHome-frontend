import React, { Component } from "react";
import "./Card.scss";
import StarReadOnly from "./StarReadOnly";
// import ReviewModal from "./ReviewModal";

class Card extends Component {
  render() {
    const {
      review_id,
      review_content,
      review_image,
      review_rate,
      product_name,
      review_user_profile,
      day,
      review_user_name,
      review_like,
    } = this.props;
    return (
      <div className="CardList">
        <div className="reviewUser">
          <div className="imgBox">
            <img
              src={review_user_profile}
              alt="user_p
            rofile"
            />
          </div>
          <div className="reviewUserInfo">
            <span className="userId">{review_user_name}</span>
            <div className="userScoreBig">
              <span>
                <StarReadOnly rate={review_rate} size={14} />
              </span>
              <span>{day}</span>
              <span>구매경로</span>
            </div>
          </div>
        </div>
        <div className="reviewUserScore">
          <ul>
            <li>
              내구성
              <span>
                <StarReadOnly rate={3} size={12} />
              </span>
            </li>
            <li>
              가격
              <span>
                <StarReadOnly rate={3.5} size={12} />
              </span>
            </li>
          </ul>
          <ul>
            <li>
              디자인
              <span>
                <StarReadOnly rate={4.5} size={12} />
              </span>
            </li>
            <li>
              배송
              <span>
                <StarReadOnly rate={5} size={12} />
              </span>
            </li>
          </ul>
        </div>
        <div className="reviewProductName">
          <span>선택: {product_name}</span>
        </div>
        <div className="imgBox">
          <img className="reviewImage" src={review_image} alt="review-image" />
        </div>
        <div className="reviewContent">
          <span>{review_content}</span>
        </div>
        <div className="reviewHelped">
          <button calssName="helpful">도움이 돼요</button>
          <span>
            <span className="helpfulNumber">{review_like}</span>명에게 도움이
            되었습니다.
          </span>
        </div>
      </div>
    );
  }
}

export default Card;
