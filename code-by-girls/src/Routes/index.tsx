import { Switch } from "react-router"
import { Login } from "../Pages/Login"
import { Route } from "./Route"

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
        </Switch>
    )
}