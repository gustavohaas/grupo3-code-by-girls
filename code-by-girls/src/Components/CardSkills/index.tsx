import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { useLogin } from "../../Providers/Login";
import { useProfile } from "../../Providers/Profile";

interface Skills {
  url?: string;
  userId: string;
  skill: string;
  level: string;
  id: string;
}

interface PropsSkill {
  skill: Skills;
}

export const CardSkills = ({ skill }: PropsSkill) => {
  const [isTrue, setIsTrue] = useState(false);

  const { deleteSkill } = useProfile();
  const { data } = useLogin()

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

        <Box cursor={"pointer"} as="button" onClick={() => deleteSkill(skill.id, data.accessToken)} >
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
          src={skill.url}
          alt="Imagem da Tecnologia"
        />
      </Box>

      <Flex flexDir={["column"]}>
        <Heading wordBreak={"break-word"} fontSize={["18px"]}>
          {skill.skill}
        </Heading>
        <Text fontSize={["14px"]} wordBreak={"break-word"}>
          {skill.level}
        </Text>
      </Flex>
    </Flex>
  );
};
