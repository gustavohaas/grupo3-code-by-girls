import { Button, Flex, Heading, Image, useDisclosure } from "@chakra-ui/react";
import logo from "../../Assets/logo.svg";
import logoMobile from "../../Assets/logoMobile.svg";
import imgHome from "../../Assets/undraw_Dev_focus_re_6iwt 1.svg";
import { useHistory } from "react-router-dom";
import { ProfileModal } from "../../Components/Modal/ProfileModal";
import { GroupModal } from "../../Components/Modal/GroupModal";
import { TechModal } from "../../Components/Modal/TechModal";

export const Home = () => {
  const history = useHistory();

  // ----------
  const {
    isOpen: isProfileModalOpen,
    onOpen: onProfileModalOpen,
    onClose: onProfileModalClose,
  } = useDisclosure();

  const {
    isOpen: isGroupModalOpen,
    onOpen: onGroupModalOpen,
    onClose: onGroupModalClose,
  } = useDisclosure();

  const {
    isOpen: isCreateTechModalOpen,
    onOpen: onCreateTechModalOpen,
    onClose: onCreateTechModalClose,
  } = useDisclosure();

  // ----------
  return (
    <Flex
      h="100vh"
      bgGradient={["linear(to-r,#f4f4f4 100%)"]}
      padding={["10px 15px", "10px 15px", "0px", "0px "]}
      alignItems="center"
      justifyContent="center"
      flexDir={["column"]}
      overflow="hidden"
    >
      <Heading display={["none", "none", "block"]}>
        <Image src={logo} alt="code-by-girls" />
      </Heading>
      <Heading mb="20px" display={["block", "block", "none"]}>
        <Image src={logoMobile} alt="code-by-girls" />
      </Heading>
      <Flex justifyContent={["center"]} alignItems={["center"]}>
        <Button
          w={["200px", "200px", "100px", "150px"]}
          color="gray.50"
          mr={["", "", "50px"]}
          bg="purple.500"
          _hover={{
            background: "purple.400",
          }}
          onClick={() => history.push("/login")}
          position="relative"
          left="65px"
          top="10px"
        >
          Logar
        </Button>
        <Image
          display={["none", "none", "block"]}
          src={imgHome}
          alt="Imagem Principal home"
          w={["", "", "400px"]}
        />
        <Button
          w={["200px", "200px", "100px", "150px"]}
          color="gray.50"
          ml={["", "", "50px"]}
          bg="purple.500"
          _hover={{
            background: "purple.400",
          }}
          onClick={() => history.push("/register")}
          position="relative"
          right="65px"
          top="60px"
        >
          Registrar
        </Button>
      </Flex>

      {/* Botões provisoriamente alocados aqui só para visualizar os modais */}
      <Button
        color="gray.50"
        ml={["", "", "50px"]}
        mb="20px"
        bg="purple.500"
        _hover={{
          background: "purple.400",
        }}
        onClick={onProfileModalOpen}
        position="relative"
        right="65px"
        top="60px"
      >
        ProfileModal
      </Button>
      <ProfileModal isOpen={isProfileModalOpen} onClose={onProfileModalClose} />

      <Button
        color="gray.50"
        bg="purple.500"
        _hover={{
          background: "purple.400",
        }}
        onClick={onGroupModalOpen}
        position="relative"
        right="65px"
        top="60px"
        mb="20px"
      >
        GroupModal
      </Button>
      <GroupModal isOpen={isGroupModalOpen} onClose={onGroupModalClose} />

      <Button
        color="gray.50"
        ml={["", "", "50px"]}
        bg="purple.500"
        _hover={{
          background: "purple.400",
        }}
        onClick={onCreateTechModalOpen}
        position="relative"
        right="65px"
        top="60px"
      >
        TechModal
      </Button>
      <TechModal
        isOpen={isCreateTechModalOpen}
        onClose={onCreateTechModalClose}
      />

      {/*  */}
    </Flex>
  );
};
