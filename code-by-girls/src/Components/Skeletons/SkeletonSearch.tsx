import {
  Box,
  Center,
  Flex,
  Heading,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { useDashboard } from "../../Providers/Dashboard";

export const SkeletonSearch = () => {
  const { searchNotFound } = useDashboard();
  return (
    <Box
      display={"flex"}
      w="100%"
      h="100%"
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      mt={["5px", "5px", "10px", "20px"]}
    >
      <Flex flexDir={"column"} w="100%">
        <Heading
          fontSize={["20px", "20px", "30px", "40px"]}
          textAlign={["center"]}
        >
          Não foi encontrado resultado para:
        </Heading>
        <Text
          textAlign={"center"}
          fontSize={["16px", "16px", "24px", "32px"]}
          mt="5"
        >
          {searchNotFound}
        </Text>
      </Flex>

      <Box
        w={["100%", "100%", "80%", "60%", "40%"]}
        padding="6"
        boxShadow="lg"
        bg="white"
      >
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={3} spacing="4" />
      </Box>
    </Box>
  );
};
