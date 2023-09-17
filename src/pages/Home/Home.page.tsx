import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useAgents } from "../../hooks";
import { CharacterSwiper, ValorantLoadingLogo } from "../../components";
import { loadingStyleContainer } from "./Home.styles";
import { IAgent } from "../../types";

export const Home: React.FC = () => {
  const { agents, isLoading } = useAgents();

  const [currentAgent, setcurrentAgent] = useState<IAgent>();

  useEffect(() => {
    setcurrentAgent(agents[0]);
  }, [!isLoading]);

  return (
    <Box
      height="100vh"
      sx={{
        background: `linear-gradient(45deg, #${currentAgent?.backgroundGradientColors[0]} 0%, #${currentAgent?.backgroundGradientColors[3]} 100%);`,
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            ...loadingStyleContainer,
          }}
        >
          <ValorantLoadingLogo />
        </Box>
      ) : (
        <Box
          height={"100%"}
          sx={{
            backgroundImage: `url(${currentAgent?.background})`,
            backgroundPosition: { xs: "center", sm: "left" },
            backgroundRepeat: "no-repeat",
            backgroundColor: "hsla(0,0%,4%,0.3)",
            backgroundSize: { xs: "100%", sm: "auto" },
            // color: "#fff",
          }}
        >
          <CharacterSwiper agents={agents} setCurrentAgent={setcurrentAgent} />

          <Typography variant="h1">{currentAgent?.name}</Typography>
        </Box>
      )}
    </Box>
  );
};
