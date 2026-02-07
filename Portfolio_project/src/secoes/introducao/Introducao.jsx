import styles from "./Introducao.module.css";
import HeroButtons from "../HeroButtons/HeroButtons";

function Introducao() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            Roger Rodrigues de Santana <br />
            Desenvolvedor <span className={styles.highlight}>FullStack</span>
          </h1>

          <p className={styles.sub}>Profissional desde 2024</p>

          <p className={styles.desc}>
            Desenvolvedor especializado em back-end e APIs escaláveis. <br />
            2 anos de experiência profissional em produção.
          </p>

          <HeroButtons />
        </div>

        <div className={styles.right}>
          <div className={styles.photo} aria-label="Foto do Roger" role="img" />
        </div>
      </div>
    </section>
  );
}

export default Introducao;
