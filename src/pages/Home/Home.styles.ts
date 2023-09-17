import { SxProps, Theme } from "@mui/material";

export const loadingStyleContainer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  backgroundImage:
    "linear-gradient(35deg, #ff4656ee, #0a141eee 80%), url(https://valorant-api.com/assets/img/hero-bg.jpg?v=1)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
