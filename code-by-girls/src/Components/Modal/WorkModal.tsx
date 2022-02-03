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
  Flex
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useLogin } from "../../Providers/Login";
import { useProfile } from "../../Providers/Profile";

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  workId: string;
  workTitle?: string;
  workDescriptionProp?: string;
}

export const WorkModal = ({ isOpen, onClose, workId, workTitle, workDescriptionProp }: WorkModalProps) => {
  const initialRef = React.useRef<any>();
  const finalRef = React.useRef<any>();

  const { createWork, editWork } = useProfile();
  const { data } = useLogin();

  const [works, setWorks] = useState("");
  const [workDescription, setWorkDescription] = useState("");

  const handleEdit = () => {
    editWork(workId, works, workDescription, data.accessToken, data.user.id)
    onClose()
  }

  const handleCreate = () => {
    createWork(data.user.id, works, workDescription, data.accessToken)
    onClose()
  }

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
          Criar/Editar Trabalho
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
        </ModalBody>

        <ModalFooter>
        <Flex
            w="75%"
            h="90px"
            flexDirection="column"
            justifyContent="space-between"
        >
          <Button
            disabled={!works}
            w="75%"
            _hover={{ bgColor: "purple.400" }}
            bgColor="purple.300"
            color="gray.50"
            mr={3}
            onClick={handleCreate}
          >
            Criar Trabalho
          </Button>

          <Button
            w="75%"
            _hover={{ bgColor: "purple.400" }}
            bgColor="purple.300"
            color="gray.50"
            onClick={handleEdit}
          >
            Editar Trabalho
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
