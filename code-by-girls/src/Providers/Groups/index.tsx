import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";

import { api } from "../../Services/api";
import { useLogin } from "../Login/index";

interface Group {
  userId: number;
  groupName: string;
  description: string;
}

interface GroupsProviderProps {}

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
  const [groupData, setGroupData] = useState<Group[]>([]);
  const { data } = useLogin();
  const { id } = data.user;

  useEffect(() => {
    api
      .get("/groups/2?_embed=subscribe&_embed=comments")
      .then((response) => console.log(response));
  }, []);

  const createGroup = ({ userId, groupName, description }: Group) => {
    api
      .post("/works", {
        id,
        groupName,
        description,
        headers: {
          Authorization: `Bearer ${data.accessToken}`,
        },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return <GroupsContext.Provider value={{}}>{children}</GroupsContext.Provider>;
};

export { GroupsProvider, useGroup };
