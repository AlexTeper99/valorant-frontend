import React from "react";
import styles from "./Home.styles.module.scss";
import { useAgents } from "../../hooks";

export const Home: React.FC = () => {
  const { agents, isLoading } = useAgents();

  return (
    <>
      {isLoading ? (
        <div className={styles["loading-container"]}>
          <h1>isLoading</h1>
        </div>
      ) : (
        <div className={styles["agents-container"]}>
          {agents.map((agent) => (
            <p>{agent.name}</p>
          ))}
        </div>
      )}
    </>
  );
};
