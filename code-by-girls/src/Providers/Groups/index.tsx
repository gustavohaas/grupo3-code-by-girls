import { cookieStorageManager, useStyleConfig } from "@chakra-ui/react";
import { group } from "console";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";

import { api } from "../../Services/api";
import { useLogin } from "../Login/index";

interface Group {
  userId: number;
  groupName: string;
  description: string;
  comments: string;
  id: number;
}

interface GroupsProviderProps {
  createGroup: ({ userId, groupName, description }: Group) => void;
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

  console.log(dataGroup);

  useEffect(() => {
    api
      .get("/groups/2?_embed=subscribe&_embed=comments", {
        headers: {
          Authorization: `Bearer ${data.accessToken}`,
        },
      })
      .then((response) => setDataGroup(response.data));
  }, []);

  const createGroup = ({ userId, groupName, description }: Group) => {
    api
      .post("/works", {
        userId,
        groupName,
        description,
        headers: {
          Authorization: `Bearer ${data.accessToken}`,
        },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <GroupsContext.Provider value={{ createGroup, dataGroup }}>
      {children}
    </GroupsContext.Provider>
  );
};

export { GroupsProvider, useGroup };
