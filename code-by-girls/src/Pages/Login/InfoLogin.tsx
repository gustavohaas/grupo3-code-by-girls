import { Grid, Image } from "@chakra-ui/react";
import secondary from "../../Assets/undraw_Dev_focus_re_6iwt 1.svg";

export const LoginInfo = () => {
  return (
    <Grid
      w={["0%", "0%", "50%", "70%"]}
      paddingRight={["0px", "0px", "0px", "100px"]}
    >
      <Image
        w={["100%"]}
        boxSize={["100%"]}
        padding="0px"
        display={["none", "none", "flex", "flex"]}
        src={secondary}
        alt="working girl"
      />
    </Grid>
  );
};
