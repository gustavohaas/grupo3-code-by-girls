import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { ImEnter } from "react-icons/im";
import { useHistory } from "react-router-dom";
import { useGroup } from "../../Providers/Groups";

interface Item {
  url?: string;
  groupName: string;
  groupId: number;
}

interface CardsGroupProps {
  item: Item;
}

export const CardGroupsPerfil = ({ item }: CardsGroupProps) => {
  const { createGroupData } = useGroup();
  const history = useHistory();
  return (
    <Flex
      w={["100%"]}
      h={["121px", "150px"]}
      shadow={["xl"]}
      padding={["6px", "5px"]}
      margin={"10px"}
      borderRadius="10px"
      borderColor={"purple.100"}
      border={["1px solid", "none"]}
      _hover={{
        bg: "purple.50",
      }}
    >
      <Box w={["50px", "100px"]} h={["50px", "80px"]} marginRight={["10px"]}>
        <Image
          w={["100%"]}
          h="100%"
          borderRadius={["100%"]}
          src={item.url}
          alt="Imagem da Tecnologia"
        />
      </Box>

      <Flex flexDir={["row", "column"]} ml="5">
        <Heading
          wordBreak={"break-word"}
          fontSize={["20px"]}
          mt={["5", "none"]}
        >
          {item.groupName}
        </Heading>
        <Button
          w={["25px", "auto"]}
          onClick={() => {
            createGroupData(item.groupId);
            history.push(`/groups`);
          }}
          bg="purple.500"
          color="white"
          _hover={{ bg: "purple.100" }}
        >
          <Box display={["none", "block", "block", "block"]}>
            Página do Grupo
          </Box>
          <Box display={["block", "none", "none", "none"]} fontSize="25px">
            <ImEnter />
          </Box>
        </Button>
      </Flex>
    </Flex>
  );
};
