import { Switch } from "react-router";
import { Login } from "../Pages/Login";
import { Home } from "../Pages/Home";
import { Register } from "../Pages/Register";
import { Route } from "./Route";
import { Groups } from "../Pages/Groups";

import Dashboard from "../Pages/Dashboard";

import { Profile } from "../Pages/Profile";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
<<<<<<< HEAD
      <Route exact path="/groups" component={Groups} />
=======

      <Route path="/dashboard/" component={Dashboard} />

      <Route path="/perfil" component={Profile} />
>>>>>>> 35961b2cb9532a6176efadb966e88d0544ea8011
    </Switch>
  );
};
