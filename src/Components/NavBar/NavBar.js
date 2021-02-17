import React, { Component } from "react";
import CategoryInNav from "./CategoryInNav/CategoryInNav";
import "./NavBar.scss";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: [
        {
          id: "categoryInCommunity",
          content1: "홈",
          content2: "사진",
          content3: "노하우",
          content4: "셀프가이드",
          content5: "질문과답변",
        },
        {
          id: "categoryInStore",
          content1: "스토어홈",
          content2: "카테고리",
          content3: "베스트",
          content4: "오늘의딜",
          content5: "리퍼마켓",
        },
      ],
    };
  }
  render() {
    return (
      <nav className="navBar">
        <div className="navBarForFixed">
          <div className="topOfNav">
            <div className="sweetHomeInNav">스위트홈</div>
            <div className="centerInNav">
              <span>커뮤니티</span>
              <span>스토어</span>
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
                <i class="far fa-bookmark"></i>
                <i class="far fa-bell"></i>
                <i class="fas fa-cart-plus"></i>
                <i class="far fa-user-circle"></i>
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
