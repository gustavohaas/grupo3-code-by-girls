import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CardWorkProps {
  img: string;
  title: string;
  description: string;
}

export const CardWork = (work: CardWorkProps) => {
  return (
    <Flex w="250px" h="100px" boxShadow="md" p="6" rounded="md" bg="white">
      <Box>
        <Image
          borderRadius="full"
          boxSize="150px"
          src={work.img}
          alt={work.title}
        />
      </Box>
      <Box>
        <Heading as="h4">{work.title}</Heading>
        <Text>{work.description}</Text>
      </Box>
    </Flex>
  );
};
