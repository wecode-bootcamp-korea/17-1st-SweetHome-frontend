import React, { Component } from "react";
import DropDown from "../../Images/minjoo/dropdown.svg";
import CommunityFilterDropdown from "./CommunityFilterDropdown";

import "./CommunityFilter.scss";

class CommunityFilter extends Component {
  constructor() {
    super();

    this.state = {
      showDropdown: false,
    };
  }

  activateDropdown = () => {
    this.setState({
      showDropdown: this.state.showDropdown ? false : true,
    });
  };

  render() {
    const { menu } = this.props;
    return (
      <div className="CommunityFilter">
        <div className="filter_bar">
          <button
            onClick={this.activateDropdown}
            onClick={this.activateDropdown}
          >
            {menu}
            <img src={DropDown} alt="dropdown-icon" />
          </button>
        </div>

        {this.state.showDropdown ? <CommunityFilterDropdown /> : null}
      </div>
    );
  }
}

export default CommunityFilter;
