/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import Card from "./Card";
import "./CardList.scss";

class CommunityMain extends Component {
  render() {
    const { cards } = this.props;
    return (
      <div className="CardList">
        {cards?.map(card => {
          return (
            <Card
              key={card.id}
              cardUserName={card.card_user_name}
              cardUserIntro={card.card_user_introduction}
              cardUserImage={card.card_user_image}
              cardImage={card.card_image}
              cardContent={card.card_content}
              commentUserImage={card.comment_user_image}
              commentUserName={card.comment_user_name}
              commentContent={card.comment_content}
            />
          );
        })}
      </div>
    );
  }
}

export default CommunityMain;
