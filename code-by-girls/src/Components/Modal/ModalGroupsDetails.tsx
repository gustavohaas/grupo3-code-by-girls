import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";
import { ImEnter } from "react-icons/im";
import { useHistory } from "react-router-dom";
import { useGroup } from "../../Providers/Groups";
import { useLogin } from "../../Providers/Login";
import { api } from "../../Services/api";

interface Groups {
  url?: string;
  groupName: string;
  description: string;
  id: number;
}

interface ModalGroupsDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  group: Groups;
}

export const ModalGroupsDetails = ({
  isOpen,
  onClose,
  group,
}: ModalGroupsDetailsProps) => {
  const history = useHistory();
  const { data } = useLogin();
  const { createGroupData } = useGroup();

  const toast = useToast();

  const subscribeGroup = ({ userId, groupName, groupId, url }: any) => {
    api
      .post(
        "/subscribe",
        {
          userId,
          groupName,
          groupId,
          url,
        },
        {
          headers: {
            Authorization: `Bearer ${data.accessToken}`,
          },
        }
      )
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  const newSubData = {
    userId: data.user.id,
    groupName: group.groupName,
    groupId: group.id,
    url: group.url,
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        padding={["0", "2"]}
        bg="white"
        color="gray"
        alignItems="center"
        w={"80%"}
      >
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          flexDir="column"
          alignItems={"center"}
        >
          <Flex w={["350px", ""]} justifyContent={["space-around", ""]}>
            <Flex alignContent="center" alignItems={"center"}>
              <Button
                onClick={() => {
                  subscribeGroup(newSubData);
                  onClose();
                  toast({
                    title: `Você agora está inscrito no grupo: ${group.groupName}!`,
                    status: "success",
                    isClosable: true,
                  });
                }}
                m={["1", "3"]}
                bg="purple.500"
                color="white"
                _hover={{ bg: "purple.100" }}
              >
                <Box display={["none", "block", "block", "block"]}>
                  Participar
                </Box>
                <Box
                  fontSize="25px"
                  display={["block", "none", "none", "none"]}
                >
                  <BsFillPersonPlusFill />
                </Box>
              </Button>

              <Button
                onClick={() => {
                  createGroupData(group.id);
                  history.push(`/groups`);
                }}
                bg="purple.500"
                color="white"
                _hover={{ bg: "purple.100" }}
              >
                <Box display={["none", "block", "block", "block"]}>
                  Página do Grupo
                </Box>
                <Box
                  display={["block", "none", "none", "none"]}
                  fontSize="25px"
                >
                  <ImEnter />
                </Box>
              </Button>
            </Flex>
            <Box
              ml={["3", "3"]}
              onClick={onClose}
              color="purple.400"
              fontSize={["35px"]}
              _hover={{ color: "purple.100" }}
            >
              <FaWindowClose />
            </Box>
          </Flex>

          <ModalBody
            display={"flex"}
            flexDir={["column", "row"]}
            alignItems={["center", ""]}
          >
            <Flex
              w={["70px", "100px"]}
              h={["70px", "100px"]}
              flexDir={["row"]}
              m={["1", "3"]}
            >
              <Image
                borderRadius={["50%", "100%"]}
                src={group.url}
                alt="Imagem da Tecnologia"
              />
            </Flex>

            <Flex flexDir="column">
              <Heading as="h1" fontSize={["xl", "2xl"]} p={["1", "3"]}>
                {group.groupName}
              </Heading>
              <Text
                as="p"
                color="gray.400"
                w={["200px", "280px"]}
                p={["1", "2"]}
                fontSize={["md", "xl"]}
              >
                {group.description}
              </Text>
            </Flex>
          </ModalBody>
        </ModalHeader>
      </ModalContent>
    </Modal>
  );
};
