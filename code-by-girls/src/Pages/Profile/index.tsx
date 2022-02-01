import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useEffect } from "react";
import { useProfile } from "../../Providers/Profile";
import { useLogin } from "../../Providers/Login";
import { CardSkills } from "../../Components/CardSkills";
import { CardWorks } from "../../Components/CardWorks";
import Header from "../../Components/Header/header";

export const Profile = () => {

  const { getUserData, skills, works } = useProfile()
  const { data } = useLogin()

  useEffect(() => {
    getUserData( data.user.id, data.accessToken )
  },[])

  return (
    <>
      <Header input profile />
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
                bg="purple.100"
                display="flex"
                h="100px"
                flexDir="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Heading as="h3" fontSize="2xl" color="gray.50" p="5">
                  Minhas Habilidades
                </Heading>
                <Box
                  as="button"
                  bg="none"
                  _hover={{ color: "gray.200" }}
                  m="10"
                  fontSize="2xl"
                  color="white"
                >
                  <BsFillPlusSquareFill />
                </Box>
              </Box>
              <Flex
                bg="white"
                border="2px solid"
                borderColor="purple.400"
                h="298px"
              >
                {skills?.map((skill) => <CardSkills skill={skill} />)}
                
              </Flex>
            </Box>
            <Flex
              bg="white"
              border="2px solid"
              borderColor="purple.400"
              h={["130", "130", "260", "260", "298px"]}
            ></Flex>
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
                Meus trabalhos
              </Heading>
              <Box
                bg="purple.100"
                display="flex"
                h="100px"
                flexDir="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Heading as="h3" fontSize="2xl" color="gray.50" p="5">
                  Meus trabalhos
                </Heading>
                <Box
                  as="button"
                  w="15"
                  _hover={{ color: "gray.200" }}
                  m="10"
                  fontSize="2xl"
                  color="white"
                >
                  <BsFillPlusSquareFill />
                </Box>
              </Box>
              <Flex
                bg="white"
                border="2px solid"
                borderColor="purple.400"
                h="298px"
              >
                {works?.map((work) => <CardWorks work={work} />)}
              </Flex>
            </Box>
            <Flex
              bg="white"
              border="2px solid"
              borderColor="purple.400"
              h={["130", "130", "260", "260", "298px"]}
            ></Flex>
          </Box>
        </Flex>

        <Flex
          w={["100vw", "90vw", "50vw", "50vw", "30vw"]}
          flexDir="column"
          alignItems="center"
          mt={["5", "5", "9", "0", "0"]}
          pt={[0, 0, "10", "auto", "0"]}
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
            ></Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};