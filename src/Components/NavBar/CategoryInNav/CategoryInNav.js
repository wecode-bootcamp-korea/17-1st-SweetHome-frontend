import React, { Component } from "react";
import Category from "../Category/Category";
import "./CategoryInNav.scss";

class CategoryInNav extends Component {
  render() {
    return (
      <div className="categoryInNav">
        {this.props.categoryData.map((category) => {
          return (
            <Category
              key={category.id}
              content1={category.content1}
              content2={category.content2}
              content3={category.content3}
              content4={category.content4}
              content5={category.content5}
            />
          );
        })}
      </div>
    );
  }
  className = "categoryInNav";
}

export default CategoryInNav;
