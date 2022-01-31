import { Flex } from "@chakra-ui/react";
import { Feed } from "./Feed";
import { GroupUsers } from "./GroupUsers";

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
      <GroupUsers />
      <Feed />
    </Flex>
  );
};
