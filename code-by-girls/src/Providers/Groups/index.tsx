import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

import { api } from "../../Services/api";
import { useLogin } from "../Login/index";

interface Comment {
  userId: number;
  name: string;
  comment: string;
  groupId: number;
  id: number;
}

interface Group {
  userId: number;
  groupName: string;
  description: string;
  comments: Comment[];
  id: number;
  url?: string;
}

interface GroupsProviderProps {
  createGroup: ({ userId, groupName, description }: Group) => void;
  createGroupData: () => void;
  dataGroup: Group;
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
  const { id } = data.user;

  const [dataGroup, setDataGroup] = useState({} as Group);

  useEffect(() => {
    api
      .get("/groups/2?_embed=subscribe&_embed=comments", {
        headers: {
          Authorization: `Bearer ${data.accessToken}`,
        },
      })
      .then((response) => setDataGroup(response.data));
  }, []);

  const createGroupData = () => {
    api
      .get("/groups/2?_embed=subscribe&_embed=comments", {
        headers: {
          Authorization: `Bearer ${data.accessToken}`,
        },
      })
      .then((response) => setDataGroup(response.data));
  };

  const createGroup = ({ userId, groupName, description, url }: Group) => {
    api
      .post(
        "/works",
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
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <GroupsContext.Provider value={{ createGroup, dataGroup, createGroupData }}>
      {children}
    </GroupsContext.Provider>
  );
};

export { GroupsProvider, useGroup };
