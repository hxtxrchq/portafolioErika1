import { motion } from 'framer-motion';
import styles from '../styles/ServicesAccordion.module.css';
import { fadeUp } from '../utils/motion';

const points = [
  {
    lead: 'VAS A TENER CLARIDAD',
    text: 'sobre qué comunicar.',
  },
  {
    lead: 'VAS A DEJAR DE IMPROVISAR',
    text: 'tu contenido.',
  },
  {
    lead: 'VAS A ATRAER',
    text: 'clientes más calificados.',
  },
  {
    lead: 'VAS A ENTENDER',
    text: 'cómo convertir consultas en proyectos.',
  },
  {
    lead: 'TU CONTENIDO VA A EMPEZAR',
    text: 'a generar oportunidades reales.',
  },
];

function ServicesAccordion() {
  return (
    <motion.section
      id="servicios"
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            <span>¿Qué cambia en tu </span>
            <strong>estudio o marca personal?</strong>
          </h2>
        </motion.header>

        <div className={styles.grid}>
          <motion.div
            className={styles.imageWrap}
            initial={{ opacity: 0, x: -16, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/que cambia en tu negocio-8.png" alt="Equipo en sesion de trabajo" />
          </motion.div>

          <div className={styles.orangeBox}>
            <ul>
              {points.map((point, index) => (
                <motion.li
                  key={point.lead}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                >
                  <strong>{point.lead}</strong>
                  <span>{point.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ServicesAccordion;
