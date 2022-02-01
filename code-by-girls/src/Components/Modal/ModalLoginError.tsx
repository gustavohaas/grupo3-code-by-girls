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
  
  interface ModalLoginErrorProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  export const ModalLoginError = ({
    isOpen,
    onClose,
  }: ModalLoginErrorProps) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={["310px", "350px","420px"]}>
        <ModalHeader bgColor="red.400" color="white">
          Puxaaa!
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <Text w="100%" align="center" color="gray.500">
            Erro ao logar. <br /> E-mail ou senha inválidos.
          </Text>
        </ModalBody>
  
        <ModalFooter w="100%" display="flex" justifyContent="center">
          <Button
            bgColor="red.400"
            color="white"
            _hover={{ bgColor: "red.400" }}
            w="80%"
            mr={3}
            onClick={onClose}
          >
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
  