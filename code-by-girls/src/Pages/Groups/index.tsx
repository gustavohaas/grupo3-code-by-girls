import { Flex, Heading } from "@chakra-ui/react";
import Header from "../../Components/Header/header";
import { useLogin } from "../../Providers/Login";
import { Feed } from "./Feed";
import { GroupUsers } from "./GroupUsers";

export const Groups = () => {
  return (
    <>
      <Header input={false} profile={false} />
      <Heading as="h1" m="20px"></Heading>

      <Flex
        justifyContent={["center"]}
        alignItems={["flex-start"]}
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
