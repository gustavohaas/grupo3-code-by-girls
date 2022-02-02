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

import React, { useState } from "react";

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WorkModal = ({ isOpen, onClose }: WorkModalProps) => {
  const initialRef = React.useRef<any>();
  const finalRef = React.useRef<any>();

  const [works, setWorks] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [workImg, setWorkImg] = useState("");

  return (
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
          Criar Trabalho
        </ModalHeader>
        <ModalCloseButton color="gray.50" />
        <ModalBody>
          <FormControl>
            <FormLabel fontWeight="700" margin="0px 0px 2px 5px">
              Trabalho
            </FormLabel>
            <Input
              onChangeCapture={(e) => setWorks(e.currentTarget.value)}
              ref={initialRef}
              placeholder="Nome do trabalho"
              _hover={{ borderColor: "purple.500" }}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel fontWeight="700" margin="0px 0px 2px 5px">
              Descrição
            </FormLabel>
            <Textarea
              onChangeCapture={(e) => setWorkDescription(e.currentTarget.value)}
              h="120px"
              placeholder="Descrição do trabalho..."
              maxLength={132}
              _hover={{ borderColor: "purple.500" }}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel fontWeight="700" margin="0px 0px 2px 5px">
              Imagem do Trabalho{" "}
            </FormLabel>
            <Input
              onChangeCapture={(e) => setWorkImg(e.currentTarget.value)}
              ref={initialRef}
              placeholder="Inserir uma url"
              _hover={{ borderColor: "purple.500" }}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            disabled={!works}
            w="75%"
            _hover={{ bgColor: "purple.400" }}
            bgColor="purple.300"
            color="gray.50"
            mr={3}
          >
            Criar Trabalho
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
  );
};
