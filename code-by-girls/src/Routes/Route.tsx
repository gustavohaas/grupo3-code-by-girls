import { ComponentType } from "react";
import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { useLogin } from "../Providers/Login";

interface Props extends RouteProps {
  component: ComponentType;
}

export const Route = ({ component: Component }: Props) => {
  return <ReactRoute render={() => <Component />} />;
};
