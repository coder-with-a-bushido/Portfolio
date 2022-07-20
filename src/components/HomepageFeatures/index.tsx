import { onClickUrl } from "@site/src/utils";
import React from "react";
import styles from "./styles.module.css";

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className={styles.centered}>
      <div className={styles.container}>
        <img
          src="/Karthikeyan_S-Resume.png"
          height="2000"
          width="1414"
          onClick={onClickUrl("/Karthikeyan_S-Resume.pdf")}
          className={styles.resume}
        />
      </div>
    </div>
  );
}
