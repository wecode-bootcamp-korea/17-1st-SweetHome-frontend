import React, { Component } from "react";
import "./checkBox.scss";

class CheckBox extends Component {
  constructor() {
    super();
    this.state = { checked: false };
  }

  render() {
    const { id, type, content, isNeed, isChecked } = this.props;
    return (
      <div className="checkBox">
        <div className={id}>
          <input checked={!isChecked && true} type={type}></input>
          <span>{content}</span>
          <span className={isNeed}>(필수)</span>
        </div>
      </div>
    );
  }
}

export default CheckBox;
