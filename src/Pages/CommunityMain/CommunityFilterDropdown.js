/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./CommunityFilterDropdown.scss";

class CommunityFilterDropdown extends Component {
  constructor() {
    super();
    this.state = {
      filterMenu: [],
      isDropdownView: true,
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

  render() {
    console.log(this.props.list);
    return (
      <div className="CommunityFilterDropdown">
        {/* {this.props.list.map((list, index) => {
          return <div key={index}>{list}</div>;
        })} */}
        {this.props.isDropdownView && <CommunityFilterDropdown />}
        <ul className="dropdownlist">
          <li>
            <a href="#">최근 인기순</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CommunityFilterDropdown;
