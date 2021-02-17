import React, { Component } from "react";
import "./ContentInNav.scss";

class ContentInNav extends Component {
  render() {
    const {
      content1,
      content2,
      content3,
      content4,
      content5,
      content6,
      content7,
      content8,
      content9,
      content10,
      content11,
      content12,
    } = this.props;
    return (
      <div className="contentInNav">
        <a href="wecode.com">{content1}</a>
        <a href="wecode.com">{content2}</a>
        <a href="wecode.com">{content3}</a>
        <a href="wecode.com">{content4}</a>
        <a className="개인정보" href="wecode.com">
          {content5}
        </a>
        <a href="wecode.com">{content6}</a>
        <a href="wecode.com">{content7}</a>
        <a href="wecode.com">{content8}</a>
        <a href="wecode.com">{content9}</a>
        <a href="wecode.com">{content10}</a>
        <a href="wecode.com">{content11}</a>
        <a href="wecode.com">{content12}</a>
      </div>
    );
  }
}

export default ContentInNav;
