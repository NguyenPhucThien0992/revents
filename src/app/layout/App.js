import React, { Component, Fragment } from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import EvenDashBoard from "./../../features/event/EventDashBoard/EventDashBoard";
import NavBar from "./../../features/nav/NavBar/NavBar";
class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          <EvenDashBoard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
