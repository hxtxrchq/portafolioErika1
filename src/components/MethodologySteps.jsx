import { motion } from 'framer-motion';
import styles from '../styles/MethodologySteps.module.css';

const steps = [
  {
    title: 'Diagnóstico estratégico',
    description: 'Análisis del negocio, mercado, data y procesos actuales',
  },
  {
    title: 'Diseño de estrategia',
    description: 'Definición de roadmap comercial y marketing',
  },
  {
    title: 'Implementación y gestión',
    description: 'Ejecución con equipos internos o externos',
  },
  {
    title: 'Medición y optimización',
    description: 'KPIs, dashboards y toma de decisiones basada en data',
  },
];

function MethodologySteps() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>Cómo trabajo</h2>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              className={styles.step}
              initial={{ opacity: 0.45, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <p className={styles.number}>{String(index + 1).padStart(2, '0')}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MethodologySteps;