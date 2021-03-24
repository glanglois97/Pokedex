import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./Component/App";
import Fiche from "./Component/Fiche";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/:pokemonName" component={Fiche} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
