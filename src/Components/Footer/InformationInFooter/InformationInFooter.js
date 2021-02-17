import React, { Component } from "react";
import InformationData from "./InformationData/InformationData";
import "./InformationInFooter.scss";

class InformationInFooter extends Component {
  render() {
    return (
      <div className="informationInFooter">
        {this.props.informationInFooter.map((content) => {
          return (
            <InformationData
              key={content.id}
              content1={content.content1}
              content2={content.content2}
              content3={content.content3}
              content4={content.content4}
              content5={content.content5}
              content6={content.content6}
            />
          );
        })}
      </div>
    );
  }
}

export default InformationInFooter;
