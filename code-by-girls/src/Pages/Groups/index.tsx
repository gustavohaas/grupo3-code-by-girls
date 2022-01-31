import { Flex } from "@chakra-ui/react";
import Header from "../../Components/Header/header";
import { Feed } from "./Feed";
import { GroupUsers } from "./GroupUsers";

export const Groups = () => {
  return (
    <>
      <Header input={false} profile={false} />
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
    </>
  );
};
