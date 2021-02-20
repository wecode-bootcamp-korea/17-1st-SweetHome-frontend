import React, { Component } from "react";
import CheckBoxGroup from "./checkBoxGroup/checkBoxGroup";
import CHECKBOXDATA from "./checkBoxData";
import "./checkInInput.scss";

class CheckInInput extends Component {
  constructor() {
    super();
    this.state = { checkBoxData: CHECKBOXDATA };
  }

  render() {
    return (
      <div className="checkInInput">
        <h1>약관동의</h1>
        <p className="containerForCheck">
          <div className="전체동의">
            <input
              onClick={this.props.handleClickCheckBox}
              type="checkbox"
            ></input>
            <span>전체동의</span>
          </div>

          <CheckBoxGroup
            checkBoxData={this.state.checkBoxData}
            isChecked={this.props.isChecked}
          />
        </p>
      </div>
    );
  }
}

export default CheckInInput;
