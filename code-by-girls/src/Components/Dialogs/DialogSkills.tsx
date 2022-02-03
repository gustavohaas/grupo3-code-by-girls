import { Button, Flex, Heading } from "@chakra-ui/react";

interface DialogSkillsProps {
  onSkillModalOpen: () => void;
}

export const DialogSkills = ({ onSkillModalOpen }: DialogSkillsProps) => {
  return (
    <Flex w="100%" h="100%" alignItems={"center"} justifyContent={"center"}>
      <Flex
        flexDir={"column"}
        w="70%"
        h={["100px", "200px"]}
        border={"2px dashed"}
        borderColor={"purple.500"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading
          color={["gray.300"]}
          textAlign={"center"}
          fontSize={["16px", "16px", "20px", "25px"]}
        >
          Você não possui nenhuma habilidade ainda!
        </Heading>
        <Button
          mt="10px"
          w={["150px", "200px"]}
          fontSize={["12px", "12px", "16px"]}
          h="40px"
          bgColor={["purple.500"]}
          color={["gray.50"]}
          _hover={{ background: "purple.400" }}
          onClick={onSkillModalOpen}
        >
          Adicionar habilidade
        </Button>
      </Flex>
    </Flex>
  );
};
