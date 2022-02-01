import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FaRegEdit, FaTrash } from "react-icons/fa";

interface Groups {
  url: string;
  groupName: string;
  description: string;
  id: number;
}
interface PropsGroup {
  group: Groups;
}

export const CardGroup = ({ group }: PropsGroup) => {
  return (
    <Flex
      w={["446px"]}
      h="121px"
      shadow={["xl"]}
      padding={["5px"]}
      margin={"10px"}
      _hover={{
        bg: "purple.50",
        transform: "translatey(-5px)",
        transition: "0.51s",
      }}
      transition={["0.51s"]}
      position={"relative"}
    >
      <Flex
        fontSize={["20px"]}
        position={"absolute"}
        right={["0"]}
        top={["-15px"]}
      >
        <Box cursor={"pointer"} marginRight={["10px"]}>
          <FaRegEdit />
        </Box>

        <Box cursor={"pointer"}>
          <FaTrash />
        </Box>
      </Flex>

      <Box
        objectFit={["cover"]}
        w={["80px"]}
        h={["80px"]}
        marginRight={["10px"]}
      >
        <Image
          w={["100%"]}
          h="100%"
          objectFit={["cover"]}
          borderRadius={["100%"]}
          src={group.url}
          alt="Imagem da Tecnologia"
        />
      </Box>

      <Flex flexDir={["column"]}>
        <Heading wordBreak={"break-word"} fontSize={["20px"]}>
          {group.groupName.toLocaleUpperCase()}
        </Heading>
        <Text fontSize={["14px"]} wordBreak={"break-word"}>
          {group.description}
        </Text>
      </Flex>
    </Flex>
  );
};
