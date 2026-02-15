import styles from "./SobreMim.module.css";
import { useEffect, useRef, useState } from "react";

export default function SobreMim() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className={styles.section}>
      <div
        ref={sectionRef}
        className={`${styles.inner} ${visible ? styles.visible : styles.hidden}`}
      >
        <div className={styles.divider} />

        <h3 className={styles.heading}>Sobre mim</h3>

        <p className={styles.text}>
          Olá! Meu nome é{" "}
          <span className={styles.highlight}>Roger Rodrigues de Santana</span>,
          sou desenvolvedor{" "}
          <span className={styles.highlight}>Full Stack</span> com foco em{" "}
          <span className={styles.highlight}>back-end</span>.
          <br /><br />
          Me formei em{" "}
          <span className={styles.highlight}>
            Desenvolvimento de Sistemas
          </span>{" "}
          pelo Instituto Germinare (2023–2025) e atuo na área desde 2024.
          Tenho experiência em construção de{" "}
          <span className={styles.bold}>APIs</span>, DevOps, pipelines CI/CD,
          implantação de aplicações e gerenciamento de bancos de dados.
          <br /><br />
          Também desenvolvo interfaces responsivas e funcionais no front-end,
          entregando soluções completas e eficientes.
          <br /><br />
          Sou apaixonado por tecnologia, aprendizado contínuo e desafios que
          me façam evoluir como profissional.
        </p> <br /><br /><br />
      </div>
    </section>
  );
}
