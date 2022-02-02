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

import React, { useState } from "react";

interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechModal = ({ isOpen, onClose }: TechModalProps) => {
  const initialRef = React.useRef<any>();
  const finalRef = React.useRef<any>();

  const [tech, setTech] = useState("");
  const [techsLevel, setTechsLevel] = useState("");
  const [techsImg, setTechsImg] = useState("");

  return (
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
            <FormLabel fontWeight="700" margin="0px 0px 2px 5px">
              Tech
            </FormLabel>
            <Input
              onChangeCapture={(e) => setTech(e.currentTarget.value)}
              ref={initialRef}
              placeholder="Nome da tecnologia"
              _hover={{ borderColor: "purple.500" }}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel fontWeight="700" margin="0px 0px 2px 5px">
              Descrição
            </FormLabel>
            <Textarea
              onChangeCapture={(e) => setTechsLevel(e.currentTarget.value)}
              h="120px"
              placeholder="Descrição da tech..."
              maxLength={132}
              _hover={{ borderColor: "purple.500" }}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel fontWeight="700" margin="0px 0px 2px 5px">
              Imagem da tecnologia{" "}
            </FormLabel>
            <Input
              onChangeCapture={(e) => setTechsImg(e.currentTarget.value)}
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
              disabled={!tech}
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
  );
};
