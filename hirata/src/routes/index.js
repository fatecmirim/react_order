import React from "react";

import { Switch } from "react-router-dom";
import Route from "./Route";
import Login from "../pages/Login/index";
import Main from "../pages/Main/index";
import Cart from "../pages/Cart/index";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/main" exact component={Main} isPrivate />
      <Route path="/cart" exact component={Cart} isPrivate />
    </Switch>
  );
}
