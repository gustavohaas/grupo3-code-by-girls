import {
  Button,
  Text,
  Heading,
  HStack,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuList,
  Grid,
  Modal,
  ModalOverlay,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { GrLogout, GrGroup } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useLogin } from "../../Providers/Login";
import InputModal from "../Header/input";
import { useState } from "react";
import { useDashboard } from "../../Providers/Dashboard";
import { theme } from "../../Styles/theme";
import { GroupModal } from "../Modal/GroupModal";
import { ProfileImageModal } from "../Modal/ProfileImageModal";
import { useProfile } from "../../Providers/Profile";
import { ProfileLinkedinModal } from "../Modal/ProfileLinkedinModal";
import { MdOutlineDashboard } from "react-icons/md";
interface HeaderProps {
  input: boolean;
  profile: boolean;
  linkedin: boolean;
}

const Header = ({ input, profile, linkedin }: HeaderProps) => {
  const { handleSignOut, data } = useLogin();
  const { SearchBoxDashboard } = useDashboard();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { profileImageUrl, profileLinkedin } = useProfile();
  let history = useHistory();

  const {
    isOpen: isGroupModalOpen,
    onOpen: onGroupModalOpen,
    onClose: onGroupModalClose,
  } = useDisclosure();

  const {
    isOpen: isProfileImageModalOpen,
    onOpen: onProfileImageModalOpen,
    onClose: onProfileImageModalClose,
  } = useDisclosure();

  const {
    isOpen: isProfileLinkedinModalOpen,
    onOpen: onProfileLinkedinModalOpen,
    onClose: onProfileLinkedinModalClose,
  } = useDisclosure();

  function handleClick(destiny: string) {
    history.push(destiny);
  }
  const [text, setText] = useState("");

  return (
    <Heading
      w={"100vw"}
      h={"100px"}
      bgColor={"purple.500"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"0px 20px"}
    >
      <HStack spacing={"0px"} mr={"10px"}>
        <Grid mr="10px">
          <Grid mr="10px">
            <Menu>
              <MenuButton>
                {profileImageUrl ? (
                  <Image
                    src={profileImageUrl}
                    w={["80px", "90px", "90px"]}
                    h={["80px", "90px", "90px"]}
                    color="gray.200"
                    bgColor="white"
                    borderRadius="80%"
                  />
                ) : (
                  <Grid color={"gray.200"}>
                    <FaUserCircle fontSize={"5rem"} color="gray.200" />
                  </Grid>
                )}
              </MenuButton>
              <MenuList>
                <Flex flexDir="column">
                  <HStack
                    borderBottom={"1px solid"}
                    w={"250px"}
                    justifyContent={"space-between"}
                    marginTop={"10px"}
                    marginX="5px"
                  >
                    <Button
                      bg="none"
                      onClick={onProfileImageModalOpen}
                      hover={{
                        color: "gray.900",
                        textDecoration: "underline",
                      }}
                    >
                      Alterar imagem
                    </Button>
                    <CgProfile fontSize="25px" />
                  </HStack>
                  <HStack
                    borderBottom={"1px solid"}
                    w={"250px"}
                    justifyContent={"space-between"}
                    marginTop={"10px"}
                    marginX="5px"
                  >
                    <Button
                      bg="none"
                      onClick={onProfileLinkedinModalOpen}
                      hover={{
                        color: "gray.900",
                        textDecoration: "underline",
                      }}
                    >
                      Alterar Linkedin
                    </Button>
                    <BsLinkedin fontSize="25px" />
                  </HStack>
                </Flex>
              </MenuList>
            </Menu>
          </Grid>
        </Grid>
        <Text fontWeight={"normal"} fontSize={"25px"} color={"gray.200"}>
          {data.user.userName}
        </Text>
      </HStack>
      {profileLinkedin ? (
        <Text fontWeight={"normal"} fontSize={"25px"} color={"gray.200"}>
          Linkedin: {profileLinkedin}
        </Text>
      ) : (
        <></>
      )}
      <HStack spacing={["0px", "50px", "50px", "50px"]}>
        {input && (
          <HStack
            spacing={"0px"}
            padding={"0px"}
            border={[
              "none",
              "2px white solid",
              "2px white solid",
              "2px white solid",
            ]}
            borderRadius={"8px"}
            bgColor={"gray.50"}
            h={"40px"}
          >
            <Input
              display={["none", "flex", "flex", "flex"]}
              border="none"
              bgColor={"gray.50"}
              h={"100%"}
              placeholder="Pesquise por grupos"
              onChangeCapture={(e) => setText(e.currentTarget.value)}
            />
            <Button
              display={["none", "flex", "flex", "flex"]}
              h={"100%"}
              margin={"2px"}
              bgColor={"purple.500"}
              color={"gray.900"}
              _hover={{ bgColor: "purple.500", color: "gray.50" }}
              fontSize={"30px"}
              onClick={() => SearchBoxDashboard(text, data.accessToken)}
            >
              <AiOutlineSearch />
            </Button>

            <Button
              display={["flex", "none", "none", "none"]}
              h={"100%"}
              margin="2px"
              bgColor={"purple.500"}
              color={"gray.900"}
              _hover={{ bgColor: "purple.500", color: "gray.50" }}
              fontSize={"28px"}
              onClick={onOpen}
            >
              <AiOutlineSearch />
            </Button>
          </HStack>
        )}
        <Menu>
          <MenuButton
            fontSize={["20px", "30px"]}
            as={Button}
            bgColor={"purple.500"}
            border="1px solid"
            color="white"
            _hover={{ bgColor: "gray.50", color: "purple.500" }}
            fontFamily={theme.fonts.body}
          >
            <AiOutlineMenu />
          </MenuButton>

          <MenuList
            marginTop={"25px"}
            w={"300px"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            {profile ? (
              <HStack
                borderBottom={"1px solid"}
                w={"250px"}
                justifyContent={"space-between"}
                marginTop={"10px"}
              >
                <Button
                  onClick={() => handleClick("/profile")}
                  bg="none"
                  _hover={{
                    color: "gray.900",
                    textDecoration: "underline",
                  }}
                >
                  Vizualizar Perfil
                </Button>
                <CgProfile fontSize="25px" />
              </HStack>
            ) : (
              <HStack
                borderBottom={"1px solid"}
                w={"250px"}
                justifyContent={"space-between"}
              >
                <Button
                  onClick={() => handleClick("/dashboard")}
                  bg="none"
                  _hover={{
                    color: "gray.900",
                    textDecoration: "underline",
                  }}
                >
                  Voltar ao Menu
                </Button>
                <MdOutlineDashboard fontSize="25px" />
              </HStack>
            )}
            <HStack
              borderBottom={"1px solid"}
              w={"250px"}
              justifyContent={"space-between"}
            >
              <Button
                bg="none"
                onClick={onGroupModalOpen}
                _hover={{
                  color: "gray.900",
                  textDecoration: "underline",
                }}
              >
                Criar Grupo
              </Button>
              <GrGroup fontSize="25px" />
            </HStack>
            <HStack
              borderBottom={"1px solid"}
              w={"250px"}
              justifyContent={"space-between"}
              marginBottom={"15px"}
            >
              <Button
                bg="none"
                onClick={() => handleSignOut()}
                _hover={{
                  color: "gray.900",
                  textDecoration: "underline",
                }}
              >
                Sair
              </Button>
              <GrLogout fontSize="25px" height={"25px"} />
            </HStack>
          </MenuList>
        </Menu>
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <InputModal
          close={onClose}
          Icon={AiOutlineSearch}
          active={SearchBoxDashboard}
        />
      </Modal>
      <GroupModal isOpen={isGroupModalOpen} onClose={onGroupModalClose} />
      <ProfileImageModal
        isOpen={isProfileImageModalOpen}
        onClose={onProfileImageModalClose}
      />
      <ProfileLinkedinModal
        isOpen={isProfileLinkedinModalOpen}
        onClose={onProfileLinkedinModalClose}
      />
    </Heading>
  );
};

//
export default Header;
