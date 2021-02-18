import React, { Component } from "react";
import Heart from "../../Images/minjoo/heart.svg";
import Chat from "../../Images/minjoo/chat.svg";
import Bookmark from "../../Images/minjoo/bookmark.svg";
import "./Card.scss";

class Card extends Component {
  render() {
    const { username, userImg, cardImg, userInfo, contents } = this.props;

    return (
      <div className="cardContainer">
        <div className="userContainer">
          <img
            className="cardItemWriter"
            src={userImg}
            alt="card-item-writer"
          />
          <div className="userNameZone">
            <button className="user">{username}</button>
            <button className="follow">팔로우</button>
            <p>{userInfo}</p>
          </div>
        </div>
        <img className="cardImage" src={cardImg} alt="cardImage" />
        <ul className="cardIconBox">
          <li>
            <button type="button" className="cardIcons">
              <img src={Heart} alt="heart" />
            </button>
            <span>10</span>
          </li>
          <li>
            <button type="button" className="cardIcons">
              <img src={Bookmark} alt="heart" />
            </button>
            <span>10</span>
          </li>
          <li>
            <button type="button" className="cardIcons">
              <img src={Chat} alt="chat" />
            </button>
            <span>10</span>
          </li>
        </ul>
        <span className="usercontents">{contents}</span>
        {/* <div className="cardComment">
          <button>
            <img src="" alt="" />
          </button>
          <button>
            <span>댓글 내용</span>
          </button> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Card;
