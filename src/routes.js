import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./Components/Auth";
import Dashboard from "./Components/Dashboard";
import User from "./Components/User";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/dash" component={Dashboard} />
    <Route path="/user/:username" component={User} />
    <Route render={() => <div>Go away this page doesn't exist</div>} />
  </Switch>
);
