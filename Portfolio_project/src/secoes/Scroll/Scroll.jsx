// Scroll.jsx
import styles from "./Scroll.module.css";

// Linguagens
import python from "../../assets/tecnologias/python.svg";
import java from "../../assets/tecnologias/java.svg";
import php from "../../assets/tecnologias/php.svg";
import golang from "../../assets/tecnologias/golang.svg";
import html from "../../assets/tecnologias/html.svg";
import javascript from "../../assets/tecnologias/javaScript.svg";
import css from "../../assets/tecnologias/css.svg";
import cypress from "../../assets/tecnologias/cypress.svg";
import react from "../../assets/tecnologias/react.svg";
import typescript from "../../assets/tecnologias/typescript.svg";
import wordpress from "../../assets/tecnologias/wordpress.svg";
import github from "../../assets/tecnologias/github.svg";
import git from "../../assets/tecnologias/git.svg";
import docker from "../../assets/tecnologias/docker.svg";
import nodejs from "../../assets/tecnologias/nodedotjs.svg";
import githubactions from "../../assets/tecnologias/githubactions.svg";
import express from "../../assets/tecnologias/express.svg";
// Banco
import mongodb from "../../assets/tecnologias/mongodb.svg";
import postgresql from "../../assets/tecnologias/postgresql.svg";
import amazon_ec2 from "../../assets/tecnologias/amazon_ec2.svg";
import redis from "../../assets/tecnologias/redis.svg";
import neo4j from "../../assets/tecnologias/neo4j.svg";

const techs = [
  // ===== FUNDAMENTOS WEB =====
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
  { src: javascript, name: "JavaScript" },
  { src: typescript, name: "TypeScript" },

  // ===== FRONTEND =====
  { src: react, name: "React" },
  { src: wordpress, name: "WordPress" },

  // ===== BACKEND =====
  { src: nodejs, name: "Node.js" },
  { src: express, name: "Express" },
  { src: golang, name: "Golang" },
  { src: java, name: "Java" },
  { src: php, name: "PHP" },
  { src: python, name: "Python" },

  // ===== BANCOS =====
  { src: postgresql, name: "PostgreSQL" },
  { src: mongodb, name: "MongoDB" },
  { src: redis, name: "Redis" },
  { src: neo4j, name: "Neo4j" },

  // ===== DEVOPS / INFRA =====
  { src: docker, name: "Docker" },
  { src: amazon_ec2, name: "AWS EC2" },

  // ===== WORKFLOW / QA =====
  { src: git, name: "Git" },
  { src: github, name: "GitHub" },
  { src: githubactions, name: "GitHub Actions" },
  { src: cypress, name: "Cypress" },
];

export default function Scroll() {
  return (
    <div className={styles.scroll} aria-label="Tecnologias">
      <div className={styles.scrollContent}>
        {[0, 1].map((group) => (
          <div key={group} className={styles.images} aria-hidden={group === 1}>
            {techs.map((t) => (
              <div key={`${group}-${t.name}`} className={styles.techItem} data-name={t.name}>
                <img src={t.src} alt={t.name} title={t.name} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
