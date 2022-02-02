import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

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
          {group.groupName}
          {console.log(typeof group.groupName)}
        </Heading>
        <Text fontSize={["14px"]} wordBreak={"break-word"}>
          {group.description}
        </Text>
      </Flex>
    </Flex>
  );
};
