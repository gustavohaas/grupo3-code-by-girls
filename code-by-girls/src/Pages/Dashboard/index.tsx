import { Box, Flex, Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import { CardGroup } from "../../Components/CardGroups";
import Header from "../../Components/Header/header";
import { useDashboard } from "../../Providers/Dashboard";
import { useLogin } from "../../Providers/Login";

const Dashboard = () => {
  const { groups, loadGroups } = useDashboard();
  const { data } = useLogin();

  useEffect(() => {
    // loadGroups(data.user.id).catch((err) => console.log(err));
  }, []);

  return (
    <Grid>
      <Header input profile />
      <Flex justifyContent="center" mt="8">
        <Flex w="75%" flexDir="row" flexWrap="wrap">
          {groups.map((item) => (
            <Box key={item.id}>
              <CardGroup group={item} />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Grid>
  );
};

export default Dashboard;
