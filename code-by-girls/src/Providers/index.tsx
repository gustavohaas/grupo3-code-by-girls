import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../Styles/theme";

interface AppProviderProps {
    children: ReactNode;
  }
  
  export const AppProvider = ({ children }: AppProviderProps) => (
 
      <ChakraProvider theme={theme}>{children}</ChakraProvider>

  );