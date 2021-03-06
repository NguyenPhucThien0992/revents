import React from "react";
import { Grid } from "semantic-ui-react";
import { Switch, Route, Redirect } from "react-router-dom";
import SettingNav from "./SettingNav";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotoPage from "./PhotoPage.js";
import AccountPage from "./AccountPage";

const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="/settings/basic"></Redirect>
          <Route path="/settings/basic" component={BasicPage}></Route>
          <Route path="/settings/about" component={AboutPage}></Route>
          <Route path="/settings/photo" component={PhotoPage}></Route>
          <Route path="/settings/account" component={AccountPage}></Route>
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingNav></SettingNav>
      </Grid.Column>
    </Grid>
  );
};

export default SettingsDashboard;
