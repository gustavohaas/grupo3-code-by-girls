import { group } from "console";
import { setgroups } from "process";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";
import { GrInsecure } from "react-icons/gr";

import { api } from "../../Services/api";
import { useLogin } from "../Login/index";

interface Group {
  userId: number;
  groupName: string;
  description: string;
}

interface GroupContextData {
  group: Group[];
  createGroup: (data: Group, accessToken: string) => Promise<void>;
}
interface GroupsProviderProps {
  children: ReactNode;
  // createGroup: (accessToken: string) => Promise<void>;
}

const GroupsContext = createContext<GroupsProviderProps>(
  {} as GroupsProviderProps
);

const useGroup = () => {
  const context = useContext(GroupsContext);

  return context;
};

const GroupsProvider = ({ children }: GroupsProviderProps) => {
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
      .then((response) => setGroupData(response.data))
      .catch((err) => console.log(err));
  };

  return <GroupsContext.Provider value={{}}>{children}</GroupsContext.Provider>;
};

export { GroupsProvider, useGroup };
