import React, { Component } from "react";
import "./Category.scss";

class Category extends Component {
  render() {
    const { content1, content2, content3, content4, content5 } = this.props;
    return (
      <div className="category">
        <span>{content1}</span>
        <span>{content2}</span>
        <span>{content3}</span>
        <span>{content4}</span>
        <span>{content5}</span>
      </div>
    );
  }
}

export default Category;
