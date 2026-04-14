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
          QA Engineer, atuando profissionalmente desde 2024.
          Em menos de dois anos, passei por três cargos na{" "}
          <span className={styles.highlight}>PicPay</span>, de programador junior
          até analista de qualidade, e hoje atuo exclusivamente como QA.
          <br /><br />
          No lado de{" "}
          <span className={styles.highlight}>desenvolvimento</span>, trabalho com{" "}
          <span className={styles.bold}>Golang</span> e{" "}
          <span className={styles.bold}>PHP</span> na construção e manutenção de APIs
          em produção, integração entre serviços e bancos de dados{" "}
          <span className={styles.bold}>SQL</span> e{" "}
          <span className={styles.bold}>NoSQL</span>. Já atuei diretamente em sistemas
          de mensageria, corrigindo falhas que impactavam milhões de usuários.
          <br /><br />
          No lado de{" "}
          <span className={styles.highlight}>qualidade</span>, automatizo testes com{" "}
          <span className={styles.bold}>Cypress</span>, implemento monitoramento
          contínuo em produção e construo ferramentas internas que facilitam o trabalho
          de outros devs.
          <br /><br />
          Fora do trabalho, gosto de construir projetos próprios, explorar novas
          tecnologias e entender como as coisas funcionam por baixo dos panos.
        
        </p>

      </div>
    </section>
  );
}
