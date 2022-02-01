import { Button, HStack, Input, ModalContent } from "@chakra-ui/react";
import { useState } from "react";
import { IconType } from "react-icons";
interface InputModalProps {
  close: () => void;
  active: (text: string) => void;
  Icon: IconType;
}
const InputModal = ({ close, active, Icon }: InputModalProps) => {
  const [text, setText] = useState("");
  return (
    <ModalContent>
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
          onChangeCapture={(e) => setText(e.currentTarget.value)}
        />
        <Button
          h={"100%"}
          margin={"2px"}
          bgColor={"purple.500"}
          color={"gray.900"}
          _hover={{ bgColor: "purple.500", color: "gray.50" }}
          fontSize={"30px"}
          onClick={() => {
            active(text);
            close();
          }}
        >
          {<Icon />}
        </Button>
      </HStack>
    </ModalContent>
  );
};

export default InputModal;
