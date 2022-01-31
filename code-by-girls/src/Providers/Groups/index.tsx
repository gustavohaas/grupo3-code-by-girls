import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { api } from "../../Services/api";

interface GroupsProviderProps {
  addComment: (userPost: string) => void;
}

interface Comment {
  id: number;
  user: string;
  comment: string;
}
const GroupsContext = createContext<GroupsProviderProps>(
  {} as GroupsProviderProps
);

interface GroupsChildren {
  children: ReactNode;
}

// export const GroupsProvider = ({ children }: GroupsChildren) => {
//   const [feed, setFeed] = useState<Comment[]>([]);

//   const addComment = (userPost: string) => {
//     const { userPost } = Comment;
//     setFeed([...feed, newComment]);
//   };

  return <GroupsContext.Provider value={}>{children}</GroupsContext.Provider>;
};
