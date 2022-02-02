import { Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import secondary from "../../Assets/undraw_Dev_focus_re_6iwt 1.svg";
import { FaLayerGroup } from "react-icons/fa";

export const RegisterInfo = () => {
  return (
    <Grid
      w={["0%", "0%", "50%", "70%"]}
      paddingRight={["0px", "0px", "0px", "30px"]}
    >
      <Flex mt="4" mb="10px">
        <Image
          // w={["280px", "280px", "300px", "300px"]}
          w={["100%"]}
          boxSize={["100%"]}
          padding="0px"
          display={["none", "none", "flex", "flex"]}
          src={secondary}
          alt="working girl"
        />
      </Flex>
    </Grid>
  );
};
