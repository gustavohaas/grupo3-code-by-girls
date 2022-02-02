import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FaWindowClose } from "react-icons/fa";

interface Groups {
  url: string;
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
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding="2" bg="white" color="gray" alignItems="center">
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          flexDir="column"
          alignItems={"center"}
        >
          <Flex alignContent="center" alignItems={"center"}>
            <Button
              m="3"
              bg="purple.500"
              color="white"
              _hover={{ bg: "purple.100" }}
            >
              Participar
            </Button>
            <Button bg="purple.500" color="white" _hover={{ bg: "purple.100" }}>
              Página do Grupo
            </Button>

            <Box
              ml="3"
              onClick={onClose}
              color="purple.400"
              fontSize="35px"
              _hover={{ color: "purple.100" }}
            >
              <FaWindowClose />
            </Box>
          </Flex>
          <ModalBody display={"flex"}>
            <Flex w={"100px"} h="100px" flexDir={"row"} m="3">
              <Image
                borderRadius={["100%"]}
                src={group.url}
                alt="Imagem da Tecnologia"
              />
            </Flex>

            <Flex flexDir="column">
              <Heading as="h1" fontSize="2xl" p="3">
                {group.groupName}
              </Heading>
              <Text color="gray.400" w="280px" p="2">
                {group.description}
              </Text>
            </Flex>
          </ModalBody>
        </ModalHeader>
      </ModalContent>
    </Modal>
  );
};
