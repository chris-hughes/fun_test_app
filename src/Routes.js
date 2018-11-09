import React from "react";
import { Route, Switch } from "react-router-dom";
import App from './components/App/App';
import NavBar from './components/Navigation/NavBar'

export default ()=>
  <Switch>
    <Route path="/SignUp" component={NavBar} />
    <Route path="/Login" component={NavBar} />
    <Route path="/" component={App} />
  </Switch>;
