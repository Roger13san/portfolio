import styles from "./Contato.module.css";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Contato() {
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

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "roger.rodriguessantana22@gmail.com",
      href: "mailto:roger.rodriguessantana22@gmail.com",
      color: "#7c4dff",
    },

    {
      icon: Phone,
      label: "WhatsApp",
      value: "+55 (11) 94865-9917",
      href: "https://wa.me/5511948659917",
      color: "#25d366",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, Brasil",
      href: null,
      color: "#ff6b6b",
    },
  ];

  return (
    <section id="contato" className={styles.section}>
      <div
        ref={sectionRef}
        className={`${styles.inner} ${visible ? styles.visible : styles.hidden}`}
      >
        <div className={styles.divider} />

        <h3 className={styles.heading}>Contatos</h3>

        <p className={styles.subtitle}>
          Vamos trabalhar juntos? Entre em contato através de qualquer um dos canais abaixo.
        </p>

        <div className={styles.contactGrid}>
          {contactMethods.map((method) => {
            const IconComponent = method.icon;
            const content = (
              <div className={styles.contactCard}>
                <div className={styles.iconWrapper} style={{ "--icon-color": method.color }}>
                  <IconComponent size={28} />
                </div>
                <div className={styles.info}>
                  <h4 className={styles.contactLabel}>{method.label}</h4>
                  <p className={styles.contactValue}>{method.value}</p>
                </div>
              </div>
            );

            return method.href ? (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
              >
                {content}
              </a>
            ) : (
              <div key={method.label} className={styles.contactItem}>
                {content}
              </div>
            );
          })}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Estou sempre aberto a novas oportunidades, parcerias e conversas sobre tecnologia.
          </p>
          <a
            href="mailto:roger.dev2024@gmail.com"
            className={styles.mailButton}
          >
            Enviar Email
          </a>
        </div>
      </div>
    </section>
  );
}
