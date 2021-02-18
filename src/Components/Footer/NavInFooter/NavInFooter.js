import React, { Component } from "react";
import ContentInNav from "./ContentInNav/ContentInNav";
import "./NavInFooter.scss";

class NavInFooter extends Component {
  render() {
    return (
      <div className="navInFooter">
        {this.props.informBrand.map((inform, index) => {
          return <ContentInNav key={index} inform={inform} />;
        })}
      </div>
    );
  }
}

export default NavInFooter;
