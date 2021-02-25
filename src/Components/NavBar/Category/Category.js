import React, { Component } from "react";
import "./Category.scss";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      isTrue: true,
    };
  }

  render() {
    const { subMenu } = this.props;
    return (
      <div className="category">
        <span>{subMenu}</span>
      </div>
    );
  }
}

export default Category;
