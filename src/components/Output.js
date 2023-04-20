import React from "react";
import styles from "./Output.module.css";
import TopProduct from "./TopProduct";
import TopScheduled from "./TopScheduled";
export default function Output() {
  return (
    <div className={styles.OutMainContainer}>
      <TopProduct />
      <TopScheduled />
    </div>
  );
}
