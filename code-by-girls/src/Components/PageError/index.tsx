import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "../Header/header";
import error from "../../Assets/error404.svg";
import { useLogin } from "../../Providers/Login";
import { useHistory } from "react-router-dom";

export const PageError = () => {
  const { data } = useLogin();

  const history = useHistory();
  return (
    <>
      {!!data.accessToken ? (
        <Header input={false} profile  linkedin={false} />
      ) : (
        <Button
          mt={"60px"}
          ml="60"
          w="80px"
          h="80px"
          bgColor={"purple.400"}
          color={"gray.200"}
          _hover={{
            background: "purple.500",
            color: "gray.50",
          }}
          onClick={() => history.push("/")}
        >
          Voltar
        </Button>
      )}

      <Center h="calc(100vh - 150px)" flexDir="column">
        <Flex flexDir={"column"}>
          <VStack spacing="5">
            <Heading textAlign={"center"}>Error 404!</Heading>
            <Text>Ops... Essa página não foi encontrada!</Text>
          </VStack>
        </Flex>

        <Image mt="5" src={error} />
      </Center>
    </>
  );
};
