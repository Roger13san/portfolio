import { useEffect, useRef, useState } from "react";
import styles from "./Projetos.module.css";
import idea_plataform from "../../assets/idea_plataform.jpeg";

const projetos = [
  {
    image: idea_plataform,
    title: "Plataforma de Ideias (React)",
    desc: "Plataforma para submissão e votação de ideias, com autenticação e tokens de validação UI moderna e responsiva.",
    stack: ["React", "Express", "MongoDB", "JWT", "CSRF"],
    highlights: ["Arquitetura em camadas", "Validações e middleware", "Pronto pra produção"],
    links: {
      repo: "https://github.com/seu-user/seu-repo",
      demo: "https://seu-deploy.com",
    },
    featured: true,
  },
  {
    title: "Painel Admin (React)",
    desc: "Dashboard com autenticação, listagem, filtros e paginação. UI consistente e responsiva.",
    stack: ["React", "Vite", "CSS Modules"],
    highlights: ["UI responsiva", "Componentização", "Acessível e leve"],
    links: {
      repo: "https://github.com/seu-user/seu-repo",
      demo: "https://seu-deploy.com",
    },
  },
  {
    title: "Pipeline CI/CD (GitHub Actions)",
    desc: "Build + testes + lint + deploy automatizado. Reduz retrabalho e garante padrão de qualidade.",
    stack: ["GitHub Actions", "Docker", "Linux"],
    highlights: ["Deploy automático", "Checks de qualidade", "Padronização"],
    links: {
      repo: "https://github.com/seu-user/seu-repo",
      demo: "",
    },
  },
  {
    title: "Automação de Testes (QA)",
    desc: "Suite de testes automatizados para fluxos críticos, com relatórios e execução em pipeline.",
    stack: ["Playwright", "JavaScript", "CI/CD"],
    highlights: ["Testes E2E", "Relatórios", "Rodando em pipeline"],
    links: {
      repo: "https://github.com/seu-user/seu-repo",
      demo: "",
    },
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
    const timer = setTimeout(() => {
      if (!dialogRef.current) return;
      const focusable = dialogRef.current.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable) focusable.focus();
    }, 20);

    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const focusables = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }
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
      clearTimeout(timer);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (previousActive.current) previousActive.current.focus();
    };
  }, [onClose]);

  function onBackdropClick(e) {
    if (e.target === overlayRef.current) onClose();
  }

  return (
    <div
      className={styles.modalBackdrop}
      ref={overlayRef}
      onClick={onBackdropClick}
      aria-hidden={false}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={dialogRef}
      >
        <header className={styles.modalHeader}>
          <h3 id="modal-title" className={styles.cardTitle}>
            {project.title}
          </h3>
          <button
            className={styles.modalClose}
            aria-label="Fechar"
            onClick={onClose}
          >
            ×
          </button>
        </header>

        {project.image && (
          <div
            className={styles.modalImage}
            style={{ backgroundImage: `url(${project.image})` }}
            role="img"
            aria-label={project.title}
          />
        )}

        <div className={styles.modalContent}>
          <p className={styles.cardDesc}>{project.desc}</p>

          <div className={styles.modalSection}>
            <h4>Stack</h4>
            <div className={styles.stack}>
              {project.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>

          {project.highlights && (
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
            <a
              className={styles.btnPrimary}
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.icon} aria-hidden="true">
                ⌂
              </span>
              Repo
            </a>

            {project.links.demo ? (
              <a
                className={styles.btnGhost}
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.icon} aria-hidden="true">
                  ↗
                </span>
                Demo
              </a>
            ) : (
              <button className={styles.btnDisabled} disabled>
                <span className={styles.icon} aria-hidden="true">
                  —
                </span>
                Sem demo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projetos() {
  const [selected, setSelected] = useState(null);

  function open(project) {
    setSelected(project);
  }

  function close() {
    setSelected(null);
  }

  return (
    <section className={styles.section} id="projetos">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Projetos</h2>
            <p className={styles.subtitle}>Projetos em destaque</p>
          </div>

          <a
            className={styles.allProjects}
            href="https://github.com/seu-user"
            target="_blank"
            rel="noreferrer"
          >
            Ver tudo no GitHub →
          </a>
        </div>

        <div className={styles.grid}>
          {projetos.map((p) => (
            <article
              key={p.title}
              className={`${styles.card} ${p.featured ? styles.featured : ""}`}
              onClick={() => open(p)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") open(p);
              }}
            >
              {p.image && (
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${p.image})` }}
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
{/* 
              <div className={styles.actions}>
                <a
                  className={styles.btnPrimary}
                  href={p.links.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.icon} aria-hidden="true">
                    ⌂
                  </span>
                  Repo
                </a>

                {p.links.demo ? (
                  <a
                    className={styles.btnGhost}
                    href={p.links.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className={styles.icon} aria-hidden="true">
                      ↗
                    </span>
                    Demo
                  </a>
                ) : (
                  <button className={styles.btnDisabled} disabled>
                    <span className={styles.icon} aria-hidden="true">
                      —
                    </span>
                    Sem demo
                  </button>
                )}
              </div> */}
            </article>
          ))}
        </div>

        {selected && <Modal project={selected} onClose={close} />}
      </div>
    </section>
  );
}

export default Projetos;
