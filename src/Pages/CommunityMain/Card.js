import React, { Component } from "react";
import Heart from "../../Images/minjoo/heart.svg";
import Chat from "../../Images/minjoo/chat.svg";
import Bookmark from "../../Images/minjoo/bookmark.svg";
import "./Card.scss";

class Card extends Component {
  render() {
    const { username } = this.props;
    const cardUserStyle = {
      width: "36px",
      borderRadius: "20px",
    };
    const cardImageStyle = {
      width: "100%",
      borderRadius: "6px",
    };

    return (
      <div className="cardContainer">
        <div className="userContainer">
          <img
            style={cardUserStyle}
            src="https://www.solidbackgrounds.com/images/2048x2048/2048x2048-celeste-solid-color-background.jpg"
            alt="card-item-writer"
          />
          <div className="userNameZone">
            <button className="user">{username}</button>
            <button className="follow">팔로우</button>
            <p>아늑한 공간</p>
          </div>
        </div>
        <img
          style={cardImageStyle}
          src="https://i.pinimg.com/564x/7c/4e/73/7c4e73034e828190038fa8352bb815d6.jpg"
          alt="cardImage"
        />
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
      </div>
    );
  }
}

export default Card;
