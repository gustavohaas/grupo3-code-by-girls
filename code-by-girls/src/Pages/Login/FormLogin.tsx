import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";

import { FaEnvelope, FaLock, FaRegSmileBeam } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";

import { Input } from "../../Components/Form/input";
import { useLogin } from "../../Providers/Login";
import logo from "../../Assets/logo.svg";

interface SignInData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState("");

  const toast = useToast();

  const { handleLogin } = useLogin();

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const handleSignIn = (data: any) => {
    setIsLoading(true);
    handleLogin(data)
      .then((_) => {
        setIsLoading(false);
        toast({
          title: `Deu tudo certo com seu Login!`,
          status: "success",
          isClosable: true,
        });
        //history.push("/dashboard")
      })
      .catch((_) => {
        setIsLoading(false);
        toast({
          title: `Opss.. esse login nao existe!`,
          status: "error",
          isClosable: true,
        });
      });
  };

  const redirectRegister = () => {
    history.push("/register");
  };

  return (
    <>
      <Grid
        onSubmit={handleSubmit(handleSignIn)}
        as="form"
        w={["306px", "390px", "400px", "64%"]}
        alignContent="center"
        padding="15px 15px"
        border="1px solid"
        borderRadius="8px"
        borderColor="gray.100"
        bg="white"
        color="gray.600"
      >
        <Heading
          display={["flex"]}
          size="lg"
          alignItems={["center"]}
          justifyContent={["center"]}
          flexDir={["column", "column", "column", "column", "column", "row"]}
        >
          Bem vindo ao
          <Image ml="10px" w={["230px"]} src={logo} />
        </Heading>
        <VStack mt="5" spacing="5">
          <Box w="100%">
            <Input
              placeholder="Digite seu login"
              icon={FaEnvelope}
              {...register("email")}
              label="Email"
              type="email"
              error={errors.email}
            />

            {!errors.email && (
              <Text ml="1" mt="1" color="gray.300">
                Exemplo: name@email.com
              </Text>
            )}
          </Box>

          <Input
            placeholder="Digite sua senha"
            icon={FaLock}
            {...register("password")}
            label="Senha"
            type="password"
            error={errors.password}
          />
        </VStack>

        <VStack mt="5" spacing="3">
          <Button
            isLoading={isLoading}
            w="100%"
            h="60px"
            color="white"
            bgColor="purple.500"
            type="submit"
            borderRadius="8px"
            _hover={{ background: "purple.400" }}
            fontSize="1.3rem"
          >
            Logar
          </Button>

          <HStack>
            <Text w="94%" fontSize="0.9rem" color="gray.400">
              Ainda não possui uma conta?
            </Text>
            <Box color="purple.500">
              <FaRegSmileBeam />
            </Box>
          </HStack>

          <Button
            onClick={redirectRegister}
            w="98%"
            h="57px"
            color="gray.50"
            bgColor="gray.600"
            borderRadius="8px"
            _hover={{ bgColor: "gray.600", borderColor: "gray.600" }}
            fontSize="1.2rem"
          >
            Cadastrar
          </Button>
        </VStack>
      </Grid>
    </>
  );
};
