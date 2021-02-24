/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CardList from "./CardList";
import CommunityFilterList from "./CommunityFilterList";

class CommunityMain extends Component {
  constructor() {
    super();
    this.state = {
      CommunityFilter: "FilterDropdown",
      cardsData: [],
      filterMenuData: [],
    };
  }

  testingCard = () => {
    fetch(`http://10.58.2.21:8000/posting${this.props.location.search}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          cardsData: data,
        });
      });
  };

  testingFilter = () => {
    fetch("http://10.58.2.21:8000/posting/category")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          filterMenuData: data,
        });
      });
  };

  componentDidMount() {
    this.testingFilter();
    this.testingCard();
  }

  componentDidUpdate(prev) {
    console.log(prev.location.search);
    if (prev.location.search !== this.props.location.search) {
      this.testingCard();
    }
  }
  // componentDidUpdate() {
  //   fetch(``)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         filterMenuData: data,
  //       });
  //     });
  // }

  render() {
    const { cardsData, filterMenuData } = this.state;

    return (
      <div className="CommunityMain">
        <CommunityFilterList filterMenuData={filterMenuData} />
        <CardList cards={cardsData.message} />
      </div>
    );
  }
}

export default withRouter(CommunityMain);
