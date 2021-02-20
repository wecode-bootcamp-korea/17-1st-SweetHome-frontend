/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./CommunityFilterDropdown.scss";

class CommunityFilterDropdown extends Component {
  render() {
    const { categorylist } = this.props;
    return (
      <div className="CommunityFilterDropdown">
        {categorylist.map(list => {
          return (
            <ul className="dropdownlist">
              <li>
                <a href="#">{list}</a>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default CommunityFilterDropdown;
