import React, { Component } from "react";

import "./FlexRow.scss";

class FlexRow extends Component {
  public render() {
    return (
      <div className="flex-row">
        {this.props.children}
      </div>
    );
  }
}

export default FlexRow;
