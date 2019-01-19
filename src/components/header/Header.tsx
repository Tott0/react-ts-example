import React, { Component } from "react";

import "./Header.scss";

import { Col, Container, Row } from "react-bootstrap";

class Header extends Component {
  public render() {
    return (
      <header className="appHeader">
        <Container>
          <Row>
            <Col>
              <h1 className="title">React Test</h1>
            </Col>
          </Row>
          <Row className="subtitle">
            <Col sm="auto">
              <h3>Testing react</h3>
            </Col>
            <Col />
            <Col sm="auto">
              <a
                className="icon"
                href="https://github.com/Tott0/react-ts-example"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
