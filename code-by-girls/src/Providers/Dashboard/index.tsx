import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../../Services/api";

interface DashboardChildren {
  children: ReactNode;
}

interface Groups {
  url: string;
  groupName: string;
  description: string;
  id: number;
}

interface DashboardProviderProps {
  SearchBoxDashboard: (groups: string, accessToken: string) => Promise<void>;
  notFound: boolean;
  searchNotFound: string;
  loadGroups: (accessToken: string) => Promise<void>;
  groups: Groups[];
}

const DashboardContext = createContext<DashboardProviderProps>(
  {} as DashboardProviderProps
);
export const DashboardProvider = ({ children }: DashboardChildren) => {
  const [groups, setGroups] = useState<Groups[]>([]);
  const [searchNotFound, setSearchNotFound] = useState("");
  const [notFound, setNotFound] = useState(false);

  const loadGroups = useCallback(async (accessToken: string) => {
    try {
      const response = await api.get(`/groups`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setGroups(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const SearchBoxDashboard = useCallback(
    async (group: string, accessToken: string) => {
      const response = await api.get(`/groups?groupName_like=${group}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.data.length) {
        setSearchNotFound(group);
        return setNotFound(true);
      }
      setNotFound(false);
      setGroups(response.data);
    },
    []
  );

  return (
    <DashboardContext.Provider
      value={{
        groups,
        loadGroups,
        SearchBoxDashboard,
        searchNotFound,
        notFound,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
