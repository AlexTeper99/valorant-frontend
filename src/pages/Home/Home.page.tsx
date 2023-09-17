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
      sx={{
        height: "100vh",
      }}
    >
      {isLoading && currentAgent ? (
        <Box
          sx={{
            ...loadingStyleContainer,
          }}
        >
          <ValorantLoadingLogo />
        </Box>
      ) : (
        <Grid
          container
          justifyContent="center"
          alignItems="flex-end"
          sx={{
            height: "100%",
            background: `linear-gradient(45deg, #${currentAgent?.backgroundGradientColors[0]} 0%, #${currentAgent?.backgroundGradientColors[3]} 100%);`,
          }}
        >
          <Grid item>{currentAgent?.name}</Grid>
          <Grid item xs={12} marginBottom="20px">
            <CharacterSwiper
              agents={agents}
              setCurrentAgent={setcurrentAgent}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
