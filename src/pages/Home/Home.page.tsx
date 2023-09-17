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
            backgroundImage: {
              sm: "none",
              md: `url(${currentAgent?.background})`,
            },
            backgroundPosition: { sm: "center", md: "left" },
            backgroundRepeat: "no-repeat",
            backgroundColor: "hsla(0,0%,4%,0.3)",
            backgroundSize: { sm: "100%", md: "auto" },
          }}
        >
          <Box display="flex" flexDirection="column" height="100%" width="100%">
            <Box
              display="flex"
              flexGrow={1}
              sx={{ height: `calc(100% - 160px)` }}
            >
              <Box
                component="img"
                src={currentAgent?.image}
                alt={currentAgent?.name}
                sx={{
                  backgroundImage: {
                    sm: `url(${currentAgent?.background})`,
                    md: "none",
                  },
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: { sm: "100%", md: "auto" },

                  height: "100%",
                  maxWidth: "100vw",
                  objectFit: "contain",
                }}
              />
            </Box>

            <Box>
              <CharacterSwiper
                agents={agents}
                setCurrentAgent={setcurrentAgent}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
