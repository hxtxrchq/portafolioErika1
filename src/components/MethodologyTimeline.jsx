import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import styles from '../styles/MethodologyTimeline.module.css';

const steps = [
  {
    title: 'Diagnóstico estratégico',
    desc: 'Análisis del negocio, mercado, data y procesos actuales.',
  },
  {
    title: 'Diseño de estrategia',
    desc: 'Definición de roadmap comercial y de marketing.',
  },
  {
    title: 'Implementación y gestión',
    desc: 'Ejecución con equipos internos o externos.',
  },
  {
    title: 'Medición y optimización',
    desc: 'KPIs, dashboards y toma de decisiones basada en data.',
  },
];

function MethodologyTimeline() {
  return (
    <motion.section
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container">
        <p className={styles.eyebrow}>CÓMO TRABAJO</p>
        <h2 className={styles.heading}>
          Mi <em>metodología</em>
        </h2>
        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              className={styles.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>
              <div className={styles.content}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default MethodologyTimeline;
