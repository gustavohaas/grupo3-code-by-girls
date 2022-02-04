import { Center } from "@chakra-ui/react";
import { LoginForm } from "./FormLogin";
import { LoginInfo } from "./InfoLogin";

export const Login = () => {
  return (
    <Center height="100vh" color="white">
      <Center
        w={["100%", "100%", "90%", "70%"]}
        h="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection={["column", "column", "row", "row"]}
      >
        <LoginInfo />
        <LoginForm />
      </Center>
    </Center>
  );
};
