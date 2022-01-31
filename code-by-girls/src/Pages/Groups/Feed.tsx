import { Flex, Image, Heading, Input, Box } from "@chakra-ui/react";
import { MdSend } from "react-icons/md";
import { useEffect, useState } from "react";
import group from "../../Assets/dinamica-de-grupo-mini-750x387 6 (2).png";
import { api } from "../../Services/api";
import { useLogin } from "../../Providers/Login/index";

interface CommentData {
  userId: number;
  name: string;
  comment: string;
  groupId: number;
}

//groupId tem que vir do Criar Grupo

export const Feed = () => {
  const [newComment, setNewComment] = useState("");
  const { data } = useLogin();
  const { id, userName } = data.user;

  const handleComment = ({ userId, name, comment, groupId }: CommentData) => {
    api
      .post("/comments", { id, userName, newComment, groupId })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <Flex
      justifyContent={["center"]}
      alignItems={["center"]}
      flexDirection={["column"]}
      border="3px solid"
      borderColor="gray.100"
      w="80vw"
      minHeight="296px"
      padding={"10px"}
      m="20px"
    >
      {/* FEED */}
      <Flex
        backgroundColor="#D4C1E6"
        padding={"5px"}
        w="100%"
        h="161px"
        mb="50px"
        borderRadius={"5px"}
        direction={["column"]}
        wrap={["nowrap"]}
      >
        <Flex direction={["row"]} alignItems={["center"]}>
          <Image
            src={group}
            alt="groups"
            w="40px"
            h="36.81px"
            margin={"10px"}
          ></Image>
          <Heading fontSize={"1rem"}>User</Heading>
        </Flex>
        <Box padding={"10px"}>
          <p></p>
        </Box>
      </Flex>
      <Flex
        justifyContent={["space-between"]}
        alignItems={["center"]}
        backgroundColor="#c4c4c4"
        w="100%"
        mw="314px"
        h="60px"
        padding={"10px"}
      >
        <Image src={group} alt="groups" />
        <Input
          placeholder="Mensagem"
          onChange={(e) => setNewComment(e.target.value)}
          backgroundColor="gray.50"
          mw="212px"
          h="31px"
          m="10px"
          type={"text"}
        ></Input>

        <MdSend
          onClick={() => handleComment}
          cursor={"pointer"}
          size={"21px"}
          color="#106cdc
"
        />
      </Flex>
    </Flex>
  );
};
