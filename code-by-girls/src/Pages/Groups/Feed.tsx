import { Flex, Image, Heading, Input, Box } from "@chakra-ui/react";
import { MdSend } from "react-icons/md";
import group from "../../Assets/dinamica-de-grupo-mini-750x387 6 (2).png";

export const Feed = () => {
  return (
    <Flex
      justifyContent={["center"]}
      alignItems={["center"]}
      flexDirection={["column"]}
      border="3px solid"
      borderColor="gray.100"
      w="700px"
      minHeight="296px"
      padding={"10px"}
      m="20px"
    >
      <Flex
        backgroundColor="#D4C1E6"
        padding={"5px"}
        minW="304px"
        w="100%"
        h="161px"
        mb="50px"
        borderRadius={"5px"}
        direction={["column"]}
      >
        <Flex direction={["row"]} alignItems={["center"]}>
          <Image
            src={group}
            alt="groups"
            w="40px"
            h="36.81px"
            margin={"10px"}
          ></Image>
          <Heading fontSize={"1rem"}>User</Heading>
        </Flex>
        <Box padding={"10px"}>
          <p>postagem</p>
        </Box>
      </Flex>
      <Flex
        justifyContent={["space-between"]}
        alignItems={["center"]}
        backgroundColor="#c4c4c4"
        w="100%"
        mw="314px"
        h="60px"
        padding={"10px"}
      >
        <Image src={group} alt="groups" />
        <Input
          backgroundColor="gray.50"
          mw="212px"
          h="31px"
          m="10px"
          type={"text"}
        ></Input>
        <MdSend
          size={"21px"}
          color="#106cdc
"
        />
      </Flex>
    </Flex>
  );
};
