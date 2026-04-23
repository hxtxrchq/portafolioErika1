import { motion } from 'framer-motion';
import styles from '../styles/AboutMediaKit.module.css';
import { fadeUp } from '../utils/motion';

function AboutMediaKit() {
  const ribbonItems = Array.from({ length: 6 }, (_, i) => (
    <span key={`ribbon-${i}`}>
      Portafolio y <strong>resultados</strong>
    </span>
  ));

  return (
    <motion.section
      id="portfolio"
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.ribbon}>
        <div className={styles.ribbonTrack} aria-hidden="true">
          {ribbonItems}
        </div>
        <div className={styles.ribbonTrack} aria-hidden="true">
          {ribbonItems}
        </div>
      </div>

      <motion.div
        className={`container ${styles.content}`}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.55 }}
      >
        <article className={styles.leftCard}>
          <div className={styles.companyLogoWrap}>
            <div className={styles.companyLogo} aria-label="Marca del caso">
              <img src="/GMS.png" alt="Logo del caso" />
            </div>
          </div>

          <p className={styles.caseOverline}>RESULTADO REAL</p>
          <h3 className={styles.caseTitle}>De contenido sin dirección a +150 consultas mensuales</h3>
          <p className={styles.caseIntro}>
            Reordenamos mensaje, contenido y seguimiento comercial para convertir alcance en oportunidades.
          </p>

          <div className={styles.block}>
            <h4>Situación inicial</h4>
            <p>El contenido no tenía una estructura clara para atraer consultas.</p>
          </div>

          <div className={styles.block}>
            <h4>Qué hicimos</h4>
            <p>
              Ajustamos mensaje, dirección de marca y proceso de captación y seguimiento.
            </p>
          </div>

          <div className={styles.block}>
            <h4>Resultado</h4>
            <ul>
              <li>+150 mensajes mensuales generados a través de campañas.</li>
              <li>Más consultas por servicios y productos.</li>
              <li>Mejor comunicación de marca y mayor claridad comercial.</li>
            </ul>
          </div>
        </article>

        <article className={styles.rightCard}>
          <motion.figure
            className={styles.heroImage}
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <img src="/DSC04908.png" alt="Showroom GMS con superficies expuestas" />
          </motion.figure>

          <motion.figure
            className={styles.detailImage}
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            <img src="/Capa%200.png" alt="Detalle de marca y presentación visual de GMS" />
          </motion.figure>
        </article>
      </motion.div>
    </motion.section>
  );
}

export default AboutMediaKit;
