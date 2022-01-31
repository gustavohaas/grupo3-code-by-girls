import { ComponentType } from "react";
import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { useLogin } from "../Providers/Login";

interface Props extends RouteProps {
  component: ComponentType;
  isPrivate?: boolean;
}

export const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: Props) => {
  const { data } = useLogin();

  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!data.accessToken ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};
