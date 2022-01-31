import { createContext, ReactNode, useContext } from "react";

interface ProfileChildren {
  children: ReactNode;
}

interface ProfileProviderProps {}

const ProfileContext = createContext<ProfileProviderProps>(
  {} as ProfileProviderProps
);
export const ProfileProvider = ({ children }: ProfileChildren) => {
  return (
    <ProfileContext.Provider value={{}}>{children}</ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
