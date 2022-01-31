import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CardText {
  img?: string;
  userId: string;
  skill: string;
  level: string;
  id: string;
}

interface CardTextProps {
  skill: CardText
}

export const CardSkill = ({skill}: CardTextProps) => {
  return (
    <Flex w="250px" h="80px" boxShadow="md" p="6" rounded="md" bg="white">
      <Box>
        <Image
          borderRadius="full"
          boxSize="150px"
          src={skill.img}
          alt={skill.skill}
        />
      </Box>
      <Box>
        <Heading as="h4">{skill.skill}</Heading>
        <Text>Nível: {skill.level}</Text>
      </Box>
    </Flex>
  );
};
