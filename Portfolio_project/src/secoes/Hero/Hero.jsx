import { Linkedin, Github, FileDown } from "lucide-react";
import styles from "./Hero.module.css";
import heroBg from "../../assets/hero-bg.jpg";
import rogerAvatar from "../../assets/bonito.jpg";

export default function Hero() {
  return (
    <section
      id="inicio"
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className={styles.overlay} />
      <div className={styles.glow} />

      <div className={styles.inner}>
        <div className={styles.content}>
          {/* TEXT */}
          <div className={styles.text}>
            <h1 className={styles.title}>
              Roger Rodrigues de Santana
              <br />
              Desenvolvedor{" "}
              <span className={styles.highlight}>FullStack</span>
            </h1>

            <p className={styles.sub}>
              Profissional desde 2024
            </p>

            <p className={styles.desc}>
              Desenvolvedor especializado em back-end e APIs escaláveis.
              <br />
              2 anos de experiência profissional em produção.
            </p>

            <div className={styles.buttons}>
              <a
                href="https://www.linkedin.com/in/roger-rodrigues-de-santana-b2a241311/"
                target="_blank"
                rel="noreferrer"
                className={`${styles.btn} ${styles.primary}`}
              >
                <Linkedin size={22} />
                LinkedIn
              </a>

              <a
                href="https://github.com/Roger13san"
                target="_blank"
                rel="noreferrer"
                className={`${styles.btn} ${styles.secondary}`}
              >
                <Github size={22} />
                GitHub
              </a>

              <a
                href="#"
                className={`${styles.btn} ${styles.ghost}`}
              >
                <FileDown size={22} />
                Baixar CV
              </a>
            </div>
          </div>

          {/* AVATAR */}
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar}>
              <img
                src={rogerAvatar}
                alt="Roger Rodrigues de Santana"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
