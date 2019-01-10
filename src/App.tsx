import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import "./App.scss";
import Header from "./header/Header";
import Landing from "./landing/Landing";

// asd
/** asdasd */
class App extends Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={Landing} />
        </div>
      </Router>
    );
  }
}

export default App;
