import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
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
import { CardGroupsPerfil } from "../../Components/CardGroupsPerfil";

export const Profile = () => {
  const { getUserData, skills, works } = useProfile();
  const { data } = useLogin();
  const { groupList, createGroupData, getSubscribeGroups } = useGroup();

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
        justifyContent={["flex-start", "flex-start", "center", "center"]}
        flexDir={["column", "column", "row", "row"]}
        alignItems={["center", "flex-start"]}
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
              h={["340", "340"]}
              flexWrap={"wrap"}
              overflowY={"scroll"}
              justifyContent={["center", "center", "justify-between"]}
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
              h={["340", "340"]}
              flexWrap={"wrap"}
              overflowY={"scroll"}
              justifyContent={["center", "center", "justify-between"]}
              flexDir={"column"}
              alignItems={"center"}
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
          flexDir="row"
          alignItems="center"
          mt={["5", "5", "9"]}
        >
          <Box
            h="100%"
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
              h={["320px"]}
              bg="white"
              border="2px solid"
              borderColor="purple.400"
              overflowY={"scroll"}
            >
              <Flex alignItems={"flex-start"} justifyContent="center">
                <Flex
                  padding={"10px 0"}
                  w="100%"
                  mb="20px"
                  flexDir="row"
                  flexWrap="wrap"
                >
                  {groupList?.map((item) => (
                    <CardGroupsPerfil item={item} />
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
