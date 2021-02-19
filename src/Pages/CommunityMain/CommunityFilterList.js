/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import DropDown from "../../Images/minjoo/dropdown.svg";
import CommunityFilterDropdown from "./CommunityFilterDropdown";
import "./CommunityFilterList.scss";

class CommunityFilterList extends Component {
  constructor() {
    super();
    this.state = {
      filterMenu: [],
      isDropdownView: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/MockData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          filterMenu: Object.entries(data),
        });
      });
  }

  handleDropdown = () => {
    this.setState({
      isDropdownView: !this.state.isDropdownView,
    });
  };

  render() {
    console.log(this.state.filterMenu);

    return (
      <div className="CommunityFilterList">
        <div className="filter_bar">
          {this.state.filterMenu.map((list, index) => {
            return (
              <button
                key={index}
                onClick={
                  this.handleDropdown
                  // ? console.log("onclick")
                  // : console.log("nonclick")
                }
              >
                {list[0]}
                <img src={DropDown} alt="dropdown-icon" />
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CommunityFilterList;
