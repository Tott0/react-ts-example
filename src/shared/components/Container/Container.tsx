import React, { Component } from "react";

import "./Container.scss";

class Container extends Component {
  public render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default Container;
