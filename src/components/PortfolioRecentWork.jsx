import { motion } from 'framer-motion';
import styles from '../styles/PortfolioRecentWork.module.css';
import { fadeUp } from '../utils/motion';

const items = [
  'Diagnóstico estratégico completo',
  'Posicionamiento y propuesta de valor',
  'Sistema de contenido estructurado',
  'Plan de acción mensual',
  'Optimización de perfil',
  'Guía de ventas y seguimiento',
  'Estructura de conversión',
];

function PortfolioRecentWork() {
  return (
    <motion.section
      id="sistema-base"
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
            Sistema de Atracción y Conversión <span>(90 días)</span>
          </h2>
          <p>
            Construimos un sistema para que puedas atraer y convertir clientes
            de forma constante.
          </p>
        </motion.header>

        <div className={styles.listGrid}>
          {items.map((item, index) => (
            <motion.div
              key={item}
              className={styles.row}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
            >
              <span>{String(index + 1).padStart(2, '0')}.</span>
              <p>{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#contacto"
          className={`btn ${styles.inlineCta}`}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Quiero mi sistema
        </motion.a>
      </div>
    </motion.section>
  );
}

export default PortfolioRecentWork;
