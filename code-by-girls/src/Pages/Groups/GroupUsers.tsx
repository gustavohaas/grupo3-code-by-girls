import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import group from "../../Assets/dinamica-de-grupo-mini-750x387 6 (2).png";

export const GroupUsers = () => {
  return (
    <Flex
      justifyContent={["center"]}
      alignItems={["center"]}
      flexDirection={["column"]}
      border="3px solid"
      borderColor="gray.100"
      w="296px"
      maxHeight="896px"
      //   padding={"10px"}
      m="20px"
    >
      <Heading
        as="header"
        backgroundColor={"purple.400"}
        w="295px"
        h="80px"
        position={"relative"}
        top={"0px"}
      ></Heading>
      <Box w="250px" h="80px" backgroundColor={"#DCDCDC"} m="20px">
        <Image
          src={group}
          alt="groups"
          w="40px"
          h="36.81px"
          margin={"10px"}
        ></Image>
        <p>USERS</p>
      </Box>

      <Box w="250px" h="80px" backgroundColor={"#DCDCDC"} m="20px">
        <Image
          src={group}
          alt="groups"
          w="40px"
          h="36.81px"
          margin={"10px"}
        ></Image>
        <p>USERS</p>
      </Box>
    </Flex>
  );
};
