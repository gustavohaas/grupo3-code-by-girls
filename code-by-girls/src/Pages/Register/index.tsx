import { Flex } from "@chakra-ui/react";
import { RegisterForm } from "./Formregister";
import { RegisterInfo } from "./InfoRegister";

export const Register = () => {
  return (
    <Flex
      height="100vh"
      padding={["10px 15px", "10px 15px", "0px", "0px "]}
      alignItems="center"
      justifyContent="center"
      bgGradient={[
        "linear(to-b,  gray.50)",
        "linear(to-b, gray.50)",
        "linear(to-l, gray.50)",
        "linear(to-l, gray.50)",
      ]}
    >
      <Flex
        w={["100%", "100%", "90%", "70%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
        mt={["350px", "350px", "0"]}
        height="100vh"
      >
        <RegisterInfo />
        <RegisterForm />
      </Flex>
    </Flex>
  );
};
