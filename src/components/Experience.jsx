import styles from '../styles/Experience.module.css';

function Experience() {
  return (
    <section id="enfoque" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          
          <h2>
            Si no sabes cuándo llegará tu próximo cliente, no es falta de talento
          </h2>
          <p className={styles.subtitle}>Es falta de un sistema</p>
        </div>

        <div className={styles.right}>
          <p className={styles.sideTitle}>Esto te está pasando si:</p>
          <ul>
            <li>Dependes de recomendaciones para conseguir proyectos </li>
            <li>Recibes consultas que no se convierten</li>
            <li>No tienes claridad sobre qué publicar </li>
            <li>Tu contenido no genera oportunidades </li>
            <li>Sientes que estás improvisando tu marketing </li>
          </ul>
          <button type="button" className={styles.ctaButton}>
            Quiero generar clientes
          </button>
        </div>
      </div>
    </section>
  );
}

export default Experience;
