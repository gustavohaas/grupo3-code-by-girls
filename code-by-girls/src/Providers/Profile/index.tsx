import { AxiosResponse } from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useCallback,
  useState,
} from "react";
import { useEffect } from "toasted-notes/node_modules/@types/react";
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
  createSkill: (
    userId: string,
    skill: string,
    level: string,
    accessToken: string
  ) => void;
  createWork: (
    userId: string,
    title: string,
    description: string,
    accessToken: string
  ) => void;
  editSkill: (
    skillId: string,
    skill: string,
    level: string,
    accessToken: string
  ) => void;
  editWork: (
    workId: string,
    title: string,
    description: string,
    accessToken: string
  ) => void;
  editImage: (userId: string, url: string, accessToken: string) => void;
  getProfile: (userId: string, accessToken: string) => Promise<void>;
  profileImageUrl: string;
  profileId: string;
}

const ProfileContext = createContext<ProfileProviderProps>(
  {} as ProfileProviderProps
);

export const ProfileProvider = ({ children }: ProfileChildren) => {
  const { data } = useLogin();

  const [profileImageUrl, setProfileImageUrl] = useState<string>("");
  const [profileId, setProfileId] = useState<string>("");

  const [perfil, setPerfil] = useState<PerfilProps[]>([]);
  const [skills, setSkills] = useState<SkillsProps[]>([]);
  const [works, setWorks] = useState<WorksProps[]>([]);

  const getUserData = useCallback(
    async (userId: string, accessToken: string) => {
      const response = await api.get(
        `/users/${userId}?_embed=perfil&_embed=skills&_embed=works`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setPerfil(response.data.perfil);
      setSkills(response.data.skills);
      setWorks(response.data.works);
    },
    []
  );

  const deleteSkill = useCallback((skillId: string, accessToken: string) => {
    api
      .delete(`/skills/${skillId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => getUserData(data.user.id, data.accessToken))
      .catch((err) => console.log(err));
  }, []);

  const deleteWork = useCallback((workId: string, accessToken: string) => {
    api
      .delete(`/works/${workId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => getUserData(data.user.id, data.accessToken))
      .catch((err) => console.log(err));
  }, []);

  const createSkill = useCallback(
    (userId: string, skill: string, level: string, accessToken: string) => {
      api
        .post("/skills", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res: AxiosResponse<SkillsProps>) =>
          setSkills([...skills, res.data])
        )
        .catch((err) => console.log(err));
    },
    []
  );

  const createWork = useCallback(
    (
      userId: string,
      title: string,
      description: string,
      accessToken: string
    ) => {
      api
        .post("/works", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res: AxiosResponse<WorksProps>) =>
          setWorks([...works, res.data])
        )
        .catch((err) => console.log(err));
    },
    []
  );

  const editSkill = useCallback(
    (skillId: string, skill: string, level: string, accessToken: string) => {
      api
        .patch(
          `/skills/${skillId}`,
          { skill, level },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => getUserData(data.user.id, data.accessToken))
        .catch((err) => console.log(err));
    },
    []
  );

  const editWork = useCallback(
    (
      workId: string,
      title: string,
      description: string,
      accessToken: string
    ) => {
      api
        .patch(
          `/works/${workId}`,
          { title, description },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => getUserData(data.user.id, data.accessToken))
        .catch((err) => console.log(err));
    },
    []
  );

  const getProfile = useCallback(
    async (userId: string, accessToken: string) => {
      const response = await api.get("/perfil", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response) {
        response.data.forEach((user: any) => {
          if (userId === user.userId) {
            setProfileId(user.id);
            setProfileImageUrl(user.imagem);
            console.log(profileImageUrl);
          }
        });
      }
    },
    []
  );

  const editImage = useCallback(
    (perfilId: string, url: string, accessToken: string) => {
      api
        .patch(
          `/perfil/${perfilId}`,
          { imagem: url },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => getProfile(data.user.id, data.accessToken))
        .catch((err) => console.log(err));
    },
    []
  );

  return (
    <ProfileContext.Provider
      value={{
        getUserData,
        perfil,
        skills,
        works,
        deleteSkill,
        deleteWork,
        createSkill,
        createWork,
        editSkill,
        editWork,
        editImage,
        profileImageUrl,
        getProfile,
        profileId,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
