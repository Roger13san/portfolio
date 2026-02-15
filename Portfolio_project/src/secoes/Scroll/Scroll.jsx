import styles from "./Scroll.module.css";

// Linguagens
import python from "../../assets/tecnologias/python.svg";
import java from "../../assets/tecnologias/java.svg";
import php from "../../assets/tecnologias/php.svg";
import golang from "../../assets/tecnologias/golang.svg";
import html from "../../assets/tecnologias/html.svg";
import javascript from "../../assets/tecnologias/javaScript.svg";
import css from "../../assets/tecnologias/css.svg";

// Banco
import mongodb from "../../assets/tecnologias/mongodb.svg";
import postgresql from "../../assets/tecnologias/postgresql.svg";
import amazon_ec2 from "../../assets/tecnologias/amazon_ec2.svg";

const techs = [
  python, java, php, golang,
  html, javascript, css,
  mongodb, postgresql, amazon_ec2
];

export default function Scroll() {
  return (
    <div className={styles.scroll}>
      <div className={styles.scrollContent}>
        {[0, 1, 2].map((group) => (
          <div key={group} className={styles.images}>
            {techs.map((img, index) => (
              <img key={`${group}-${index}`} src={img} alt="tech" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
