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
          userImg:
            "https://www.solidbackgrounds.com/images/2048x2048/2048x2048-celeste-solid-color-background.jpg",
          cardImg:
            "https://i.pinimg.com/originals/ec/c5/d0/ecc5d06cc5df850302f496a34e8b5f88.jpg",
        },
        {
          id: 2,
          username: "스위트홈",
          userImg:
            "https://www.solidbackgrounds.com/images/2048x2048/2048x2048-celeste-solid-color-background.jpg",
          cardImg:
            "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/161336955205573354.jpg?gif=1&w=1536&webp=1",
        },
        {
          id: 3,
          username: "wecode",
          userImg:
            "https://static.bhphoto.com/images/images500x500/1391171441_1026417.jpg",
          cardImg:
            "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/161336849062807698.jpg?gif=1&w=1536&webp=1",
        },
        {
          id: 4,
          username: "죠르디",
          userImg:
            "https://static.bhphoto.com/images/images500x500/1391171441_1026417.jpg",
          cardImg:
            "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/156275538137632047.jpg?gif=1&w=1536&webp=1",
        },
        {
          id: 5,
          username: "canonmj",
          userImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9LFOkJifadhOYKH3mKQ8HfUKm7iwDjGnM1Q&usqp=CAU",
          cardImg:
            "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/1547704779760_E.jpg?gif=1&w=1536&webp=1",
        },
        {
          id: 6,
          username: "tamssa",
          userImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9LFOkJifadhOYKH3mKQ8HfUKm7iwDjGnM1Q&usqp=CAU",
          cardImg:
            "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/1598143154_bE.jpeg?gif=1&w=1536&webp=1",
        },
      ],
    };
  }
  render() {
    const { cards } = this.state;
    return (
      <div className="CommunityMain">
        <CardList cards={cards} />
      </div>
    );
  }
}

export default CommunityMain;
