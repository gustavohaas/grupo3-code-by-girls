import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../Styles/theme";
import { GroupsProvider } from "./Groups";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <GroupsProvider>
    <RegisterProvider>
      <LoginProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </LoginProvider>
    </RegisterProvider>
  </GroupsProvider>
);
