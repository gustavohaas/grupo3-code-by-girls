import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CardTextProps {
  img: string;
  name_skill: string;
  level: string;
}

export const CardSkill = (skill: CardTextProps) => {
  return (
    <Flex w="250px" h="80px" boxShadow="md" p="6" rounded="md" bg="white">
      <Box>
        <Image
          borderRadius="full"
          boxSize="150px"
          src={skill.img}
          alt={skill.name_skill}
        />
      </Box>
      <Box>
        <Heading as="h4">{skill.name_skill}</Heading>
        <Text>Nível :{skill.level}</Text>
      </Box>
    </Flex>
  );
};
