import React, { Component } from "react";

import "./TopNavbar.scss";

import { Nav, Navbar, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import FlexFiller from "../../shared/components/FlexFiller/FlexFiller";
import Container from "../../shared/components/Container/Container";

class TopNavbar extends Component {
  public render() {
    return (
      <Navbar bg="dark" variant="dark" className="top-navbar">
        <Container>
          <Navbar.Brand href="#home">BitcoinWorld</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <FlexFiller />
            <Nav className="auth-actions">
              <NavItem>
                <NavLink to="/login" className="btn-login">
                  <span className="icon">
                    <i className="fas fa-user" />
                  </span>
                  SIGN IN
                </NavLink>
              </NavItem>
              {/* <NavItem>
              <NavLink to="/signup">1
                <span className="icon">
                  <i className="fas fa-user-plus" />
                </span>
                REGISTER
              </NavLink>
            </NavItem> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default TopNavbar;
