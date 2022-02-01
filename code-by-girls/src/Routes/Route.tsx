import { ComponentType } from "react";
import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { useLogin } from "../Providers/Login";

interface Props extends RouteProps {
  component: ComponentType;
  isPrivate?: boolean;
}

export const Route = ({
  isPrivate = true, //MUDAR PARA FALSE ANTES DE DAR PUSH
  component: Conponent,
  ...rest
}: Props) => {
  const { data } = useLogin();
  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!data.accessToken ? (
          <Conponent />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};
