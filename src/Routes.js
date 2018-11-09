import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from './components/Scenes/Dashboard';
import SignUp from './components/Scenes/SignUp'
import Login from './components/Scenes/Login'

export default ()=>
  <Switch>
    <Route path="/SignUp" component={SignUp} />
    <Route path="/Login" component={Login} />
    <Route path="/" component={Dashboard} />
  </Switch>;
