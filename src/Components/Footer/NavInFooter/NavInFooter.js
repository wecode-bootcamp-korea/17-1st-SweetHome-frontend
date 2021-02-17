import React, { Component } from "react";
import ContentInNav from "./ContentInNav/ContentInNav";
import "./NavInFooter.scss";

class NavInFooter extends Component {
  render() {
    return (
      <div className="navInFooter">
        {this.props.navInFooter.map((content) => {
          return (
            <ContentInNav
              key={content.id}
              content1={content.content1}
              content2={content.content2}
              content3={content.content3}
              content4={content.content4}
              content5={content.content5}
              content6={content.content6}
              content7={content.content7}
              content8={content.content8}
              content9={content.content9}
              content10={content.content10}
              content11={content.content11}
              content12={content.content12}
            />
          );
        })}
      </div>
    );
  }
}

export default NavInFooter;
