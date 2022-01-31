import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";

interface Work {
  url: string;
  title: string;
  description: string;
  id: number;
}

interface PropsWorks {
  work: Work;
}

export const CardWorks = ({ work }: PropsWorks) => {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <Flex
      w={["250px"]}
      shadow={["lg"]}
      padding={["5px"]}
      margin={"10px"}
      _hover={{
        transform: "translatey(-10px)",
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

      <Box objectFit={["cover"]} w={["100px"]} marginRight={["10px"]}>
        <Image
          w={["100%"]}
          h="100%"
          objectFit={["cover"]}
          borderRadius={["100%"]}
          src={work.url}
          alt="Imagem da Tecnologia"
        />
      </Box>

      <Flex flexDir={["column"]}>
        <Heading wordBreak={"break-word"} fontSize={["18px"]}>
          {work.title}
        </Heading>
        <Text fontSize={["14px"]} wordBreak={"break-word"}>
          {work.description}
        </Text>
      </Flex>
    </Flex>
  );
};
