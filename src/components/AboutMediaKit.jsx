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
          <p className={styles.kicker}>Caso de estudio</p>
          <h3>Cómo pasamos de contenido sin dirección a generar +150 consultas mensuales</h3>
          <p className={styles.company}>Empresa: GMS (showroom de superficies)</p>

          <div className={styles.block}>
            <h4>Antes</h4>
            <p>No había una estructura clara para atraer clientes desde redes.</p>
            <p>El contenido no estaba enfocado en generar consultas ni ventas.</p>
          </div>

          <div className={styles.block}>
            <h4>Durante</h4>
            <p>
              Se trabajó el mensaje, la dirección de marca, el contenido y el
              proceso de captación y seguimiento de clientes.
            </p>
          </div>

          <div className={styles.block}>
            <h4>Después</h4>
            <ul>
              <li>+150 mensajes mensuales generados a través de campañas.</li>
              <li>Consultas por servicios de diseño de interiores y por productos.</li>
              <li>Mejora en la comunicación y percepción de marca.</li>
              <li>Mayor claridad en el proceso de ventas.</li>
              <li>Incremento en la intención de compra de los clientes.</li>
            </ul>
          </div>
        </article>

        <article className={styles.rightCard}>
          <figure className={styles.heroImage}>
            <img src="/DSC04908.png" alt="Showroom GMS con superficies expuestas" />
          </figure>

          <figure className={styles.detailImage}>
            <img src="/Capa%200.png" alt="Detalle de marca y presentación visual de GMS" />
          </figure>
        </article>
      </div>
    </section>
  );
}

export default AboutMediaKit;
