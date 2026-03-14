import { motion } from 'framer-motion';
import styles from '../styles/FinalCTA.module.css';

function FinalCTA() {
  return (
    <motion.section
      id="contact"
      className={styles.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container">
        <p className={styles.eyebrow}>TRABAJEMOS JUNTOS</p>
        <h2 className={styles.heading}>
          ¿Lista para escalar<br />
          tu negocio con <em>estrategia</em>?
        </h2>
        <p className={styles.sub}>
          Agenda una sesión de diagnóstico o solicita una propuesta personalizada.
          Sin compromiso.
        </p>
        <div className={styles.actions}>
          <a href="mailto:hola@erikastrategy.com" className="btn btnCream">
            Agendar consultoría
          </a>
          <a href="#portfolio" className="btn btnBlack">
            Ver portafolio
          </a>
        </div>
      </div>

      <div className={styles.bgWord} aria-hidden="true">STRATEGY</div>
    </motion.section>
  );
}

export default FinalCTA;