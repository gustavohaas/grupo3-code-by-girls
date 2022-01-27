import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { api } from "../../Services/api";

interface GroupsProviderProps {
  handleClick: (userPost: string) => void;
}

const GroupsContext = createContext<GroupsProviderProps>(
  {} as GroupsProviderProps
);

interface GroupsChildren {
  children: ReactNode;
}

export const GroupsProvider = ({ children }: GroupsChildren) => {
  return <GroupsContext.Provider value={}>{children}</GroupsContext.Provider>;
};
