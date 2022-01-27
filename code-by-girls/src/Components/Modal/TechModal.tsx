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
  Flex,
} from "@chakra-ui/react";

interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechModal = ({ isOpen, onClose }: TechModalProps) => {
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
        <ModalContent w={["310px", "350px", "400px"]} h="505px">
          <ModalHeader
            textAlign="center"
            fontWeight="700"
            bgColor="purple.300"
            color="gray.50"
          >
            Criar Tecnologia
          </ModalHeader>
          <ModalCloseButton color="gray.50" />
          <ModalBody>
            <FormControl>
              <FormLabel fontWeight="700">Nome da tech</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Inserir o nome da tecnologia"
                _hover={{ borderColor: "purple.500" }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontWeight="700">Descrição</FormLabel>
              <Textarea
                h="120px"
                placeholder="Descrição da tech..."
                maxLength={132}
                _hover={{ borderColor: "purple.500" }}
              />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight="700">Imagem da tecnologia </FormLabel>
              <Input
                ref={initialRef}
                placeholder="Inserir uma url"
                _hover={{ borderColor: "purple.500" }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Flex
              w="75%"
              h="90px"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Button
                w="95%"
                _hover={{ bgColor: "purple.400" }}
                bgColor="purple.300"
                color="gray.50"
              >
                Criar Tech
              </Button>
              <Button
                w="95%"
                _hover={{ bgColor: "purple.400" }}
                bgColor="purple.300"
                color="gray.50"
              >
                Editar Tech
              </Button>
            </Flex>
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
