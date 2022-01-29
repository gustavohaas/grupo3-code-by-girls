import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      50: "#f4f4f4",
      100: "#eee",
      200: "#d4d4d4",
      250: "#bdbdbd",
      300: "#9e9ea7",
      400: "#666665",
      900: "#111",
    },
    purple: {
      100: "#79579B",
      200: "#71479a",
      400: "#701c7a",
      500: "#570861",
    },
    red: {
      600: "#df1545",
      700: "#d40032",
    },

    green: {
      600: "#168821",
    },
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.375rem",
    "2xl": "1.625rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fonts: {
    heading: "Roboto mono",
    text: "Roboto mono",
    body: "Inter",
    caption: "Inter",
  },
});
