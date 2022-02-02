import {
  Button,
  Heading,
  HStack,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuList,
  Grid,
  useDisclosure,
} from "@chakra-ui/react";

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { GrLogout, GrGroup } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import { useLogin } from "../../Providers/Login";
import { GroupModal } from "../Modal/GroupModal";
import { ModalSearchGroups } from "../Modal/ModalSearchGroups";
import { theme } from "../../Styles/theme";
import DevGirls from "../../Assets/devgirls.png";

interface HeaderProps {
  input: boolean;
  profile: boolean;
}

const Header = ({ input, profile }: HeaderProps) => {
  const { handleSignOut } = useLogin();
  let history = useHistory();

  const {
    isOpen: isGroupModalOpen,
    onOpen: onGroupModalOpen,
    onClose: onGroupModalClose,
  } = useDisclosure();

  const {
    isOpen: isModalSearchGroupsOpen,
    onOpen: onModalSearchGroupsOpen,
    onClose: onModalSearchGroupsClose,
  } = useDisclosure();

  function handleClick(destiny: string) {
    history.push(destiny);
  }
  return (
    <>
      <GroupModal 
        isOpen={isGroupModalOpen} 
        onClose={onGroupModalClose} />
      <ModalSearchGroups
        isOpen={isModalSearchGroupsOpen}
        onClose={onModalSearchGroupsClose}
      />
      <Heading
        h={"120px"}
        m="3px 2px"
        borderRadius="12px"
        bgColor={"gray.600"}
        borderColor="purple.500"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={["0px 30px", "0px 30px", "0px 50px"]}
      >
        <Grid mr="10px">
          <Image
            src={DevGirls}
            w={["80px", "90px", "90px"]}
            color="gray.200"
            bgColor="white"
            borderRadius="14%"
          />
        </Grid>
        <HStack
          spacing={["0px", "30px", "50px", "50px"]}
          w={["130px", "max-content"]}
          justifyContent="space-around"
        >
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
                w={["140px", "161px", "170px", "200px", "200px"]}
                h="100%"
                fontSize={["0.9rem", "1rem"]}
                placeholder="Pesquise por grupos"
                _placeholder={{ color: "gray.600", fontFamily: "Roboto" }}
              />
              <Button
                display={["flex", "flex", "flex", "flex"]}
                w={["54px", "40px", "64px"]}
                h="40px"
                margin="2px"
                padding="0px"
                color="gray.50"
                border="1px solid"
                borderColor="gray.50"
                bgColor="purple.500"
                _hover={{
                  bgColor: "transparent",
                  color: "purple.500",
                  borderColor: "purple.500",
                  border: "1px solid",
                  fontWeight: "900",
                }}
                fontSize={"30px"}
              >
                <AiOutlineSearch
                  onClick={onModalSearchGroupsOpen}
                  fontSize="1.8rem"
                />
              </Button>

              <Button
                display={["none", "none", "none", "none"]}
                h={"100%"}
                margin="2px"
                bgColor={"gray.600"}
                color={"gray.900"}
                _hover={{ bgColor: "gray.600", color: "gray.50" }}
                fontSize={"28px"}
              >
                <AiOutlineSearch />
              </Button>
            </HStack>
          )}
          <Menu>
            <MenuButton
              fontSize={["20px", "30px"]}
              as={Button}
              bgColor="purple.500"
              border="1px solid"
              color="white"
              _hover={{ bgColor: "gray.50", color: "purple.500" }}
              fontFamily={theme.fonts.body}
            >
              <AiOutlineMenu />
            </MenuButton>

            <MenuList
              marginTop="25px"
              w="300px"
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              {profile ? (
                <HStack
                  borderBottom="1px solid"
                  w="250px"
                  justifyContent="space-between"
                  marginTop="10px"
                >
                  <Button
                    onClick={() => handleClick("/profile")}
                    _hover={{
                      bgColor: "gray.50",
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
                  borderBottom="1px solid"
                  w="250px"
                  justifyContent="space-between"
                >
                  <Button
                    onClick={() => handleClick("/dashboard")}
                    _hover={{
                      bgColor: "gray.50",
                      color: "gray.900",
                      textDecoration: "underline",
                    }}
                  >
                    Voltar ao Menu
                  </Button>
                  <Image
                    bgColor={"black"}
                    w="25px"
                    height={"25px"}
                    borderRadius={"100px"}
                  />
                </HStack>
              )}
              <HStack
                borderBottom={"1px solid"}
                w={"250px"}
                justifyContent={"space-between"}
              >
                <Button
                  onClick={onGroupModalOpen}
                  _hover={{
                    bgColor: "gray.50",
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
                  onClick={() => handleSignOut()}
                  _hover={{
                    bgColor: "gray.50",
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
      </Heading>
    </>
  );
};

export default Header;
