import React, { Component } from "react";

import "./FixedNavbar.scss";

import { Nav, Navbar, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class FixedNavbar extends Component {
  public render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">BitcoinWorld</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="auth-actions">
            <NavItem>
              <NavLink to="/login">
                <span className="icon">
                  <i className="fas fa-user" />
                </span>
                SIGN IN
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup">
                <span className="icon">
                  <i className="fas fa-user-plus" />
                </span>
                REGISTER
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default FixedNavbar;
