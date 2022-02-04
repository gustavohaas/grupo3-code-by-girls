import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { DashboardProvider } from "./Dashboard";
import { RegisterProvider } from "./Register";
import { ProfileProvider } from "./Profile";
import { LoginProvider } from "./Login";
import { GroupsProvider } from "./Groups";
import { theme } from "../Styles/theme";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <DashboardProvider>
    <ProfileProvider>
      <RegisterProvider>
        <LoginProvider>
          <GroupsProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
          </GroupsProvider>
        </LoginProvider>
      </RegisterProvider>
    </ProfileProvider>
  </DashboardProvider>
);
