import { AxiosResponse } from "axios";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../../Services/api";
import { useLogin } from "../Login";
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
  SearchBoxDashboard: (group: string) => Promise<void>;
  notFound: boolean;
  searchNotFound: string;
  loadGroups: (userId: string) => Promise<void>;
  groups: Groups[];
}

const DashboardContext = createContext<DashboardProviderProps>(
  {} as DashboardProviderProps
);
export const DashboardProvider = ({ children }: DashboardChildren) => {
  const { data } = useLogin();
  const [groups, setGroup] = useState<Groups[]>([]);
  const [searchNotFound, setSearchNotFound] = useState("");
  const [notFound, setNotFound] = useState(false);

  const loadGroups = useCallback(async (userId: string) => {
    try {
      const response = await api.get(`/groups?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${data.accessToken}`,
        },
      });

      setGroup(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const SearchBoxDashboard = useCallback(async (group: string) => {
    const response = await api.get(`/groups?groupName_like=${group}`, {
      headers: {
        Authorization: `Bearer ${data.accessToken}`,
      },
    });
    if (!response.data.length) {
      setSearchNotFound(group);
      return setNotFound(true);
    }
    setNotFound(false);
    setGroup(response.data);
  }, []);

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
