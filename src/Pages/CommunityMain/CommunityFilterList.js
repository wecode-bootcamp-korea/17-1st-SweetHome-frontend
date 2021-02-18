/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import CommunityFilter from "./CommunityFilter";
import "./CommunityFilterList.scss";

class CommunityFilterList extends Component {
  render() {
    return (
      <div className="CommunityFilterList">
        {this.props.lists.map(list => {
          return <CommunityFilter key={list.id} menu={list.menu} />;
        })}
      </div>
    );
  }
}

export default CommunityFilterList;
