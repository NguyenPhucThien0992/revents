import React, { Component, Fragment } from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import EventDashBoard from "./../../features/event/EventDashBoard/EventDashBoard";
import NavBar from "./../../features/nav/NavBar/NavBar";
import { Route, Switch } from "react-router-dom";
import EventForm from "./../../features/event/EventForm/EventForm";
import EventDetailedPage from "./../../features/event/EventDetailed/EventDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import UserDetailedPage from "./../../features/user/UserDetailed/UserDetailedPage";
import PeopleDashboard from "./../../features/user/PeopleDashboard/PeopleDashboard";
import HomePage from "./../../features/home/HomePage";
class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Switch>
            <Route path="/" component={HomePage} exact></Route>
          </Switch>
          <Route
            path="/(.+)"
            render={() => (
              <div>
                <NavBar />
                <Container className="main">
                  <Switch>
                    <Route path="/events" component={EventDashBoard}></Route>
                    <Route
                      path="/event/:id"
                      component={EventDetailedPage}
                    ></Route>
                    <Route path="/people" component={PeopleDashboard}></Route>
                    <Route
                      path="/profile/:id"
                      component={UserDetailedPage}
                    ></Route>
                    <Route
                      path="/settings"
                      component={SettingsDashboard}
                    ></Route>
                    <Route path="/createEvent" component={EventForm}></Route>
                  </Switch>
                </Container>
              </div>
            )}
          ></Route>
        </div>
      </Fragment>
    );
  }
}

export default App;
