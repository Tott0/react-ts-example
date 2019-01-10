import React, { Component } from "react";

import "./FlexCol.scss";

class FlexCol extends Component {
  public render() {
    return (
      <div className="flex-col">
        {this.props.children}
      </div>
    );
  }
}

export default FlexCol;
