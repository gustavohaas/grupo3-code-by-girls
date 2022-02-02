import { Box, Flex, Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import { CardGroup } from "../../Components/CardGroups";
import Header from "../../Components/Header/header";
import { SkeletonSearch } from "../../Components/Skeletons/SkeletonSearch";
import { useDashboard } from "../../Providers/Dashboard";
import { useLogin } from "../../Providers/Login";
import { useProfile } from "../../Providers/Profile";

const Dashboard = () => {
  const { groups, loadGroups, searchNotFound, notFound } = useDashboard();
  const { data } = useLogin();
  const { getUserData } = useProfile();

  useEffect(() => {
    getUserData(data.user.id, data.accessToken);
    loadGroups(data.user.id, data.accessToken);
  }, []);

  console.log(groups);

  return (
    <Grid>
      <Header input profile />
      <Flex justifyContent="center" mt="8">
        <Flex w="75%" flexDir="row" flexWrap="wrap">
          {notFound ? (
            <SkeletonSearch />
          ) : (
            groups?.map((item) => (
              <Box key={item.id}>
                <CardGroup group={item} />
              </Box>
            ))
          )}
        </Flex>
      </Flex>
    </Grid>
  );
};

export default Dashboard;
