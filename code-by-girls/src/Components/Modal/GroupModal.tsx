import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
} from "@chakra-ui/react";

interface GroupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GroupModal = ({ isOpen, onClose }: GroupModalProps) => {
  const initialRef = React.useRef<any>();
  const finalRef = React.useRef<any>();

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w={["310px", "350px", "400px"]} h="475px">
          <ModalHeader
            textAlign="center"
            fontWeight="700"
            bgColor="purple.300"
            color="gray.50"
          >
            Criar Grupo
          </ModalHeader>
          <ModalCloseButton color="gray.50" />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontWeight="700">Nome do grupo</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Inserir o nome do grupo"
                _hover={{ borderColor: "purple.500" }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontWeight="700">Descrição</FormLabel>
              <Textarea
                h="120px"
                placeholder="Descrição do grupo..."
                maxLength={132}
                _hover={{ borderColor: "purple.500" }}
              />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight="700">Imagem do grupo </FormLabel>
              <Input
                ref={initialRef}
                placeholder="Inserir uma url"
                _hover={{ borderColor: "purple.500" }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              w="75%"
              _hover={{ bgColor: "purple.400" }}
              bgColor="purple.300"
              color="gray.50"
              mr={3}
            >
              Criar Grupo
            </Button>
            <Button
              onClick={onClose}
              _hover={{ bgColor: "gray.600", color: "gray.50" }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
