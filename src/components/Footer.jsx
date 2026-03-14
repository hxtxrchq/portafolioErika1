import styles from '../styles/Footer.module.css';

const config = {
  location: 'Latam / Remote',
  email: 'hola@erikastrategy.com',
  linkedin: '#',
  whatsapp: '#',
  portfolio: '#',
};

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <p className={styles.logo}>
            Erika
          </p>
          <p className={styles.sub}>Estrategia · Marketing · Voz en off</p>
          <p className={styles.location}>{config.location}</p>
        </div>
        <ul className={styles.links}>
          <li>
            <a href={config.linkedin} aria-label="LinkedIn">LinkedIn</a>
          </li>
          <li>
            <a href={`mailto:${config.email}`} aria-label="Email">Email profesional</a>
          </li>
          <li>
            <a href={config.whatsapp} aria-label="WhatsApp">WhatsApp</a>
          </li>
          <li>
            <a href={config.portfolio} aria-label="Portafolio">Behance / Drive / Notion</a>
          </li>
        </ul>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} · Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
