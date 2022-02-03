import { Box, Flex, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CardGroup } from "../../Components/CardGroups";
import Header from "../../Components/Header/header";
import { SkeletonGroups } from "../../Components/Skeletons/SkeletonGroups";
import { SkeletonSearch } from "../../Components/Skeletons/SkeletonSearch";
import { useDashboard } from "../../Providers/Dashboard";
import { useLogin } from "../../Providers/Login";
import { useProfile } from "../../Providers/Profile";

const Dashboard = () => {
  const { groups, loadGroups, searchNotFound, notFound } = useDashboard();
  const { data } = useLogin();
  const { getUserData } = useProfile();
  const [loadingGroups, setLoadingGroups] = useState(true);

  useEffect(() => {
    getUserData(data.user.id, data.accessToken);
    loadGroups(data.user.id, data.accessToken).then((_) =>
      setLoadingGroups(false)
    );
  }, []);

  return (
    <Grid>
      <Header input profile />
      <Flex justifyContent="center" mt="8">
        <Flex w="75%" flexDir="row" flexWrap="wrap">
          {notFound ? (
            <SkeletonSearch />
          ) : loadingGroups ? (
            <SkeletonGroups repeatCount={6} m="10px" />
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
