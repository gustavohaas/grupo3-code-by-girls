import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useEffect } from "react";
import { CardSkill } from "./cardTesk";
import { useProfile } from "../../Providers/Profile";
import { useLogin } from "../../Providers/Login";
import { CardWork } from "./cardWork";

export const Profile = () => {

  const { getUserData, skills, works } = useProfile()
  const { data } = useLogin()

  useEffect(() => {
    getUserData( data.user.id, data.accessToken )
  },[])

  return (
    <Flex w="100vw" h="100vh" bg="gray.50" justifyContent="center">
      <Flex flexDir="column" w="65%" marginY="5">
        <Box h="100%" w="90%">
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
            {skills?.map((skill) => <CardSkill skill={skill} />)}
            
          </Flex>
        </Box>

        <Box w="90%">
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
            {works?.map((work) => <CardWork work={work} />)}
          </Flex>
        </Box>
      </Flex>
      <Flex w="20vw">
        <Box m="5" h="100vh" w="90%">
          <Box
            bg="purple.100"
            display="flex"
            h="100px"
            flexDir="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading as="h3" fontSize="2xl" color="gray.50" p="5">
              Grupos inscritos
            </Heading>
          </Box>
          <Flex
            h="84.1%"
            bg="white"
            border="2px solid"
            borderColor="purple.400"
          >
            
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
