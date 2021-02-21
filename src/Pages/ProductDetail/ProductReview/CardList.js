import React, { Component } from "react";
import "./CardList.scss";

class CardList extends Component {
  render() {
    return (
      <div className="CardList">
        <div className="reviewUser">
          <div className="imgBox">
            <img
              src="https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2D9/image/MN3lKYkIUKB-Frgm-mv7aOSOuN4"
              alt="user_p
            rofile"
            />
          </div>
          <div className="reviewUserInfo">
            <span className="userId">파트너 공식리뷰</span>
            <div className="userScoreBig">★★★★★</div>
            <span>2020.01.01</span>
            <span>구매경로</span>
          </div>
        </div>
        <div className="reviewUserScore">
          <ul>
            <li>내구성</li>
            <li>가격</li>
          </ul>
          <ul>
            <li>디자인</li>
            <li>배송</li>
          </ul>
        </div>
        <div className="reviewProductName">
          <span>선택: 0.8 LED 3단 서랍수납형 독립스프링</span>
        </div>
        <div className="imgBox">
          <img
            className="reviewImage"
            src="https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2D9/image/MN3lKYkIUKB-Frgm-mv7aOSOuN4"
            alt="review-image"
          />
        </div>
        <div className="reviewContent">
          <span>
            별점 많이줘야 보인다죠? 일단 걍 최고에요 살까말까 리뷰보고 있는 분들
            무조건 침대시키세요. 별점 많이줘야 보인다죠? 일단 걍 최고에요
            살까말까 리뷰보고 있는 분들 무조건 침대시키세요.별점 많이줘야
            보인다죠? 일단 걍 최고에요 살까말까 리뷰보고 있는 분들 무조건
            침대시키세요.
          </span>
        </div>
        <div className="reviewHelped">
          <button calssName="helpful">도움이 돼요</button>
          <span>
            <span className="helpfulNumber">00</span>명에게 도움이 되었습니다.
          </span>
        </div>
      </div>
    );
  }
}

export default CardList;
