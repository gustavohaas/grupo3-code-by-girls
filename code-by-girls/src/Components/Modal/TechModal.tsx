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
import { useLogin } from "../../Providers/Login";
import { useProfile } from "../../Providers/Profile";

interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
  skillId: string;
  skillTitle?: string;
  skillLevel?: string;
}

export const TechModal = ({
  isOpen,
  onClose,
  skillId,
  skillTitle,
  skillLevel,
}: TechModalProps) => {
  const initialRef = React.useRef<any>();
  const finalRef = React.useRef<any>();

  const { createSkill, editSkill } = useProfile();
  const { data } = useLogin();

  const [tech, setTech] = useState("");
  const [techsLevel, setTechsLevel] = useState("");

  const handleEdit = () => {
    editSkill(skillId, tech, techsLevel, data.accessToken, data.user.id);
    onClose();
  };

  const handleCreate = () => {
    createSkill(data.user.id, tech, techsLevel, data.accessToken);
    onClose();
  };

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
          Criar/Editar Habilidade
        </ModalHeader>
        <ModalCloseButton color="gray.50" />
        <ModalBody>
          <FormControl>
            <FormLabel fontWeight="700" margin="0px 0px 2px 5px">
              Habilidade
            </FormLabel>
            <Input
              onChangeCapture={(e) => setTech(e.currentTarget.value)}
              ref={initialRef}
              placeholder="Nome da habilidade"
              _hover={{ borderColor: "purple.500" }}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel fontWeight="700" margin="0px 0px 2px 5px">
              Nível da habilidade
            </FormLabel>
            <Textarea
              onChangeCapture={(e) => setTechsLevel(e.currentTarget.value)}
              h="120px"
              placeholder="Nível da habilidade..."
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
              disabled={!tech}
              w="95%"
              _hover={{ bgColor: "purple.400" }}
              bgColor="purple.300"
              color="gray.50"
              onClick={handleCreate}
            >
              Criar Habilidade
            </Button>
            <Button
              w="95%"
              _hover={{ bgColor: "purple.400" }}
              bgColor="purple.300"
              color="gray.50"
              onClick={handleEdit}
            >
              Editar Habilidade
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
