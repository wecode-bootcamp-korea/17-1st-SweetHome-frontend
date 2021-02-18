import React, { Component } from "react";
import "./CommunityFilterDropdown.scss";

class CommunityFilterDropdown extends Component {
  render() {
    return (
      <div className="CommunityFilterDropdown">
        <ul className="dropdownlist">
          <li>
            <a href="#">최근 인기순</a>
          </li>
          <li>
            <a href="#">최신순</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CommunityFilterDropdown;
