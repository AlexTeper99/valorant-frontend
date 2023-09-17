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
    <>
      <Box position="fixed" zIndex="1">
        <Box
          component="img"
          src={currentAgent?.background}
          // width="100vw"
          height="80vh"
          sx={{
            opacity: 0.2,
          }}
          display={{ xs: "block", sm: "none" }}
        />
      </Box>
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
          sx={{
            height: "100vh",
            background: `linear-gradient(45deg, #${currentAgent?.backgroundGradientColors[0]} 0%, #${currentAgent?.backgroundGradientColors[3]} 100%);`,
          }}
        >
          <Box
            position="fixed"
            width={{ xs: "0", sm: "100vw" }}
            height={{ xs: "0", sm: "100vh" }}
            top={{ xs: "-5%", sm: "-45px" }}
            left={{ xs: "-100px", sm: "20px" }}
            sx={{
              backgroundImage: `url(${currentAgent?.background})`,
              backgroundRepeat: "repeat-y",

              opacity: 0.2,
            }}
          />

          <CharacterSwiper agents={agents} setCurrentAgent={setcurrentAgent} />
        </Box>
      )}
    </>
  );
};
