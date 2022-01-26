import {
  Grid,
  Heading,
  VStack,
  Box,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "../../Components/Form/input";

interface RegisterData extends FieldValues {
  password: string;
  email: string;
}

export const RegisterForm = () => {
  const [isRegister, setIsRegister] = useState(false);

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
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    isOpen: isModalSuccessOpen,
    onOpen: onModalSuccessOpen,
    onClose: onModalSuccessClose,
  } = useDisclosure();

  const {
    isOpen: isModalErrorOpen,
    onOpen: onModalErrorOpen,
    onClose: onModalErrorClose,
  } = useDisclosure();

  const handleRegisterSubmit = (data: any) => {
    console.log(data);
    // setIsRegister(true);
  };

  const history = useHistory();

  return (
    <>
      {/* <ModalLoginSuccess
        isOpen={isModalSuccessOpen}
        onClose={onModalSuccessClose}
      />
      <ModalLoginError isOpen={isModalErrorOpen} onClose={onModalErrorClose} /> */}

      <Grid
        onSubmit={handleSubmit(handleRegisterSubmit)}
        as="form"
        w={["100%", "100%", "50%", "50%", "40%"]}
        mt="4"
        padding="30px 15px"
        border="3px solid"
        borderColor="gray.100"
        bg="white"
        color="gray.900"
      >
        <Heading size="lg">Crie sua conta</Heading>

        <VStack mt="5" spacing="5">
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
              label="Login"
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
              label="Senha"
              type="password"
              {...register("password_confirm")}
              error={errors.password_confirm}
            />
          </Box>

          <VStack w="100%" spacing="5">
            <Button
              w="100%"
              h="60px"
              color="white"
              bgColor="purple.500"
              borderRadius="8px"
              _hover={{ background: "purple.400" }}
              type="submit"
              isLoading={isRegister}
            >
              Cadastrar
            </Button>

            <Text>Já possui cadastro?</Text>

            <Button
              w="100%"
              h="60px"
              color="gray.300"
              bgColor="gray.100"
              borderRadius="8px"
              _hover={{ background: "gray.200" }}
              onClick={() => history.push("/login")}
            >
              Logar
            </Button>
          </VStack>
        </VStack>
      </Grid>
    </>
  );
};
