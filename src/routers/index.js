import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landing";
import UserPage from "../pages/user";

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/user" component={UserPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
