import { Grid, Image } from "@chakra-ui/react";
import secondary from "../../Assets/undraw_Dev_focus_re_6iwt 1.svg";

export const LoginInfo = () => {
  return (
    <Grid
      w={["100%", "100%", "50%", "50%"]}
      paddingRight={["0px", "0px", "100px", "100px"]}
    >
      <Image w={["100%"]} src={secondary} alt="doit" boxSize={["100%"]} />
    </Grid>
  );
};
