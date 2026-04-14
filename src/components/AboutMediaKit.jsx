import styles from '../styles/AboutMediaKit.module.css';

function AboutMediaKit() {
  const ribbonItems = Array.from({ length: 6 }, (_, i) => (
    <span key={`ribbon-${i}`}>
      Portafolio y <strong>resultados</strong>
    </span>
  ));

  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.ribbon}>
        <div className={styles.ribbonTrack} aria-hidden="true">
          {ribbonItems}
        </div>
        <div className={styles.ribbonTrack} aria-hidden="true">
          {ribbonItems}
        </div>
      </div>

      <div className={`container ${styles.content}`}>
        <article className={styles.leftCard}>
          <p>KANAGAWA LOGRO XXXXXXXX XXXXXX XXXXXXXX</p>
        </article>

        <article className={styles.rightCard}>
          <img src="/que cambia en tu negocio-8.png" alt="Resultado de proyecto" />
        </article>
      </div>
    </section>
  );
}

export default AboutMediaKit;
