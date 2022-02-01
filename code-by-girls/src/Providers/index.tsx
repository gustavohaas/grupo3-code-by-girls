import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../Styles/theme";
import { GroupsProvider } from "./Groups";
import { LoginProvider } from "./Login";
import { ProfileProvider } from "./Profile";
import { RegisterProvider } from "./Register";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <ProfileProvider>
    <RegisterProvider>
      <LoginProvider>
        <GroupsProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </GroupsProvider>
      </LoginProvider>
    </RegisterProvider>
  </ProfileProvider>
);
