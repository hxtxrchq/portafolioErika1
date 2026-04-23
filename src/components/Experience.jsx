import { motion } from 'framer-motion';
import styles from '../styles/Experience.module.css';
import { fadeUp } from '../utils/motion';

function Experience() {
  return (
    <motion.section
      id="enfoque"
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          
          <h2>
            Si no sabes cuándo llegará tu próximo cliente, no es falta de talento
          </h2>
          <p className={styles.subtitle}>Es falta de un sistema</p>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
        >
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
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Experience;
