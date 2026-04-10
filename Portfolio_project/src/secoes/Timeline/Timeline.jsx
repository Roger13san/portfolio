import { useEffect, useRef, useState } from "react";
import styles from "./Timeline.module.css";
import { Briefcase, GraduationCap } from "lucide-react";

const items = [
  {
    category: "Experiência Profissional",
    period: "2026 – Atual",
    title: "IT Analyst — PicPay",
    description:
      "Execução de testes manuais e automatizados para validação de sistemas. Automação de testes com Cypress, testes de APIs REST e integração entre serviços. Identificação e documentação de bugs, colaborando com times de desenvolvimento para melhoria contínua da qualidade do software.",
    dot: <Briefcase className={styles.icon} />,
    type: "profissional",
  },
  {
    category: "Experiência Profissional",
    period: "2025 – 2026",
    title: "Assistant IT — PicPay",
    description:
      "Desenvolvimento e manutenção de serviços backend com Golang e PHP. Implementação de novas funcionalidades em sistemas internos, integração com bancos de dados SQL e NoSQL e desenvolvimento de funcionalidades para sistema de mensageria.",
    dot: <Briefcase className={styles.icon} />,
    type: "profissional",
  },
  {
    category: "Experiência Profissional",
    period: "2024 – 2025",
    title: "Junior Programmer — PicPay",
    description:
      "Desenvolvimento backend com Golang e PHP. Implementação de funcionalidades para sistemas internos e manutenção de aplicações existentes em ambiente de produção.",
    dot: <Briefcase className={styles.icon} />,
    type: "profissional",
  },
  {
    category: "Educação",
    period: "2026 – 2028",
    title: "Cibersegurança — Faculdade Impacta Tecnologia",
    description:
      "Graduação em andamento com foco em segurança da informação, proteção contra ameaças cibernéticas, análise de vulnerabilidades e implementação de soluções de defesa. Conclusão prevista em 2028.",
    dot: <GraduationCap className={styles.icon} />,
    type: "educacao",
  },
  {
    category: "Educação",
    period: "2023 – 2025",
    title: "Téc. Desenvolvimento de Sistemas — Instituto J&F",
    description:
      "Ensino Médio Técnico concluído com foco em lógica de programação, estrutura de dados, banco de dados, desenvolvimento web e fundamentos de engenharia de software.",
    dot: <GraduationCap className={styles.icon} />,
    type: "educacao",
  },
];

const FILTERS = [
  { label: "Todos", value: "todos" },
  { label: "💼 Profissional", value: "profissional" },
  { label: "🎓 Educação", value: "educacao" },
];

export default function Timeline() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("todos");

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const filtered = activeFilter === "todos"
    ? items
    : items.filter((item) => item.type === activeFilter);

  return (
    <section className={styles.section} id="timeline">
      <div
        ref={ref}
        className={`${styles.inner} ${visible ? styles.visible : styles.hidden}`}
      >
        <div className={styles.divider} />
        <h2 className={styles.heading}>Trajetória</h2>

        <div className={styles.filters}>
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`${styles.filterBtn} ${activeFilter === f.value ? styles.filterActive : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className={styles.timeline}>
          <div className={styles.items}>
            {filtered.map((item, i) => (
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
