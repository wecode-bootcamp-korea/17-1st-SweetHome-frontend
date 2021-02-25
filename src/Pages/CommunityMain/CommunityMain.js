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

  fetchCard = () => {
    // fetch("http://10.153.7.50:8000/posting")
    fetch(
      `http://10.58.6.175:8000/posting${this.props.location.search}`
      // , {headers: {
      //     Authorization: localStorage.getItem("token"),
      //   },}
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          cardsData: data,
        });
      });
  };

  fetchFilter = () => {
    fetch("http://10.58.6.175:8000/posting/category")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          filterMenuData: data,
        });
      });
  };

  componentDidMount() {
    this.fetchFilter();
    this.fetchCard();
  }

  componentDidUpdate(prev) {
    console.log(prev.location.search);
    if (prev.location.search !== this.props.location.search) {
      this.fetchCard();
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
