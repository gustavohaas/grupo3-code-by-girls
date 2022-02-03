import { Button, Flex, Heading } from "@chakra-ui/react";

interface DialogWorksProps {
  onWorkModalOpen: () => void;
}

export const DialogWorks = ({ onWorkModalOpen }: DialogWorksProps) => {
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
          Você não possui nenhum trabalho ainda!
        </Heading>
        <Button
          mt="10px"
          w={["150px", "200px"]}
          fontSize={["12px", "12px", "16px"]}
          h="40px"
          bgColor={["purple.500"]}
          color={["gray.50"]}
          _hover={{ background: "purple.400" }}
          onClick={onWorkModalOpen}
        >
          Adicionar trabalho
        </Button>
      </Flex>
    </Flex>
  );
};
