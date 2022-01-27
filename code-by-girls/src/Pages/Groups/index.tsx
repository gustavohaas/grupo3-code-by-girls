import { Flex } from "@chakra-ui/react";
import { Feed } from "./Feed";

export const Groups = () => {
  return (
    <Flex
      justifyContent={["center"]}
      alignItems={["center"]}
      border="5px solid"
      borderColor="gray.100"
      w="100vw"
      h="100vh"
    >
      <Feed />
    </Flex>
  );
};
