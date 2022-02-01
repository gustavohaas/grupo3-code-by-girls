import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { api } from "../../Services/api";

interface User {
  id: string;
  name: string;
  email: string;
}

interface LoginProviderProps {
  data: any;
  handleLogin: (data: any) => Promise<void>;
  handleSignOut: () => void;
}

const LoginContext = createContext<LoginProviderProps>(
  {} as LoginProviderProps
);

interface LoginChildren {
  children: ReactNode;
}

interface AuthState {
  accessToken: string;
  user: User;
}

const useLogin = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("LoginProvider must be used within an Provider");
  }

  return context;
};

const LoginProvider = ({ children }: LoginChildren) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@token-code-like-girls");
    const user = localStorage.getItem("@token-code-like-girls-user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const handleLogin = useCallback(async (data: any) => {
    const response = await api.post("/login", data);

    const { accessToken, user } = response.data;

    localStorage.setItem("@token-code-like-girls", accessToken);
    localStorage.setItem("@token-code-like-girls-user", JSON.stringify(user));

    setData({ accessToken, user });
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("@token-code-like-girls");
    localStorage.removeItem("@token-code-like-girls-user");

    setData({} as AuthState);
  };

  return (
    <LoginContext.Provider
      value={{
        data,
        handleLogin,
        handleSignOut,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, useLogin };
