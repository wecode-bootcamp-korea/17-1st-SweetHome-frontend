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
      cardsData: [],
    };
  }

  // componentDidMount() {
  //   fetch("/data/CommunityCardData.json", {
  //     method: "GET",
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         cardsData: data,
  //       });
  //     });
  // }

  testingCard = () => {
    fetch("http://10.58.2.55:8000/posting", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          cardsData: data,
        });
      });
    // .then(data => console.log(data));
  };

  componentDidMount() {
    this.testingCard();
  }

  render() {
    const { cardsData } = this.state;
    return (
      <div className="CommunityMain">
        <CommunityFilterList />
        <CardList cards={cardsData.message} />
      </div>
    );
  }
}

export default CommunityMain;
