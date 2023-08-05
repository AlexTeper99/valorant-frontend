import { useEffect, useState } from "react";
import { getAgents } from "../service/api.service";
import { IAgent } from "../types";

export const useAgents = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadAgents = async () => {
    try {
      const res = await getAgents();
      const data = res.data;

      setAgents(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadAgents();
  }, []);

  return { isLoading, agents };
};
