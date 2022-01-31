import { Flex, Grid, Heading, Image } from "@chakra-ui/react";
import group from "../../Assets/dinamica-de-grupo-mini-750x387 6 (2).png";
import { useLogin } from "../../Providers/Login";

export const GroupUsers = () => {
  const { data } = useLogin();

  return (
    <Flex
      justifyContent={["center"]}
      alignItems={["center"]}
      flexDirection={["column"]}
      border="3px solid"
      borderColor="gray.100"
      w="296px"
      maxH={["300px", "896px"]}
      //   padding={"10px"}
      m="20px"
    >
      <Heading
        as="header"
        backgroundColor={"purple.400"}
        w="295px"
        h="80px"
        color="white"
        fontSize={"16px"}
        textAlign={"center"}
        padding={"10px"}
      >
        <h1>Usuários Cadastrados</h1>
      </Heading>

      <Flex
        w="300px"
        alignItems={["center"]}
        justifyContent={["center"]}
        direction={["row", "column"]}
        wrap={["nowrap", "wrap"]}
      >
        <Flex
          w="250px"
          h="80px"
          backgroundColor={"#DCDCDC"}
          m="20px"
          alignItems={["center"]}
          justifyContent={["center"]}
        >
          <Image
            src={group}
            alt="groups"
            w="40px"
            h="36.81px"
            margin={"10px"}
          ></Image>
          <p>UserName</p>
        </Flex>
      </Flex>
    </Flex>
  );
};
