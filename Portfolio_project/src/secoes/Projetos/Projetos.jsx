import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import styles from "./Projetos.module.css";

import idea_plataform from "../../assets/idea_plataform.jpeg";
import ecommerce_ui from "../../assets/ecommerce_ui.jpeg";
import ecommerce_ui_video from "../../assets/ecommerce_ui.mp4";


const projetos = [
  {
    image: idea_plataform,
    title: "Plataforma de Ideias (React)",
    desc: "Plataforma para submissão e votação de ideias, com autenticação e tokens de validação. UI moderna e responsiva.",
    stack: ["React", "Express", "MongoDB", "JWT", "CSRF"],
    highlights: ["Arquitetura em camadas", "Validações e middleware", "Pronto pra produção"],
    links: { repo: "https://github.com/ProjetoProgamacaoAssinc/Ideas-Platform", demo: "" },
    featured: true,
  },
  {
    title: "E-commerce UI (React)",
    desc: "Interface de e-commerce com layout moderno, grid de produtos, página de detalhes e carrinho (UI).",
    stack: ["React", "Vite", "CSS Modules","Postgres"],
    highlights: ["UI responsiva", "Componentização", "Boa organização"],
    links: { repo: "https://github.com/juanraujo/RunnStore", demo: "" },
    thumb: ecommerce_ui,     // aparece no grid
    video: ecommerce_ui_video,   
  },
  {
    title: "Pipeline CI/CD (GitHub Actions)",
    desc: "Build + testes + lint + deploy automatizado. Reduz retrabalho e garante padrão de qualidade.",
    stack: ["GitHub Actions", "Docker", "Linux"],
    highlights: ["Deploy automático", "Checks de qualidade", "Padronização"],
    links: { repo: "https://github.com/seu-user/seu-repo", demo: "" },
  },
  {
    title: "Automação de Testes (QA)",
    desc: "Suite de testes automatizados para fluxos críticos, com relatórios e execução em pipeline.",
    stack: ["Playwright", "JavaScript", "CI/CD"],
    highlights: ["Testes E2E", "Relatórios", "Rodando em pipeline"],
    links: { repo: "https://github.com/seu-user/seu-repo", demo: "" },
  },
];

function Tag({ children }) {
  return <span className={styles.tag}>{children}</span>;
}

function Modal({ project, onClose }) {
  const overlayRef = useRef(null);
  const dialogRef = useRef(null);
  const previousActive = useRef(null);

  useEffect(() => {
    previousActive.current = document.activeElement;
    const t = setTimeout(() => {
      if (!dialogRef.current) return;
      const focusable = dialogRef.current.querySelector(
        'button, a[href], [tabindex]:not([tabindex="-1"])'
      );
      if (focusable) focusable.focus();
    }, 10);

    function onKey(e) {
      if (e.key === "Escape") onClose();

      if (e.key === "Tab") {
        const focusables = dialogRef.current.querySelectorAll(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (previousActive.current) previousActive.current.focus();
    };
  }, [onClose]);

  function onBackdropClick(e) {
    if (e.target === overlayRef.current) onClose();
  }

  return (
    <div ref={overlayRef} className={styles.modalBackdrop} onClick={onBackdropClick}>
      <div
        ref={dialogRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <header className={styles.modalHeader}>
          <h3 id="modal-title" className={styles.modalTitle}>
            {project.title}
          </h3>

          <button className={styles.modalClose} onClick={onClose} aria-label="Fechar">
            <X size={18} />
          </button>
        </header>

        {project.video ? (
            <div className={styles.modalMedia}>
              <video
                className={styles.modalVideo}
                src={project.video}
                autoPlay
                controls
                playsInline
                muted
              />
            </div>
          ) : project.image ? (
            <div
              className={styles.modalImage}
              style={{ backgroundImage: `url(${project.image})` }}
              role="img"
              aria-label={project.title}
            />
          ) : null}


        <div className={styles.modalBody}>
          <p className={styles.modalDesc}>{project.desc}</p>

          <div className={styles.modalSection}>
            <h4>Stack</h4>
            <div className={styles.stackRow}>
              {project.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>

          {!!project.highlights?.length && (
            <div className={styles.modalSection}>
              <h4>Highlights</h4>
              <ul className={styles.highlights}>
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.actions}>
            <a className={styles.btnPrimary} href={project.links.repo} target="_blank" rel="noreferrer">
              <Github size={16} /> Repo
            </a>

            {project.links.demo ? (
              <a className={styles.btnGhost} href={project.links.demo} target="_blank" rel="noreferrer">
                <ExternalLink size={16} /> Demo
              </a>
            ) : (
              <button className={styles.btnDisabled} disabled>
                Sem demo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projetos() {
  const [selected, setSelected] = useState(null);

  // ✅ mesma lógica do SobreMim
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="projetos">
      <div
        ref={sectionRef}
        className={`${styles.inner} ${visible ? styles.visible : styles.hidden}`}
      >
        <div className={styles.divider} />

        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Projetos</h2>
            <p className={styles.subtitle}>Projetos em destaque</p>
          </div>

          <a
            className={styles.allProjects}
            href="https://github.com/Roger13san"
            target="_blank"
            rel="noreferrer"
          >
            Ver tudo no GitHub →
          </a>
        </div>

        <div className={styles.grid}>
          {projetos.map((p, i) => (
            <article
              key={p.title}
              className={`${styles.card} ${visible ? styles.cardIn : styles.cardOut} ${
                p.featured ? styles.featured : ""
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}   // ✅ stagger
              onClick={() => setSelected(p)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelected(p);
              }}
            >
              {(p.thumb || p.image) && (
                  <div
                    className={styles.cardImage}
                    style={{ backgroundImage: `url(${p.thumb || p.image})` }}
                    aria-label={p.title}
                  />
                )}


              <div className={styles.stack}>
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>

              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
              </div>

              <div className={styles.cardHint}>Clique para ver detalhes</div>
            </article>
          ))}
        </div>

        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </div>
    </section>
  );
}
