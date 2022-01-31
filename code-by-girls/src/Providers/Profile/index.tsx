import { createContext, ReactNode, useContext, useCallback, useState } from "react";
import { api } from "../../Services/api";
import { useLogin } from "../Login";

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
  deleteSkill: (skillId: string, accessToken: string) => void;
  deleteWork: (workId: string, accessToken: string) => void;
}

const ProfileContext = createContext<ProfileProviderProps>(
  {} as ProfileProviderProps
);

export const ProfileProvider = ({ children }: ProfileChildren) => {

  const { data } = useLogin();

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

  const deleteSkill = useCallback((skillId: string, accessToken: string) => {
    api
      .delete(`/skills/${skillId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => getUserData(data.user.id, data.accessToken))
      .catch((err) => console.log(err))
  },[])

  const deleteWork = useCallback((workId: string, accessToken: string) => {
    api
      .delete(`/works/${workId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => getUserData(data.user.id, data.accessToken))
      .catch((err) => console.log(err))
  },[])

  return (
    <ProfileContext.Provider value={{ getUserData, perfil, skills, works, deleteSkill, deleteWork }}>{children}</ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
