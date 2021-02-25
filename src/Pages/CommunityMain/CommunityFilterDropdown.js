/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CommunityFilterDropdown.scss";

class CommunityFilterDropdown extends Component {
  state = {
    filterOn: false,
    listName: "",
  };
  goToFilterUrl = (idx, list) => {
    const queryString = this.props.location.search;
    const searchParams = new URLSearchParams(queryString);
    const { categoryEName } = this.props.categoryIdx;

    const isIncludes = searchParams.has(categoryEName);

    if (isIncludes) {
      searchParams.delete(categoryEName);
    }
    if (categoryEName === "order") {
      searchParams.append(categoryEName, list.Ename);
    } else {
      searchParams.append(categoryEName, +idx + 1);
    }
    this.props.history.push({
      pathname: this.props.history.location.pathname,
      search: searchParams.toString(),
    });

    this.setState({
      filterOn: !this.state.filterOn,
      listName: list.name,
    });
  };

  render() {
    const { categorylist } = this.props;
    // console.log("history::", this.props.location.search);
    return (
      <div>
        <div className="CommunityFilterDropList">
          {categorylist.map((list, idx) => {
            return (
              <ul className="dropdownlist">
                <li onClick={() => this.goToFilterUrl(idx, list)}>
                  <a href="#">{list.name}</a>
                </li>
              </ul>
            );
          })}
        </div>
        {/* {this.state.filterOn && (
          <div className="filterSelected">{this.state.listName}</div>
        )} */}
      </div>
    );
  }
}

export default withRouter(CommunityFilterDropdown);
