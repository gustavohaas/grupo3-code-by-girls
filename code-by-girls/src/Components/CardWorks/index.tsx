import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { FaRegEdit, FaTrash } from "react-icons/fa";
import { useLogin } from "../../Providers/Login";
import { useProfile } from "../../Providers/Profile";
import { WorkModal } from "../Modal/WorkModal";

interface Work {
  url?: string;
  userId: string;
  title: string;
  description: string;
  id: string;
}

interface PropsWorks {
  work: Work;
}

export const CardWorks = ({ work }: PropsWorks) => {
  const { deleteWork } = useProfile();
  const { data } = useLogin();

  const {
    isOpen: isWorkModalOpen,
    onOpen: onWorkModalOpen,
    onClose: onWorkModalClose,
  } = useDisclosure();

  return (
    <Flex
      w={["250px"]}
      h="150px"
      shadow={["lg"]}
      padding={["5px"]}
      margin={"10px"}
      _hover={{
        background: "gray.100",
      }}
      transition={["0.51s"]}
      position={"relative"}
    >
      <Flex
        fontSize={["20px"]}
        position={"absolute"}
        right={["0"]}
        top={["-15px"]}
      >
        <Box
          cursor={"pointer"}
          marginRight={["10px"]}
          onClick={onWorkModalOpen}
          marginTop="10px"
        >
          <FaRegEdit />
        </Box>

        <Box
          cursor={"pointer"}
          as="button"
          onClick={() => deleteWork(work.id, data.accessToken, data.user.id)}
          marginTop="10px"
        >
          <FaTrash />
        </Box>
      </Flex>

      <Box objectFit={["cover"]} w={["100px"]} marginRight={["10px"]}>
        <Image
          w={["100%"]}
          h="100%"
          objectFit="contain"
          borderRadius={["100%"]}
          src="https://png.pngtree.com/element_our/png_detail/20181015/graduation-hat-material-design-png_131387.jpg"
          alt="Imagem da Tecnologia"
        />
      </Box>

      <Flex flexDir={["column"]}>
        <Heading wordBreak={"break-word"} fontSize={["18px"]}>
          {work.title}
        </Heading>
        <Text fontSize={["14px"]} wordBreak={"break-word"}>
          {work.description}
        </Text>
      </Flex>
      <WorkModal
        isOpen={isWorkModalOpen}
        onClose={onWorkModalClose}
        workId={work.id}
        workTitle={work.title}
        workDescriptionProp={work.description}
      />
    </Flex>
  );
};
