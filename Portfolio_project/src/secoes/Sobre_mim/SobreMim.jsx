import styles from "./SobreMim.module.css";
import { useState } from 'react'
function SobreMim() {
  return (
    <section className={styles.section} id="sobre">
        <hr />

      <div className={styles.inner}>
        <h3 className={styles.title}>Sobre mim</h3>

        <p className={styles.text}>
          Olá! Meu nome é <span className={styles.link}>Roger Rodrigues de Santana</span>, sou desenvolvedor{" "}
          <span className={styles.link}>Full stack</span> com foco em{" "}
          <span className={styles.link}>back-end</span>.
          <br /><br />
          Me formei em <span className={styles.link}>Desenvolvimento de Sistemas</span> pelo Instituto Germinare
          (2023–2025) e atuo na área desde 2024. Tenho experiência em construção de{" "}
          <span className={styles.highlight}>APIs</span>, DevOps, pipelines CI/CD, implantação de aplicações e
          gerenciamento de bancos de dados.
          <br /><br />
          Também desenvolvo interfaces responsivas e funcionais no front-end, entregando soluções completas e eficientes.
          <br /><br />
          Sou apaixonado por tecnologia, aprendizado contínuo e desafios que me façam evoluir como profissional.
        </p>
      </div>
      
    </section>
  );
}

export default SobreMim;