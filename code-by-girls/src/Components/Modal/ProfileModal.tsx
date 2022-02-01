import {
  Modal,
  ModalOverlay,
  ModalContent,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";

import { useHistory } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { GiExitDoor } from "react-icons/gi";

import { useLogin } from "../../Providers/Login";
import { GroupModal } from "./GroupModal";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  const { handleSignOut } = useLogin();

  const history = useHistory();

  const handleClick = (destiny: string) => history.push(destiny);

  const {
    isOpen: isGroupModalOpen,
    onOpen: onGroupModalOpen,
    onClose: onGroupModalClose,
  } = useDisclosure();

  return (
    <>
      <GroupModal isOpen={isGroupModalOpen} onClose={onGroupModalClose} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          h="35%"
          w={["300px", "300px", "350px"]}
          padding="20px 20px"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="space-evenly"
          cursor="pointer"
          marginTop="100px"
        >
          <Flex
            as="p"
            w="100%"
            padding="0px 10px"
            justifyContent="space-between"
            fontWeight="700"
            color="gray.600"
            borderBottom="1px solid #282c34"
            _hover={{ color: "purple.300" }}
            onClick={() => handleClick("/profile")}
          >
            Visualizar Perfil
            <FaUserCircle fontSize="1.5rem" />
          </Flex>
          <Flex
            as="p"
            w="100%"
            padding="0px 10px"
            justifyContent="space-between"
            fontWeight="700"
            color="gray.600"
            borderBottom="1px solid #282c34"
            _hover={{ color: "purple.300" }}
            onClick={onGroupModalOpen}
          >
            Criar Grupo
            <HiUserGroup fontSize="1.5rem" />
          </Flex>
          <Flex
            onClick={handleSignOut}
            as="button"
            w="100%"
            padding="0px 10px"
            justifyContent="space-between"
            fontWeight="700"
            color="gray.600"
            borderBottom="1px solid #282c34"
            _hover={{ color: "purple.300" }}
          >
            Sair
            <GiExitDoor fontSize="1.5rem" />
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};
