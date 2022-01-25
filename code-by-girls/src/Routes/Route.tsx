import { ComponentType } from "react";
import { Route as ReactRoute, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
    component: ComponentType;
}

export const Route = ({component: Component}: Props) => {
    return(
        <ReactRoute 
        render={() => <Component />} />
    )
}