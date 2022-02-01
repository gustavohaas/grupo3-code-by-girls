import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../Styles/theme";
import { DashboardProvider } from "./Dashboard";
import { GroupsProvider } from "./Groups";
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
        <GroupsProvider>
          <LoginProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
          </LoginProvider>
        </GroupsProvider>
      </RegisterProvider>
    </ProfileProvider>
  </DashboardProvider>
);
