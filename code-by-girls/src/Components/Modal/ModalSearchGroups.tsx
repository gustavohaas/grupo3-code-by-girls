import {
  Button,
  HStack,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface ModalSearchGroupsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalSearchGroups = ({
  isOpen,
  onClose,
}: ModalSearchGroupsProps) => {

  const initialRef = React.useRef<any>();
  const finalRef = React.useRef<any>();

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent w={["290px", "340px", "360px", "400px"]}>
        <HStack
          spacing={"0px"}
          padding={"0px"}
          border="2px white solid"
          borderRadius={"8px"}
          bgColor={"gray.50"}
          h={"40px"}
        >
          <Input
            border="none"
            bgColor={"gray.50"}
            h={"100%"}
            placeholder="Pesquise por grupos"
          />
          <Button
            h={"100%"}
            margin={"2px"}
            bgColor={"purple.500"}
            color={"gray.50"}
            _hover={{ bgColor: "purple.500", color: "gray.50" }}
            fontSize={"30px"}
          >
            <AiOutlineSearch />
          </Button>
        </HStack>
      </ModalContent>
    </Modal>
  );
};
