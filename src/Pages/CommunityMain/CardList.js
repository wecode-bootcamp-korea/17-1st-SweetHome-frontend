/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import Card from "./Card";
import "./CardList.scss";

class CommunityMain extends Component {
  render() {
    return (
      <div className="CardList">
        {this.props.cards.map(card => {
          return (
            <Card
              key={card.id}
              username={card.username}
              userImg={card.userImg}
              cardImg={card.cardImg}
              userInfo={card.userInfo}
              contents={card.contents}
            />
          );
        })}
      </div>
    );
  }
}

export default CommunityMain;
