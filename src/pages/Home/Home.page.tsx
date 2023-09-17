import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useAgents } from "../../hooks";
import { CharacterSwiper, ValorantLoadingLogo } from "../../components";
import { loadingStyleContainer } from "./Home.styles";
import { IAgent } from "../../types";

type PropsBoxBack = {
  currentAgent: IAgent | undefined;
};

const BoxNameBackground: React.FC<PropsBoxBack> = ({ currentAgent }) => {
  return (
    <Box
      position="fixed"
      width={{ xs: "0", sm: "100vw" }}
      height={{ xs: "0", sm: "100vh" }}
      top={{ xs: "-5%", sm: "-45px" }}
      left={{ xs: "-100px", sm: "20px" }}
      sx={{
        backgroundImage: `url(${currentAgent?.background})`,
        backgroundRepeat: "no-repeat",

        opacity: 0.2,
      }}
    />
  );
};

export const Home: React.FC = () => {
  const { agents, isLoading } = useAgents();

  const [currentAgent, setcurrentAgent] = useState<IAgent>();

  useEffect(() => {
    setcurrentAgent(agents[0]);
  }, [!isLoading]);

  return (
    <Box height="100vh">
      <Box position="fixed" zIndex="1">
        <Box
          component="img"
          src={currentAgent?.background}
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
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{
            height: "100%",
            background: `linear-gradient(45deg, #${currentAgent?.backgroundGradientColors[0]} 0%, #${currentAgent?.backgroundGradientColors[3]} 100%);`,
          }}
        >
          <BoxNameBackground currentAgent={currentAgent} />

          <Box
            display="flex"
            padding="20px"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100%"
          >
            <Typography variant="h1" color="black">
              {currentAgent?.name.toUpperCase()}
            </Typography>
          </Box>

          <CharacterSwiper agents={agents} setCurrentAgent={setcurrentAgent} />
        </Box>
      )}
    </Box>
  );
};
