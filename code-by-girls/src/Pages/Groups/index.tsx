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
        alignItems={["flex-start"]}
        border="5px solid"
        borderColor="gray.100"
        w="100vw"
        h="100vh"
        direction={["column", "row"]}
        wrap={"nowrap"}
      >
        <GroupUsers />
        <Feed />
      </Flex>
    </>
  );
};
