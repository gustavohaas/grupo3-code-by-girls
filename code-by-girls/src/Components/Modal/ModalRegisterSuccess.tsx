import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

import { useHistory } from "react-router-dom";

interface ModalRegisterSuccessProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalRegisterSuccess = ({
  isOpen,
  onClose,
}: ModalRegisterSuccessProps) => {
  const history = useHistory();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={["310px", "350px", "420px"]}>
        <ModalHeader bgColor="green.400" color="white">
          Parabéns!
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <Text w="100%" align="center" color="gray.500">
            Cadastro realizado com sucesso!
          </Text>
        </ModalBody>

        <ModalFooter w="100%" display="flex" justifyContent="space-evenly">
          <Button
            colorScheme="green"
            _hover={{ bgColor: "green.50", color: "gray.600" }}
            w="45%"
            onClick={onClose}
          >
            Fechar
          </Button>
          <Button w="45%" onClick={() => history.push("/signin")}>
            Ir para login
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
