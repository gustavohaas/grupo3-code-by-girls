import { AxiosResponse } from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useCallback,
  useState,
} from "react";

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
  deleteSkill: (skillId: string, accessToken: string, userId: string) => void;
  deleteWork: (workId: string, accessToken: string, userId: string) => void;
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
    accessToken: string,
    userId: string
  ) => void;
  editWork: (
    workId: string,
    title: string,
    description: string,
    accessToken: string,
    userId: string
  ) => void;
  editImage: (
    profileId: string,
    url: string,
    accessToken: string,
    userId: string
  ) => void;
  getProfile: (userId: string, accessToken: string) => Promise<void>;
  editLinkedin: (
    perfilId: string,
    urlLinkedin: string,
    accessToken: string,
    userId: string
  ) => void;
  createProfile: (
    userId: string,
    name: string,
    imagem: string,
    linkedin: string,
    accessToken: string
  ) => void;
  profileImageUrl: string;
  profileId: string;
  profileLinkedin: string;
}

const ProfileContext = createContext<ProfileProviderProps>(
  {} as ProfileProviderProps
);

export const ProfileProvider = ({ children }: ProfileChildren) => {
  const [profileImageUrl, setProfileImageUrl] = useState<string>("");
  const [profileId, setProfileId] = useState<string>("");
  const [profileLinkedin, setProfileLinkedin] = useState<string>("");

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

  const deleteSkill = useCallback(
    (skillId: string, accessToken: string, userId: string) => {
      api
        .delete(`/skills/${skillId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => getUserData(userId, accessToken))
        .catch((err) => console.log(err));
    },
    []
  );

  const deleteWork = useCallback(
    (workId: string, accessToken: string, userId: string) => {
      api
        .delete(`/works/${workId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => getUserData(userId, accessToken))
        .catch((err) => console.log(err));
    },
    []
  );

  const createSkill = useCallback(
    (userId: string, skill: string, level: string, accessToken: string) => {
      api
        .post(
          "/skills",
          { userId, skill, level },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
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
        .post(
          "/works",
          { userId, title, description },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res: AxiosResponse<WorksProps>) =>
          setWorks([...works, res.data])
        )
        .catch((err) => console.log(err));
    },
    []
  );

  const editSkill = useCallback(
    (
      skillId: string,
      skill: string,
      level: string,
      accessToken: string,
      userId: string
    ) => {
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
        .then((res) => getUserData(userId, accessToken))
        .catch((err) => console.log(err));
    },
    []
  );

  const editWork = useCallback(
    (
      workId: string,
      title: string,
      description: string,
      accessToken: string,
      userId: string
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
        .then((res) => getUserData(userId, accessToken))
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
            setProfileLinkedin(user.linkedin);
          }
        });
      } else console.log(response);
    },
    []
  );

  const editImage = useCallback(
    (perfilId: string, url: string, accessToken: string, userId: string) => {
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
        .then((res) => getProfile(userId, accessToken))
        .catch((err) => console.log(err));
    },
    []
  );

  const editLinkedin = useCallback(
    (
      perfilId: string,
      urlLinkedin: string,
      accessToken: string,
      userId: string
    ) => {
      api
        .patch(
          `/perfil/${perfilId}`,
          { linkedin: urlLinkedin },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        )
        .then((res) => getProfile(userId, accessToken))
        .catch((err) => console.log(err));
    },
    []
  );

  const createProfile = useCallback(
    (
      userId: string,
      name: string,
      imagem: string,
      linkedin: string,
      accessToken: string
    ) => {
      api
        .post(
          "/perfil",
          { userId, name, imagem, linkedin },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        )

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
        editLinkedin,
        createProfile,
        profileLinkedin,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
