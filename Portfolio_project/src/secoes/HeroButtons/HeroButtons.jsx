import { useState } from 'react'
import { Linkedin, Github, FileDown } from "lucide-react";
import styles from "./HeroButtons.module.css";

 function HeroButtons() {
  return (
    <div className={styles.actions}>
      <a className={`${styles.btn} ${styles.primary}`} href="https://www.linkedin.com/in/roger-rodrigues-de-santana-b2a241311/">
        <Linkedin size={22} />
        LinkedIn
      </a>

      <a className={`${styles.btn} ${styles.secondary}`} href="https://github.com/Roger13san">
        <Github size={22} />
        GitHub
      </a>

      <a className={`${styles.btn} ${styles.ghost}`} href="#">
        <FileDown size={22} />
        Baixar CV
      </a>
    </div>
  );
  }
export default HeroButtons;