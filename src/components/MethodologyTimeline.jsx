import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import styles from '../styles/MethodologyTimeline.module.css';

const steps = [
  {
    title: 'Diagnóstico',
    intro: 'Analizo el negocio desde tres dimensiones:',
    points: ['operación', 'ventas', 'marketing'],
    desc: 'El objetivo es identificar qué está frenando el crecimiento.',
  },
  {
    title: 'Plan de acción',
    intro: 'A partir del diagnóstico desarrollo un plan que define:',
    points: [
      'objetivos comerciales',
      'prioridades estratégicas',
      'acciones de marketing',
      'mejoras en procesos',
    ],
    desc: '',
  },
  {
    title: 'Implementación',
    intro: '',
    points: [],
    desc: 'Dependiendo de lo que el negocio necesite, acompaño la ejecución en estrategia comercial, optimización de procesos o marketing. Cuando el plan requiere implementación en marketing, trabajo junto a mi equipo en la agencia.',
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
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container">
        <div className={styles.headerPanel}>
          <span className={styles.sectionDivider} aria-hidden="true" />
          <h2 className={styles.heading}>
            Cómo trabajo con las empresas
          </h2>
        </div>
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
                {step.intro ? <p>{step.intro}</p> : null}
                {step.points.length > 0 ? (
                  <ul>
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
                {step.desc ? <p>{step.desc}</p> : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default MethodologyTimeline;
