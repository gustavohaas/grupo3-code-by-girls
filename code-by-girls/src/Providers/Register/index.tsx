import { createContext, ReactNode, useCallback, useContext } from "react";
import { api } from "../../Services/api";
import { useProfile } from "../Profile";

interface RegisterChildren {
  children: ReactNode;
}

interface RegisterProviderProps {
  handleRegister: (data: any) => Promise<void>;
}

const RegisterContext = createContext<RegisterProviderProps>(
  {} as RegisterProviderProps
);

export const useRegister = () => {
  const context = useContext(RegisterContext);

  if (!context) {
    throw new Error("RegisterContext must be used within an Provider");
  }

  return context;
};

export const RegisterProvider = ({ children }: RegisterChildren) => {
  const { createProfile } = useProfile();

  const handleRegister = useCallback(async (data: any) => {
    const response = await api.post("/register", data);

    createProfile(
      response.data.user.id,
      response.data.user.name,
      "",
      "",
      response.data.accessToken
    );
  }, []);

  return (
    <RegisterContext.Provider value={{ handleRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};
