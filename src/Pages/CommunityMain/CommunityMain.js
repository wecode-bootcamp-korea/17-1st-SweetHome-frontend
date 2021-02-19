/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./CommunityMain.scss";
import CardList from "./CardList";
import CommunityFilterList from "./CommunityFilterList";

class CommunityMain extends Component {
  constructor() {
    super();
    this.state = {
      CommunityFilter: "FilterDropdown",
      cards: [
        {
          id: 1,
          username: "Rain of Grace",
          userImg:
            "https://www.solidbackgrounds.com/images/2048x2048/2048x2048-celeste-solid-color-background.jpg",
          cardImg:
            "https://i.pinimg.com/originals/ec/c5/d0/ecc5d06cc5df850302f496a34e8b5f88.jpg",
          userInfo: "아늑한 공간 :)",
          contents: "좋아하는 물건들로 선반을 새로 꾸며봤어요",
        },
        {
          id: 2,
          username: "스위트홈",
          userImg:
            "https://www.solidbackgrounds.com/images/2048x2048/2048x2048-celeste-solid-color-background.jpg",
          cardImg:
            "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/161336955205573354.jpg?gif=1&w=1536&webp=1",
          userInfo: "@insta. sweethome",
          contents:
            "집순이는 술도 집에서😌 요즘 집밖에 나가지도 못하고 원래 평소에도 술을 좋아해서 집에서 한잔씩 하는날이 많아지더라구요",
        },
        {
          id: 3,
          username: "wecode",
          userImg:
            "https://static.bhphoto.com/images/images500x500/1391171441_1026417.jpg",
          cardImg:
            "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/161336849062807698.jpg?gif=1&w=1536&webp=1",
          userInfo: "",
          contents:
            "혼자만의 시간, 너무 좋아해요 집안에 조명, 캔들 죄다켜놓고 한잔하면 하루의 스트레스가 싹!",
        },
        {
          id: 4,
          username: "죠르디",
          userImg:
            "https://static.bhphoto.com/images/images500x500/1391171441_1026417.jpg",
          cardImg:
            "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/156275538137632047.jpg?gif=1&w=1536&webp=1",
          userInfo: "아늑한 공간 :)",
          contents: "",
        },
        {
          id: 5,
          username: "canonmj",
          userImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9LFOkJifadhOYKH3mKQ8HfUKm7iwDjGnM1Q&usqp=CAU",
          cardImg:
            "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/1547704779760_E.jpg?gif=1&w=1536&webp=1",
          userInfo: "@insta. sweethome",
          contents:
            "집순이는 술도 집에서😌 요즘 집밖에 나가지도 못하고 원래 평소에도 술을 좋아해서 집에서 한잔씩 하는날이 많아지더라구요",
        },
        {
          id: 6,
          username: "tamssa",
          userImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9LFOkJifadhOYKH3mKQ8HfUKm7iwDjGnM1Q&usqp=CAU",
          cardImg:
            "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/1598143154_bE.jpeg?gif=1&w=1536&webp=1",
          userInfo: "",
          contents:
            "혼자만의 시간, 너무 좋아해요 집안에 조명, 캔들 죄다켜놓고 한잔하면 하루의 스트레스가 싹!",
        },
      ],

      lists: [],
    };
  }

  render() {
    // console.log(this.state.CommunityFilter);
    const { cards, lists } = this.state;
    return (
      <div className="CommunityMain">
        <CommunityFilterList lists={lists} />
        <CardList cards={cards} />
      </div>
    );
  }
}

export default CommunityMain;
