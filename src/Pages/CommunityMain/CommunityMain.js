import React, { Component } from "react";
import "./CommunityMain.scss";
import CardList from "./CardList";

class CommunityMain extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          id: 1,
          username: "Rain of Grace",
        },
        {
          id: 2,
          username: "오늘의 집",
        },
        {
          id: 3,
          username: "wecode",
        },
      ],
    };
  }
  render() {
    // const { cards } = this.state;
    return (
      <div>
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default CommunityMain;
