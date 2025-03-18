import React from "react";
import styles from "./section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.trophiesGrid}>{children}</div>
    </section>
  );
};

export default Section;
