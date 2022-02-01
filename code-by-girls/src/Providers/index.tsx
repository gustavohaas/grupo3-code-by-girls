import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { DashboardProvider } from "./Dashboard";
import { RegisterProvider } from "./Register";
import { ProfileProvider } from "./Profile";
import { LoginProvider } from "./Login";
import { theme } from "../Styles/theme";

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
