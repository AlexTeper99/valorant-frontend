import "../index.css";

export enum ColorsEnum {
  primary = "#eaeeb2",
  secondary = "#81c6b7",
  red = "#d83946",
  grey = "#ccccc7",
  borderColor = "#5f605f",
}

import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "tungstenBold",
      color: ColorsEnum.primary,
      textTransform: "uppercase",
      fontSize: "10rem",
    },
    h2: {
      fontFamily: "DINNextW1G-Regular",
      color: "white",
      textTransform: "uppercase",
      fontSize: "2rem",
    },
  },
});
