import React, { Component } from "react";
import Category from "../Category/Category";
import "./CategoryInNav.scss";

class CategoryInNav extends Component {
  render() {
    return (
      <div className="categoryInNav">
        <div className="divForBorder">
          {this.props.categoryData.map((category, index) => {
            return <Category key={index} subMenu={category} />;
          })}
        </div>
      </div>
    );
  }
}

export default CategoryInNav;
