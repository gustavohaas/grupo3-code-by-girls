import { Button, Center, Flex, Heading, Image } from "@chakra-ui/react";
import logo from "../../Assets/logo.svg";
import logoMobile from "../../Assets/logoMobile.svg";
import imgHome from "../../Assets/undraw_Dev_focus_re_6iwt 1.svg";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();

  return (
    <Flex
      h="100vh"
      bgGradient={["linear(to-r,#f4f4f4 100%)"]}
      padding={["10px 15px", "10px 15px", "0px", "0px "]}
      alignItems="center"
      justifyContent="center"
      flexDir={["column"]}
      overflow="hidden"
    >
      <Heading display={["none", "none", "block"]}>
        <Image src={logo} alt="code-by-girls" />
      </Heading>

      <Heading mb="20px" display={["block", "block", "none"]}>
        <Image src={logoMobile} alt="code-by-girls" />
      </Heading>

      <Center>
        <Button
          w={["190px", "200px", "170px", "200px"]}
          h={["50px", "54px"]}
          marginBottom="16px"
          fontSize="1.3rem"
          color="gray.50"
          mr={["", "", "50px"]}
          bg="purple.500"
          _hover={{
            background: "purple.400",
          }}
          onClick={() => history.push("/login")}
          position="relative"
          left="65px"
          top="10px"
        >
          Logar
        </Button>
        <Image
          display={["none", "none", "block"]}
          src={imgHome}
          alt="Imagem Principal home"
          w={["300px", "400px", "400px"]}
        />
        <Button
          w={["190px", "200px", "170px", "200px"]}
          h={["50px", "54px"]}
          marginTop="16px"
          fontSize="1.3rem"
          color="gray.50"
          ml={["", "", "50px"]}
          bg="purple.500"
          _hover={{
            background: "purple.400",
            transition: "",
          }}
          onClick={() => history.push("/register")}
          position="relative"
          right="65px"
          top="60px"
        >
          Registrar
        </Button>
      </Center>
    </Flex>
  );
};
