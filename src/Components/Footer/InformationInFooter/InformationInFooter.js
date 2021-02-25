import React, { Component } from "react";
import InformationData from "./InformationData/InformationData";
import "./InformationInFooter.scss";

class InformationInFooter extends Component {
  render() {
    return (
      <div className="informationInFooter">
        {this.props.informCeo.map((inform, index) => {
          return <InformationData key={index} inform={inform} />;
        })}
      </div>
    );
  }
}

export default InformationInFooter;
