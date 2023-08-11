import React from "react";
import { Box, Typography } from "@mui/material";
import { useAgents } from "../../hooks";
import { ValorantLoadingLogo } from "../../components";

export const Home: React.FC = () => {
  const { agents, isLoading } = useAgents();

  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            backgroundImage:
              "linear-gradient(35deg, #ff4656ee, #0a141eee 80%), url(https://valorant-api.com/assets/img/hero-bg.jpg?v=1)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <ValorantLoadingLogo />
        </Box>
      ) : (
        <Box sx={{ backgroundColor: "red" }}>
          <Typography variant="h2">Iniciador</Typography>
          <Typography variant="h1">{agents[0].name}</Typography>
        </Box>
      )}
    </Box>
  );
};
