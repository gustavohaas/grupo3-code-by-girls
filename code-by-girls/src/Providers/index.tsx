import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../Styles/theme";
import { DashboardProvider } from "./Dashboard";
import { LoginProvider } from "./Login";
import { ProfileProvider } from "./Profile";
import { RegisterProvider } from "./Register";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <DashboardProvider>
    <ProfileProvider>
      <RegisterProvider>
        <LoginProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </LoginProvider>
      </RegisterProvider>
    </ProfileProvider>
  </DashboardProvider>
);
