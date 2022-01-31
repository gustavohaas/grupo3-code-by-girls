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
<<<<<<< HEAD
  <GroupsProvider>
=======
  <ProfileProvider>
>>>>>>> 35961b2cb9532a6176efadb966e88d0544ea8011
    <RegisterProvider>
      <LoginProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </LoginProvider>
    </RegisterProvider>
<<<<<<< HEAD
  </GroupsProvider>
=======
  </ProfileProvider>
>>>>>>> 35961b2cb9532a6176efadb966e88d0544ea8011
);
