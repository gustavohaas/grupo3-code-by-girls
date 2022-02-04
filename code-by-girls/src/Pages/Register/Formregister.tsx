import {
  Grid,
  Heading,
  VStack,
  Box,
  Button,
  useToast,
  theme,
} from "@chakra-ui/react";

import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import * as yup from "yup";

import { useRegister } from "../../Providers/Register/index";
import { Input } from "../../Components/Form/input";

export const RegisterForm = () => {
  const [isRegister, setIsRegister] = useState(false);

  const { handleRegister } = useRegister();
  const toast = useToast();
  const history = useHistory();

  const schema = yup.object().shape({
    userName: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("email inválido"),
    password: yup.string().required("Insira uma senha"),
    password_confirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não compatível.")
      .required("Confirmar senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegisterSubmit = ({ email, password, userName }: any) => {
    const newData = { email, password, userName };
    setIsRegister(true);
    handleRegister(newData)
      .then((_) => {
        setIsRegister(false);
        toast({
          title: `Deu tudo certo com seu registro!`,
          status: "success",
          isClosable: true,
        });
        history.push("/login");
      })
      .catch((_) => {
        setIsRegister(false);
        toast({
          title: `Opss.. esse email já existe!`,
          status: "error",
          isClosable: true,
        });
      });
  };

  return (
    <Grid
      onSubmit={handleSubmit(handleRegisterSubmit)}
      as="form"
      w={["306px", "390px", "400px", "74%"]}
      maxW="420px"
      h={["95%", "97%"]}
      alignContent="center"
      padding="15px 15px"
      border="1px solid"
      borderRadius="8px"
      borderColor="gray.100"
      bg="white"
      color="purple.500"
    >
      <Heading
        size="xl"
        fontFamily={theme.fonts.body}
        fontWeight="500"
        textAlign="center"
      >
        Crie sua conta
      </Heading>

      <VStack spacing="3">
        <Box w="100%">
          <Input
            placeholder="Digite seu nome"
            icon={FaUser}
            label="Nome"
            type="text"
            {...register("userName")}
            error={errors.userName}
          />
        </Box>

        <Box w="100%">
          <Input
            placeholder="Digite seu melhor email"
            icon={FaEnvelope}
            label="Email"
            type="email"
            {...register("email")}
            error={errors.email}
          />
        </Box>

        <Box w="100%">
          <Input
            placeholder="Digite sua melhor senha"
            icon={FaLock}
            label="Senha"
            type="password"
            {...register("password")}
            error={errors.password}
          />
        </Box>

        <Box w="100%">
          <Input
            placeholder="Confirme sua senha"
            icon={FaLock}
            label="Confirmação de senha"
            type="password"
            {...register("password_confirm")}
            error={errors.password_confirm}
          />
        </Box>

        <VStack w="100%" spacing="2">
          <Button
            w="98%"
            h="57px"
            color="white"
            bgColor="purple.500"
            borderRadius="8px"
            _hover={{ background: "purple.400" }}
            type="submit"
            isLoading={isRegister}
            fontSize="1.2rem"
          >
            Cadastrar
          </Button>

          <Button
            w="98%"
            h="57px"
            color="gray.50"
            bgColor="gray.600"
            borderRadius="8px"
            _hover={{ bgColor: "gray.600", borderColor: "gray.600" }}
            onClick={() => history.push("/login")}
            fontSize="1.2rem"
          >
            Logar
          </Button>
        </VStack>
      </VStack>
    </Grid>
  );
};
