import React, { Component } from "react";

class categoryFilter extends Component {
  render() {
    return (
      <div>
        {this.props.fileterdList.map((filter, index) => {
          <div key={index}>{filter}</div>;
        })}
      </div>
    );
  }
}

export default categoryFilter;
