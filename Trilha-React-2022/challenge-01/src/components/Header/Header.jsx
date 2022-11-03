import styles from "./Header.module.css";
import React from "react";
import { ReactComponent as RocketLogo } from "../../assets/rocket.svg";

export function Header() {
  return (
    <div className={styles.container}>
      <RocketLogo />
      <p className={styles.text}>
        <span>to</span>
        <span>do</span>
      </p>
    </div>
  );
}
