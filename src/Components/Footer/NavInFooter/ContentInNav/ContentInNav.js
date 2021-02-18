import React, { Component } from "react";
import "./ContentInNav.scss";

class ContentInNav extends Component {
  render() {
    return (
      <div className="contentInNav">
        <a href="www.wecode.co.kr">{this.props.inform}</a>
      </div>
    );
  }
}

export default ContentInNav;
