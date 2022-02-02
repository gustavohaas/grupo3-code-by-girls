import { Center, Flex } from "@chakra-ui/react";

import { RegisterForm } from "./Formregister";
import { RegisterInfo } from "./InfoRegister";

export const Register = () => {
  return (
    <Center
      padding={["10px 15px", "10px 15px", "0px", "0px "]}
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgGradient={[
        "linear(to-b, gray.50)",
        "linear(to-b, gray.50)",
        "linear(to-l, gray.50)",
        "linear(to-l, gray.50)",
      ]}
    >
      <Flex
        w={["100%", "100%", "90%", "70%"]}
        h="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection={["column", "column", "row", "row"]}
      >
        <RegisterInfo />
        <RegisterForm />
      </Flex>
      <Flex
        fontSize="0.7rem"
        color="purple.500"
        position="fixed"
        top="4px"
        left="10px"
      >
        {" "}
        <span style={{ fontSize: "1.3rem" }}>
          <sup>&copy;</sup>
        </span>
        &nbsp;2022 Codebygirls
      </Flex>
    </Center>
  );
};
