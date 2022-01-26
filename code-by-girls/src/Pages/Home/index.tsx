import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import logo from "../../Assets/logo.svg";
import imgHome from "../../Assets/undraw_Dev_focus_re_6iwt 1.svg";

export const Home = () => {
  return (
    <Flex
      h="100vh"
      bgGradient={["linear(to-r,#f4f4f4 100%)"]}
      padding={["10px 15px", "10px 15px", "0px", "0px "]}
      alignItems="center"
      justifyContent="center"
      flexDir={["column"]}
    >
      <Heading display={["none", "none", "block"]}>
        <Image src={logo} alt="code-by-girls" />
      </Heading>

      <Heading
        alignItems="center"
        justifyContent="center"
        display={["flex", "flex", "none"]}
      >
        code-
        <br />
        by
        <br />
        -girls
      </Heading>

      <Flex justifyContent={["center"]} alignItems={["center"]}>
        <Button
          w={["100px", "100px", "100px", "150px"]}
          color="gray.50"
          mr={["", "", "50px"]}
          bg="purple.500"
          _hover={{
            background: "purple.400",
          }}
        >
          Logar
        </Button>
        <Image
          display={["none", "none", "block"]}
          src={imgHome}
          alt="Imagem Principal home"
          w={["", "", "400px"]}
        />
        <Button
          w={["100px", "100px", "100px", "150px"]}
          color="gray.50"
          ml={["", "", "50px"]}
          bg="purple.500"
          _hover={{
            background: "purple.400",
          }}
        >
          Registrar
        </Button>
      </Flex>
    </Flex>
  );
};
