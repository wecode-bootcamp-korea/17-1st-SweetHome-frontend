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
          <div className="imageBox">
            <img
              className="cardItemWriter"
              src={cardUserImage}
              alt="card-item-writer"
            />
          </div>
          <div className="userNameZone">
            <button className="user">{cardUserName}</button>
            <button className="follow">팔로우</button>
            <p>{cardUserIntro}</p>
          </div>
        </div>
        <div className="imgBox">
          <img className="cardImage" src={cardImage} alt="cardImage" />
        </div>
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
          <button className="commentImage">
            <img src={commentUserImage} alt="" />
          </button>
          <div className="commentWrite">
            <span className="userName">{commentUserName}</span>
            <span className="userWrite">{commentContent}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
