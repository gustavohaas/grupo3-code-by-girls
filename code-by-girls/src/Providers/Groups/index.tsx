import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";

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
  return <GroupsContext.Provider value={{}}>{children}</GroupsContext.Provider>;
};

export { GroupsProvider, useGroupList };
