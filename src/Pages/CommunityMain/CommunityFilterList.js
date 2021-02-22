/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import DropDown from "../../Images/minjoo/dropdown.svg";
import CommunityFilterDropdown from "./CommunityFilterDropdown";
import "./CommunityFilterList.scss";

class CommunityFilterList extends Component {
  constructor() {
    super();
    this.state = {
      filterMenuData: [],
      isDropdownView: false,
      buttonIndex: 0,
    };
  }

  componentDidMount() {
    fetch("/data/CommunityFilterData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          filterMenuData: data,
        });
      });
  }

  handleDropdown = id => {
    this.setState({
      isDropdownView: !this.state.isDropdownView,
      buttonIndex: id,
    });
  };

  render() {
    const { filterMenuData, isDropdownView, buttonIndex } = this.state;
    const { categories } = filterMenuData;
    //filterMenuData: data로 셋팅 => filterMenuData.categories로 맵을 돌릴 array에 접근.

    return (
      <div className="CommunityFilterList">
        {categories?.map((category, idx) => {
          // ? : 옵셔널 체이닝. 데이터가 받아지기전에 map을 실행해버리는데, '데이터가 들어오면 실행'하도록 바꿔줌.
          return (
            <div className="filter_bar">
              <button
                onClick={
                  () => this.handleDropdown(idx)
                  //click 일어난 버튼의 idx를 handleDropdown에 전달
                }
              >
                <span>{category.categoryName}</span>
                <img src={DropDown} alt="dropdown-icon" />
              </button>
              {isDropdownView && buttonIndex === idx && (
                //buttonIndex의 id값이 idx값과 같을때
                <CommunityFilterDropdown
                  categorylist={
                    categories[idx].category
                    //idx값에 해당하는 자식컴포넌트 호출.
                  }
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CommunityFilterList;
