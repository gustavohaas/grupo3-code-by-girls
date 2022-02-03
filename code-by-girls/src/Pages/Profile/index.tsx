import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useEffect } from "react";
import { useProfile } from "../../Providers/Profile";
import { useLogin } from "../../Providers/Login";
import { CardSkills } from "../../Components/CardSkills";
import { CardWorks } from "../../Components/CardWorks";
import Header from "../../Components/Header/header";
import { TechModal } from "../../Components/Modal/TechModal";
import { WorkModal } from "../../Components/Modal/WorkModal";
import { DialogWorks } from "../../Components/Dialogs/DialogWorks";
import { DialogSkills } from "../../Components/Dialogs/DialogSkills";
import { useGroup } from "../../Providers/Groups";
import { ImEnter } from "react-icons/im";
import { useHistory } from "react-router-dom";

export const Profile = () => {
  const { getUserData, skills, works } = useProfile();
  const { data } = useLogin();
  const { groupList, createGroupData, getSubscribeGroups } = useGroup();

  const history = useHistory();

  useEffect(() => {
    getUserData(data.user.id, data.accessToken);
    createGroupData(data.user.id);
    getSubscribeGroups(data.user.id);
  }, []);

  const {
    isOpen: isSkillModalOpen,
    onOpen: onSkillModalOpen,
    onClose: onSkillModalClose,
  } = useDisclosure();

  const {
    isOpen: isWorkModalOpen,
    onOpen: onWorkModalOpen,
    onClose: onWorkModalClose,
  } = useDisclosure();

  return (
    <>
      <Header input={false} profile={false} linkedin={true} />
      <Flex
        w="100vw"
        bg="gray.50"
        justifyContent={["flex-start", "center", "center", "center"]}
        flexDir={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <Flex
          flexDir="column"
          w={["90%", "80%", "50%", "40%", "50%"]}
          mt={["10px", "", "20px", "25px"]}
          alignItems="center"
        >
          <Box h="100%" w={["100%", "90%"]} mb={["5"]}>
            <Box
              bg="purple.100"
              display="flex"
              h={["50px", "60px", "80px", "100px"]}
              flexDir="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Heading
                as="h3"
                fontSize={["md", "lg", "lg", "xl"]}
                color="gray.50"
                p="5"
              >
                Minhas Habilidades
              </Heading>
              <Box
                as="button"
                bg="none"
                _hover={{ color: "gray.200" }}
                m="10"
                fontSize="2xl"
                color="white"
                onClick={onSkillModalOpen}
              >
                {skills.length > 0 && <BsFillPlusSquareFill />}
              </Box>
            </Box>
            <Flex
              bg="white"
              border="2px solid"
              borderColor="purple.400"
              h={["130", "130", "260", "260", "298px"]}
              flexWrap={"wrap"}
              overflowY={"scroll"}
            >
              {skills.length > 0 ? (
                skills?.map((skill) => <CardSkills skill={skill} />)
              ) : (
                <DialogSkills onSkillModalOpen={onSkillModalOpen} />
              )}
            </Flex>
          </Box>

          <Box h="100%" w={["100%", "90%"]}>
            <Box
              bg="purple.100"
              display="flex"
              h={["50px", "60px", "80px", "100px"]}
              flexDir="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Heading
                as="h3"
                fontSize={["md", "lg", "lg", "xl"]}
                color="gray.50"
                p="10"
              >
                Meus Trabalhos
              </Heading>
              <Box
                as="button"
                w="15"
                _hover={{ color: "gray.200" }}
                m="10"
                fontSize="2xl"
                color="white"
                onClick={onWorkModalOpen}
              >
                {works.length > 0 && <BsFillPlusSquareFill />}
              </Box>
            </Box>
            <Flex
              bg="white"
              border="2px solid"
              borderColor="purple.400"
              h={["130", "130", "260", "260", "298px"]}
              flexWrap={"wrap"}
              overflowY={"scroll"}
            >
              {works.length > 0 ? (
                works?.map((work) => <CardWorks work={work} />)
              ) : (
                <DialogWorks onWorkModalOpen={onWorkModalOpen} />
              )}
            </Flex>
          </Box>
        </Flex>

        <Flex
          w={["100vw", "90vw", "50vw", "50vw", "30vw"]}
          flexDir="column"
          alignItems="center"
          mt={["5", "5", "9", "0", "0"]}
          pt={[0, 0, "10", "auto", "10"]}
        >
          <Box
            h="98vh"
            w={["90%", "80%", "90%", "90%", "90%"]}
            alignItems="center"
            marginX={["none", "5", "5", "5"]}
          >
            <Box
              bg="purple.100"
              display="flex"
              h={["50px", "60px", "80px", "100px"]}
              flexDir="row"
            >
              <Heading
                as="h3"
                fontSize={["md", "lg", "xl", "2xl"]}
                color="gray.50"
                p="5"
              >
                Grupos inscritos
              </Heading>
            </Box>
            <Flex
              h={["130", "130", "82%", "84%", "84%", "90%"]}
              bg="white"
              border="2px solid"
              borderColor="purple.400"
              overflowY={"scroll"}
            >
              <Flex justifyContent="center" mt="8">
                <Flex w="75%" flexDir="row" flexWrap="wrap">
                  {groupList?.map((item) => (
                    <Flex
                      w={["290px", "400px"]}
                      h={["121px", "150px"]}
                      shadow={["xl"]}
                      padding={["6px", "5px"]}
                      margin={"10px"}
                      borderRadius="10px"
                      borderColor={"purple.100"}
                      border={["1px solid", "none"]}
                      _hover={{
                        bg: "purple.50",
                      }}
                    >
                      <Box
                        w={["50px", "100px"]}
                        h={["50px", "80px"]}
                        marginRight={["10px"]}
                      >
                        <Image
                          w={["100%"]}
                          h="100%"
                          borderRadius={["100%"]}
                          src={item.url}
                          alt="Imagem da Tecnologia"
                        />
                      </Box>

                      <Flex flexDir={["column"]} ml="5">
                        <Heading
                          wordBreak={"break-word"}
                          fontSize={["20px"]}
                          mt={["5", "none"]}
                        >
                          {item.groupName}
                        </Heading>
                        <Button
                          onClick={() => {
                            createGroupData(item.groupId);
                            history.push(`/groups`);
                          }}
                          bg="purple.500"
                          color="white"
                          _hover={{ bg: "purple.100" }}
                        >
                          <Box display={["none", "block", "block", "block"]}>
                            Página do Grupo
                          </Box>
                          <Box
                            display={["block", "none", "none", "none"]}
                            fontSize="25px"
                          >
                            <ImEnter />
                          </Box>
                        </Button>
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <TechModal
        isOpen={isSkillModalOpen}
        onClose={onSkillModalClose}
        skillId=""
      />
      <WorkModal
        isOpen={isWorkModalOpen}
        onClose={onWorkModalClose}
        workId=""
      />
    </>
  );
};
