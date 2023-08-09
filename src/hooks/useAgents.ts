import { useEffect, useState } from "react";
import { getAgents } from "../service/api.service";
import { IAgent } from "../types";

//custom hook fot obtein the data from the API and save into a useState
export const useAgents = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadAgents = async () => {
    try {
      //getAgents is the API call with axios
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
