import { createContext, ReactNode, useContext, useCallback, useState } from "react";
import { api } from "../../Services/api";

interface ProfileChildren {
  children: ReactNode;
}

interface PerfilProps {
  userId: string;
  name: string;
  age: string;
  country: string;
  id: string;
}

interface SkillsProps {
  userId: string;
  skill: string;
  level: string;
  id: string;
}

interface WorksProps {
  userId: string;
  title: string;
  description: string;
  id: string;
}

interface ProfileProviderProps {
  perfil: PerfilProps[];
  skills: SkillsProps[];
  works: WorksProps[];
  getUserData: (userId: string, accessToken: string) => Promise<void>;
}

const ProfileContext = createContext<ProfileProviderProps>(
  {} as ProfileProviderProps
);

export const ProfileProvider = ({ children }: ProfileChildren) => {

  const [perfil, setPerfil] = useState<PerfilProps[]>([]);
  const [skills, setSkills] = useState<SkillsProps[]>([]);
  const [works, setWorks] = useState<WorksProps[]>([]);

  const getUserData = useCallback (async (userId: string, accessToken: string) => {
    const response = await api.get(`/users/${userId}?_embed=perfil&_embed=skills&_embed=works` , {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    setPerfil(response.data.perfil);
    setSkills(response.data.skills);
    setWorks(response.data.works);

    console.log(perfil, skills, works)

  },[])


  return (
    <ProfileContext.Provider value={{ getUserData, perfil, skills, works }}>{children}</ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
