import { motion } from 'framer-motion';
import styles from '../styles/MethodologyTimeline.module.css';
import { fadeUp } from '../utils/motion';

const steps = [
  {
    n: '01.',
    title: 'Diagnostico',
    text: 'Analizamos tu perfil, contenido y proceso comercial para detectar por qué no estás generando clientes constantes.',
  },
  {
    n: '02.',
    title: 'Estructura',
    text: 'Definimos tu posicionamiento, mensaje y sistema de contenido para atraer clientes correctos.',
  },
  {
    n: '03.',
    title: 'Plan de accion',
    text: 'Te guiamos para transformar tu contenido en consultas reales y oportunidades de venta.',
  },
];

function MethodologyTimeline() {
  return (
    <motion.section
      id="metodologia"
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>Nuestro proceso</h2>
          <p>Subtítulo:
Un sistema para estructurar tu marketing y convertirlo en clientes</p>
        </motion.header>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <motion.article
              key={step.n}
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className={styles.n}>{step.n}</span>
              <h3>{step.title}</h3>
              <span className={styles.dot} aria-hidden="true" />
              <p>{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default MethodologyTimeline;
