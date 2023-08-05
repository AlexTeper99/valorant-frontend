import React from "react";
import styles from "./Home.styles.module.scss";
import { useAgents } from "../../hooks";

export const Home: React.FC = () => {
  const { agents, isLoading } = useAgents();

  return (
    <div className={styles.home}>
      {isLoading ? <h1>isLoading</h1> : <>{JSON.stringify(agents)}</>}
    </div>
  );
};
