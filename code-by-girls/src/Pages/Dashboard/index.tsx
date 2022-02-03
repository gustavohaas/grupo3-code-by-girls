import { Box, Flex, Grid, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CardGroup } from "../../Components/CardGroups";
import Header from "../../Components/Header/header";
import { ModalGroupsDetails } from "../../Components/Modal/ModalGroupsDetails";
import { SkeletonGroups } from "../../Components/Skeletons/SkeletonGroups";
import { SkeletonSearch } from "../../Components/Skeletons/SkeletonSearch";
import { useDashboard } from "../../Providers/Dashboard";
import { useLogin } from "../../Providers/Login";
import { useProfile } from "../../Providers/Profile";

interface Groups {
  url?: string;
  groupName: string;
  description: string;
  id: number;
}

const Dashboard = () => {
  const { groups, loadGroups, searchNotFound, notFound } = useDashboard();
  const { data } = useLogin();
  const { getUserData } = useProfile();
  const [loadingGroups, setLoadingGroups] = useState(true);

  const [selectedGroup, setSelectedGroup] = useState<Groups>({} as Groups);

  useEffect(() => {
    getUserData(data.user.id, data.accessToken);
    loadGroups(data.accessToken).then((_) => setLoadingGroups(false));
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (group: Groups) => {
    setSelectedGroup(group);
    onOpen();
  };

  return (
    <Grid>
      <Header input profile />
      <ModalGroupsDetails
        group={selectedGroup}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex justifyContent="center" mt="8">
        <Flex w="75%" flexDir="row" flexWrap="wrap">
          {notFound ? (
            <SkeletonSearch />
          ) : loadingGroups ? (
            <SkeletonGroups repeatCount={groups.length} m="10px" />
          ) : (
            groups?.map((item) => (
              <Box key={item.id}>
                <CardGroup onClick={handleClick} group={item} />
              </Box>
            ))
          )}
        </Flex>
      </Flex>
    </Grid>
  );
};

export default Dashboard;
