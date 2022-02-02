import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";

import { FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import { useHistory } from "react-router-dom";
import { Input } from "../../Components/Form/input";

import logo from "../../Assets/logo.svg";
import { useLogin } from "../../Providers/Login";

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
        mt="4"
        w={["100%", "100%", "40%", "40%"]}
        padding="30px 15px"
        border="3px solid"
        borderColor="gray.200"
        bg="white"
        color="gray.900"
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

        <VStack mt="5" spacing="5">
          <Button
            isLoading={isLoading}
            w="100%"
            h="60px"
            color="white"
            bgColor="purple.500"
            type="submit"
            borderRadius="8px"
            _hover={{ background: "purple.400" }}
          >
            Enviar
          </Button>

          <Text color="gray.400">Ainda não possui uma conta?</Text>

          <Button
            w="100%"
            h="60px"
            color="gray.300"
            bgColor="gray.100"
            borderRadius="8px"
            _hover={{ background: "gray.200" }}
            onClick={redirectRegister}
          >
            Cadastrar
          </Button>
        </VStack>
      </Grid>
    </>
  );
};
