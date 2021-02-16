/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import Card from "./Card";
import "./CardList.scss";

class CommunityMain extends Component {
  render() {
    return (
      <div>
        {this.props.cards.map(card => {
          return <Card key={card.id} username={card.username} />;
        })}
      </div>
    );
  }
}

export default CommunityMain;
