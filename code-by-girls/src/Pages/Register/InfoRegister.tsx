import { Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import secondary from "../../Assets/undraw_Dev_focus_re_6iwt 1.svg";
import { FaLayerGroup } from "react-icons/fa";

export const RegisterInfo = () => {
  return (
    <Grid
      w={["100%", "100%", "50%", "50%"]}
      paddingRight={["0px", "0px", "50px", "100px"]}
    >
      <Flex mt="4" mb="10px">
        <Image src={secondary} />
      </Flex>
    </Grid>
  );
};
