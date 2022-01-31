import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";

import { api } from "../../Services/api";

interface Group {
  userId: number;
  groupName: string;
  description: string;
}
interface GroupsProviderProps {}

interface GroupsChildren {
  children: ReactNode;
}

const GroupsContext = createContext<GroupsProviderProps>(
  {} as GroupsProviderProps
);

const useGroupList = () => {
  const context = useContext(GroupsContext);

  return context;
};

const GroupsProvider = ({ children }: GroupsChildren) => {
  // useEffect(() => {
  //   fetch(`api${"/works"}`)
  //     .then((response) => response.json())
  //     .then((response) => console.log(response));
  // }, []);
  return <GroupsContext.Provider value={{}}>{children}</GroupsContext.Provider>;
};

export { GroupsProvider, useGroupList };
