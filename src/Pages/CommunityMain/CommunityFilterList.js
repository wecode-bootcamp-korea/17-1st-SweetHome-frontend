/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import DropDown from "../../Images/minjoo/dropdown.svg";
import CommunityFilterDropdown from "./CommunityFilterDropdown";
import "./CommunityFilterList.scss";

class CommunityFilterList extends Component {
  constructor() {
    super();
    this.state = {
      isDropdownView: false,
      buttonIndex: 0,
    };
  }

  handleDropdown = id => {
    this.setState({
      isDropdownView: !this.state.isDropdownView,
      buttonIndex: id,
    });
  };

  render() {
    const { isDropdownView, buttonIndex } = this.state;
    const { filterMenuData } = this.props;
    const { categories } = filterMenuData;

    return (
      <div className="CommunityFilterList">
        {categories?.categories.map((category, idx) => {
          return (
            <div className="filter_bar">
              <button onClick={() => this.handleDropdown(idx)}>
                <span>{category.categoryName}</span>
                <img src={DropDown} alt="dropdown-icon" />
              </button>
              {isDropdownView && buttonIndex === idx && (
                <CommunityFilterDropdown
                  categorylist={categories.categories[idx].category}
                  categoryIdx={categories.categories[idx]}
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
