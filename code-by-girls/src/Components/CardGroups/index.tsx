import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface Groups {
  url?: string;
  groupName: string;
  description: string;
  id: number;
}
interface PropsGroup {
  group: Groups;
  onClick: (group: Groups) => void;
}

export const CardGroup = ({ group, onClick }: PropsGroup) => {
  return (
    <Flex
      onClick={() => onClick(group)}
      w={["290px", "400px"]}
      h={["121px"]}
      shadow={["xl"]}
      padding={["6px", "5px"]}
      margin={"10px"}
      borderRadius="10px"
      borderColor={"purple.100"}
      border={["1px solid", "none"]}
      _hover={{
        bg: "purple.50",
        transform: "translatey(-5px)",
        transition: "0.51s",
      }}
      transition={["0.51s"]}
      position={"relative"}
    >
      <Box w={["50px", "80px"]} h={["50px", "80px"]} marginRight={["10px"]}>
        <Image
          w={["100%"]}
          h="100%"
          borderRadius={["100%"]}
          src={group.url}
          alt="Imagem da Tecnologia"
        />
      </Box>

      <Flex flexDir={["column"]} ml="5">
        <Heading
          wordBreak={"break-word"}
          fontSize={["20px"]}
          mt={["5", "none"]}
        >
          {group.groupName}
        </Heading>
        <Text
          fontSize={["16px"]}
          fontWeight="600"
          wordBreak={"break-word"}
          overflow="auto"
          w="280px"
          p="2"
        >
          {group.description}
        </Text>
      </Flex>
    </Flex>
  );
};
