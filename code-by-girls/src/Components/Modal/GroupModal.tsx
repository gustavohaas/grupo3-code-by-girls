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
import { useGroup } from "../../Providers/Groups";
import { useLogin } from "../../Providers/Login";

interface GroupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GroupModal = ({ isOpen, onClose }: GroupModalProps) => {
  const initialRef = React.useRef<any>();
  const finalRef = React.useRef<any>();

  const [group, setGroup] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [groupImg, setGroupImg] = useState("");
  const { createGroup, dataGroup } = useGroup();

  const { data } = useLogin();
  const { id } = data.user;

  const newGroupData = {
    userId: id,
    groupName: group,
    description: groupDescription,
    url: groupImg,
  };

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
              Grupo
            </FormLabel>
            <Input
              maxLength={25}
              onChangeCapture={(e) => setGroup(e.currentTarget.value)}
              ref={initialRef}
              placeholder="Nome do grupo"
              _hover={{ borderColor: "purple.500" }}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel fontWeight="700" margin="0px 0px 2px 5px">
              Descrição
            </FormLabel>
            <Textarea
              onChangeCapture={(e) =>
                setGroupDescription(e.currentTarget.value)
              }
              h="120px"
              placeholder="Descrição do grupo..."
              maxLength={132}
              _hover={{ borderColor: "purple.500" }}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel fontWeight="700" margin="0px 0px 2px 5px">
              Imagem do grupo z
            </FormLabel>
            <Input
              onChangeCapture={(e) => setGroupImg(e.currentTarget.value)}
              ref={initialRef}
              placeholder="Inserir uma url"
              _hover={{ borderColor: "purple.500" }}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => createGroup(newGroupData)}
            disabled={!group}
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
