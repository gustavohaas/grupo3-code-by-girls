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

interface GroupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GroupModal = ({ isOpen, onClose }: GroupModalProps) => {
  const initialRef = React.useRef<any>();
  const finalRef = React.useRef<any>();
  
  const [groupName, setGroupName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

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
          Criar Grupo
        </ModalHeader>
        <ModalCloseButton color="gray.50" />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel fontWeight="700" margin="0px 0px 2px 5px">
              Nome do grupo
            </FormLabel>
            <Input
              onChangeCapture={(e) =>
                setGroupName(e.currentTarget.value)
              }
              ref={initialRef}
              placeholder="Inserir nome do grupo"
              _hover={{ borderColor: "purple.500" }}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel fontWeight="700" margin="0px 0px 2px 5px">
              Descrição
            </FormLabel>
            <Textarea
              onChangeCapture={(e) =>
                setDescription(e.currentTarget.value)
              }
              h="120px"
              placeholder="Descrição do grupo..."
              maxLength={132}
              _hover={{ borderColor: "purple.500" }}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel fontWeight="700" margin="0px 0px 2px 5px">
              Imagem do grupo{" "}
            </FormLabel>
            <Input
              ref={initialRef}
              placeholder="Inserir uma url"
              _hover={{ borderColor: "purple.500" }}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            disabled={!groupName}
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
  );
};
