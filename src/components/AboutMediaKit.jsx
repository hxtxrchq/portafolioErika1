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
          <p className={styles.kicker}>Sobre mi</p>
          <h2 className={styles.heading}>Vision estrategica con enfoque empresarial</h2>
          <p className={styles.copy}>
            Soy ingeniera empresarial con mas de 6 anos de experiencia disenando
            estrategias comerciales y de marketing para empresas en crecimiento.
          </p>
          <p className={styles.copy}>
            Trabajo conectando vision de negocio, procesos y comunicacion para que
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
          <div className={styles.visualStage}>
            <div className={styles.glow} aria-hidden="true" />
            <div className={styles.portraitFrame}>
              <img src={erikaPortrait} alt="Retrato editorial de Erika" />
            </div>
            <div className={styles.floatingNote} aria-hidden="true">
              Vision de negocio + accion de marketing
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMediaKit;
