import React, { Component } from "react";
import Heart from "../../Images/minjoo/heart.svg";
import Chat from "../../Images/minjoo/chat.svg";
import Bookmark from "../../Images/minjoo/bookmark.svg";
import "./Card.scss";

class Card extends Component {
  render() {
    const {
      cardUserName,
      cardUserImage,
      cardImage,
      cardUserIntro,
      cardContent,
      commentUserImage,
      commentUserName,
      commentContent,
    } = this.props;

    return (
      <div className="cardContainer">
        <div className="userContainer">
          <img
            className="cardItemWriter"
            src={cardUserImage}
            alt="card-item-writer"
          />
          <div className="userNameZone">
            <button className="user">{cardUserName}</button>
            <button className="follow">팔로우</button>
            <p>{cardUserIntro}</p>
          </div>
        </div>
        <img className="cardImage" src={cardImage} alt="cardImage" />
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
        <span className="usercontents">{cardContent}</span>
        <div className="cardComment">
          <button className="cardComment">
            <img src={commentUserImage} alt="" />
            <span className="userName">{commentUserName}</span>
            <span>{commentContent}</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
