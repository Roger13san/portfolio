import { Linkedin, Github, FileDown } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { useTracking } from "../../hooks/useTracking";
import heroBg from "../../assets/hero-bg.jpg";
import rogerAvatar from "../../assets/bonito.jpg";

const ROLES = ["FullStack", "Backend Dev", "QA Engineer", "Go Developer"];

const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

function useTypingEffect(words) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    let timeout;

    if (!isDeleting && displayed === current) {
      // palavra completa — pausa antes de apagar
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
    } else if (isDeleting && displayed === "") {
      // apagou tudo — passa pra próxima palavra
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, PAUSE_AFTER_DELETE);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayed((d) => d.slice(0, -1)),
        DELETING_SPEED
      );
    } else {
      timeout = setTimeout(
        () => setDisplayed((d) => current.slice(0, d.length + 1)),
        TYPING_SPEED
      );
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words]);

  return displayed;
}

export default function Hero() {
  const typedRole = useTypingEffect(ROLES);
  const { trackEvent } = useTracking();

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
          <div className={styles.text}>
            <h1 className={styles.title}>
              Roger Rodrigues de Santana
              <br />
              Desenvolvedor{" "}
              <span className={styles.highlight}>
                {typedRole}
                <span className={styles.cursor}>|</span>
              </span>
            </h1>

            <p className={styles.sub}>
              Profissional desde 2024
            </p>

            <p className={styles.desc}>
              Backend + QA Engineer focado em APIs escaláveis, testes automatizados e qualidade de software.
              <br />
              Experiência real em produção desde 2024.
            </p>

            <div className={styles.buttons}>
              <a
                href="https://www.linkedin.com/in/roger-rodrigues-de-santana-b2a241311/"
                target="_blank"
                rel="noreferrer"
                className={`${styles.btn} ${styles.primary}`}
                onClick={() => trackEvent("click_linkedin", { section: "hero" })}
              >
                <Linkedin size={22} />
                LinkedIn
              </a>

              <a
                href="https://github.com/Roger13san"
                target="_blank"
                rel="noreferrer"
                className={`${styles.btn} ${styles.secondary}`}
                onClick={() => trackEvent("click_github", { section: "hero" })}
              >
                <Github size={22} />
                GitHub
              </a>

              <a
                href="/cv/roger-santana-cv.pdf"
                download
                className={`${styles.btn} ${styles.ghost}`}
                onClick={() => trackEvent("click_download_cv", { section: "hero" })}
              >
                <FileDown size={22} />
                Baixar CV
              </a>
            </div>
          </div>

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
