import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../../Services/api";
import { useLogin } from "../Login/index";

interface Comment {
  userId: number;
  name: string;
  comment: string;
  groupId: number;
  id: number;
}
interface SubGroups {
  groupId: number;
  groupName: string;
  url?: string;
}

interface Subscribe {
  userId: number;
  name: string;
  groupId: number;
}

interface Group {
  userId: number;
  groupName: string;
  description: string;
  comments: Comment[];
  subscribe: Subscribe[];
  id: number;
  url?: string;
}

interface GroupsProviderProps {
  createGroup: ({ userId, groupName, description }: any) => void;
  dataGroup: Group;
  createGroupData: (id: number) => void;
  groupList: SubGroups[] | undefined;
  getSubscribeGroups: (id: number) => void;
}

interface GroupChildren {
  children: ReactNode;
}

const GroupsContext = createContext<GroupsProviderProps>(
  {} as GroupsProviderProps
);

const useGroup = () => {
  const context = useContext(GroupsContext);

  if (!context) {
    throw new Error("useGroup must be used within an GroupProvider");
  }

  return context;
};

const GroupsProvider = ({ children }: GroupChildren) => {
  const { data } = useLogin();

  const [dataGroup, setDataGroup] = useState({} as Group);
  const [groupList, setGroupList] = useState<SubGroups[]>([]);

  const createGroupData = (id: number) => {
    api
      .get(`/groups/${id}?_embed=subscribe&_embed=comments`, {
        headers: {
          Authorization: `Bearer ${data.accessToken}`,
        },
      })
      .then((response) => setDataGroup(response.data));
  };

  const getSubscribeGroups = (id: number) => {
    api
      .get(`/users/${id}?_embed=subscribe`, {
        headers: {
          Authorization: `Bearer ${data.accessToken}`,
        },
      })
      .then((response) => setGroupList(response.data.subscribe));
  };

  const createGroup = ({ userId, groupName, description, url }: any) => {
    api
      .post(
        "/groups",
        {
          userId,
          groupName,
          description,
          url,
        },
        {
          headers: {
            Authorization: `Bearer ${data.accessToken}`,
          },
        }
      )
      .catch((err) => console.log(err));
  };

  return (
    <GroupsContext.Provider
      value={{
        createGroup,
        dataGroup,
        createGroupData,
        getSubscribeGroups,

        groupList,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export { GroupsProvider, useGroup };
