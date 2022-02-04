import { Flex, Heading } from "@chakra-ui/react";
import Header from "../../Components/Header/header";
import { Feed } from "./Feed";
import { GroupUsers } from "./GroupUsers";
import { useGroup } from "../../Providers/Groups";

export const Groups = () => {
  const { dataGroup } = useGroup();
  return (
    <>
      <Header input={false} profile={false} linkedin={false} />
      <Heading as="h1" m="20px">
        {dataGroup.groupName}
      </Heading>

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
