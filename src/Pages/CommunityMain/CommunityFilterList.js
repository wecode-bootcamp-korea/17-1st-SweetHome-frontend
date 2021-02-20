/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import DropDown from "../../Images/minjoo/dropdown.svg";
import CommunityFilterDropdown from "./CommunityFilterDropdown";
import "./CommunityFilterList.scss";

class CommunityFilterList extends Component {
  constructor() {
    super();
    this.state = {
      filterMenuData: [],
      isDropdownView: false,
      buttonIndex: 0,
    };
  }

  componentDidMount() {
    fetch("/data/CommunityFilterData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          filterMenuData: data,
        });
      });
  }

  handleDropdown = id => {
    this.setState({
      isDropdownView: !this.state.isDropdownView,
      buttonIndex: id,
    });
  };

  render() {
    const { filterMenuData, isDropdownView, buttonIndex } = this.state;
    const { categories } = filterMenuData;

    return (
      <div className="CommunityFilterList">
        {categories?.map((category, idx) => {
          return (
            <div className="filter_bar">
              <button onClick={() => this.handleDropdown(idx)}>
                <span>{category.categoryName}</span>
                <img src={DropDown} alt="dropdown-icon" />
              </button>
              {isDropdownView && buttonIndex === idx && (
                <CommunityFilterDropdown
                  categorylist={categories[idx].category}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CommunityFilterList;
