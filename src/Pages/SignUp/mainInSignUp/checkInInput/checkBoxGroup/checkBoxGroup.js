import React, { Component } from "react";
import CheckBox from "./checkBox/checkBox";
import "./checkBoxGroup.scss";

class CheckBouxGruop extends Component {
  render() {
    const { isChecked } = this.props;
    return (
      <div className="checkBoxGroup">
        {this.props.checkBoxData.map((data, index) => {
          return (
            <CheckBox
              key={index}
              id={data.id}
              type={data.type}
              content={data.content}
              isNeed={data.isNeed}
              need={data.need}
              isChecked={isChecked}
            />
          );
        })}
      </div>
    );
  }
}

export default CheckBouxGruop;
