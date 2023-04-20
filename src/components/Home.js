import React from "react";
import Board from "./Board";
import DashBoard from "./DashBoard";
import Activities from "./Activities";
import Output from "./Output";

// importing css for home component 

import styles from "./Home.module.css"

export default function Home() {
  return (
    <div className={styles.HomeMainContainer}>
      <div className={styles.BoardContainer}>
        <Board/>
      </div>
      <div className={styles.DashBoardContainer}>
        <DashBoard/>
        <Activities/>
        <Output/>
      </div>
    </div>
  );
}
