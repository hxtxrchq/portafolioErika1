import { motion } from 'framer-motion';
import styles from '../styles/AboutMediaKit.module.css';

function AboutMediaKit() {
  const erikaPortrait = '/erika-bardales.png';

  return (
    <section id="sobre-mi" className={styles.section}>
      <div className={`container ${styles.aboutShell}`}>
        <motion.div
          className={styles.introCard}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.sectionDivider} aria-hidden="true" />
          <h2 className={styles.heading}>
            Visión estratégica con enfoque empresarial
          </h2>
          <p className={styles.copy}>
            Soy ingeniera empresarial con más de 6 años de experiencia diseñando
            estrategias comerciales y de marketing para empresas en crecimiento.
          </p>
          <p className={styles.copy}>
            Trabajo conectando visión de negocio, procesos y comunicación para que
            las decisiones de marketing realmente generen resultados.
          </p>
        </motion.div>

        <motion.div
          className={styles.visualCard}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.mediaPanel}>
            <div className={styles.stripTop}>
              <img src={erikaPortrait} alt="" aria-hidden="true" />
            </div>

            <div className={styles.cardMain}>
              <img src={erikaPortrait} alt="Retrato editorial de Erika" />
            </div>

            <div className={styles.stripBottom}>
              <img src={erikaPortrait} alt="" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMediaKit;
