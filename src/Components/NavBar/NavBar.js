import React, { Component } from "react";
import CategoryInNav from "./CategoryInNav/CategoryInNav";
import CategoryData from "./navCategories";
import "./NavBar.scss";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: [],
    };
  }

  componentDidMount() {
    this.setState({ categoryData: CategoryData.categoryInCommunity });
  }

  handleSelectedCategory = (e) => {
    if (e.target.innerText === "스토어") {
      this.setState({
        categoryData: CategoryData.categoryInStore,
      });
    } else if (e.target.innerText === "커뮤니티") {
      this.setState({
        categoryData: CategoryData.categoryInCommunity,
      });
    }
  };

  render() {
    return (
      <nav className="navBar">
        <div className="navBarForFixed">
          <div className="topOfNav">
            <div className="sweetHomeInNav">스위트홈</div>
            <div className="centerInNav">
              <span onMouseOver={(e) => this.handleSelectedCategory(e)}>
                커뮤니티
              </span>
              <span onMouseOver={(e) => this.handleSelectedCategory(e)}>
                스토어
              </span>
            </div>
            <div className="rightSideOfNav">
              <div className="searchBox">
                <input
                  type="text"
                  placeholder="        스위트홈 통합검색"
                ></input>
                <i class="fas fa-search"></i>
              </div>
              <div className="icons">
                <span>
                  <i class="far fa-bookmark"></i>
                </span>
                <span>
                  <i class="far fa-bell"></i>
                </span>
                <span>
                  <i class="fas fa-cart-plus"></i>
                </span>
                <span>
                  <i class="far fa-user-circle"></i>
                </span>
              </div>
              <button className="writeButton">
                글쓰기<i class="far fa-hand-point-down"></i>
              </button>
            </div>
          </div>
        </div>
        <CategoryInNav
          className="categoryInNav"
          categoryData={this.state.categoryData}
        />
      </nav>
    );
  }
}

export default NavBar;
