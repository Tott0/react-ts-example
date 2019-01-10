import React, { Component } from "react";

import "./Header.scss";

import FixedNavbar from "./fixed-navbar/FixedNavbar";
import TopNavbar from "./top-navbar/TopNavbar";

class Header extends Component {
  public render() {
    return (
      <header className="app-header">
        <TopNavbar />
        <FixedNavbar />
      </header>
    );
  }
}

export default Header;
