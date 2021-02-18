import React, { Component } from "react";
import "./InformationData.scss";

class InformationData extends Component {
  render() {
    return (
      <div className="informationData">
        <span>{this.props.inform}</span>
      </div>
    );
  }
}

export default InformationData;
