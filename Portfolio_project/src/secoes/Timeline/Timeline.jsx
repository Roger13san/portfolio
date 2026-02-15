import { useEffect, useRef, useState } from "react";
import styles from "./Timeline.module.css";

const items = [
  {
    category: "Experiência Profissional",
    period: "2024 – Atual",
    title: "Backend & QA",
    description:
      "Atuação como Backend e QA, trabalhando com desenvolvimento e manutenção de APIs em produção, correção de bugs, melhorias de performance e validações. Experiência com testes manuais e automatizados, análise de falhas e garantia de qualidade em ambientes reais. Contato com banco de dados, versionamento e fluxo de deploy.",
    dot: "💼",
  },
  {
    category: "Educação",
    period: "2023 – 2025",
    title: "Ensino Médio Técnico em Desenvolvimento de Sistemas",
    description:
      "Instituto Germinare — Conclusão 2025. Formação com foco em lógica de programação, estrutura de dados, banco de dados, desenvolvimento web e fundamentos de engenharia de software.",
    dot: "🎓",
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.section} id="timeline">
      <div
        ref={ref}
        className={`${styles.inner} ${visible ? styles.visible : styles.hidden}`}
      >
        <div className={styles.divider} />
        <h2 className={styles.heading}>Trajetória</h2>

        <div className={styles.timeline}>
          <div className={styles.items}>
            {items.map((item, i) => (
              <article
                key={item.title}
                className={`${styles.item} ${visible ? styles.itemIn : styles.itemOut}`}
                style={{ transitionDelay: `${i * 160}ms` }}
              >
                <div className={styles.dot} aria-hidden="true">
                  {item.dot}
                </div>

                <div className={styles.content}>
                  <span className={styles.category}>{item.category}</span>
                  <span className={styles.period}>{item.period}</span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.desc}>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
