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
          Desenvolvedor{" "}
          <span className={styles.highlight}>Full Stack</span> com foco em{" "}
          <span className={styles.highlight}>back-end</span>, atuando
          profissionalmente desde 2024, passando por três cargos em menos de
          dois anos, do desenvolvimento backend até garantia de qualidade.
          <br /><br />
          Trabalho principalmente com{" "}
          <span className={styles.bold}>Golang</span> e{" "}
          <span className={styles.bold}>PHP</span> no desenvolvimento e manutenção
          de APIs em produção, integração entre serviços e bancos de dados{" "}
          <span className={styles.bold}>SQL</span> e{" "}
          <span className={styles.bold}>NoSQL</span>. Na área de qualidade, atuo
          com testes manuais e automatizados usando{" "}
          <span className={styles.bold}>Cypress</span>, validação de APIs REST e
          documentação de bugs.
          <br /><br />
          Sou formado em{" "}
          <span className={styles.highlight}>Desenvolvimento de Sistemas</span> pelo
          Instituto J&F (2023–2025) e atualmente curso{" "}
          <span className={styles.highlight}>Cibersegurança</span> na Faculdade
          Impacta Tecnologia, uma área que cada vez mais se conecta com o meu
          trabalho no dia a dia.
          <br /><br />
          Fora do trabalho, gosto de construir projetos próprios, explorar novas
          tecnologias e entender como as coisas funcionam por baixo dos panos.
        </p>

      </div>
    </section>
  );
}
