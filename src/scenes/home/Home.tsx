import React, { Component } from "react";

import "./Home.scss";

import ColorPalette from "../../components/ColorPalette/ColorPalette";
import FontBook from "../../components/FontBook/FontBook";

class Home extends Component {
  public render() {
    return (
      <div className="home">
        <ColorPalette />

        <FontBook />
      </div>
    );
  }
}

export default Home;
