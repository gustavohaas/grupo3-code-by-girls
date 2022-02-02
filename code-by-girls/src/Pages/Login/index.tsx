import { Center, Flex } from "@chakra-ui/react";

import { LoginForm } from "./FormLogin";
import { LoginInfo } from "./InfoLogin";

export const Login = () => {
  return (
    <Center
      // padding={["10px 15px", "10px 15px", "0px", "0px "]}
      // alignItems="center"
      // justifyContent="center"
      height="100vh"
      // bgGradient={[
      //   "linear(to-b, gray.50)",
      //   "linear(to-b, gray.50)",
      //   "linear(to-r, gray.50)",
      //   "linear(to-r, gray.50)",
      // ]}
      color="white"
    >
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
