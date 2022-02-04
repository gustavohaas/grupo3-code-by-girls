import { Flex, Heading, Image } from "@chakra-ui/react";
import group from "../../Assets/dinamica-de-grupo-mini-750x387 6 (2).png";
import { useGroup } from "../../Providers/Groups";

export const GroupUsers = () => {
  const { dataGroup } = useGroup();
  const { subscribe } = dataGroup;

  return (
    <Flex
      justifyContent={["center"]}
      alignItems={["center"]}
      flexDirection={["column"]}
      border="3px solid"
      borderColor="gray.100"
      w="296px"
      maxH={["300px", "896px"]}
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

      {subscribe?.map((user) => (
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
            <p>{user.name}</p>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
