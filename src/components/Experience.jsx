import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import styles from '../styles/Experience.module.css';

const bullets = [
  'Liderazgo de equipos multidisciplinarios por proyecto',
  'Gestión de campañas comerciales integrales (digital + offline)',
  'Implementación de herramientas de análisis y reporting ejecutivo',
  'Acompañamiento estratégico en toma de decisiones de negocio',
];

const industries = [
  'Retail',
  '✦',
  'Educación',
  '✦',
  'Salud',
  '✦',
  'Servicios B2B',
  '✦',
  'Consumo masivo',
  '✦',
  'Tecnología',
  '✦',
  'Industria',
  '✦',
  'Retail',
  '✦',
  'Educación',
  '✦',
  'Salud',
  '✦',
  'Servicios B2B',
  '✦',
  'Consumo masivo',
  '✦',
  'Tecnología',
  '✦',
  'Industria',
  '✦',
];

function Experience() {
  return (
    <motion.section
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container">
        <p className={styles.kicker}>TRAYECTORIA / RESULTADOS</p>
        <h2 className={styles.heading}>
          Experiencia con<em> impacto real</em>
        </h2>
        <ul className={styles.bullets}>
          {bullets.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* marquee band */}
      <div className={styles.band}>
        <p className={styles.bandLabel}>Marcas / industrias</p>
        <div className={styles.marqueeWrap}>
          <motion.div
            className={styles.marquee}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          >
            {industries.map((item, i) => (
              <span
                key={i}
                className={item === '✦' ? styles.mdot : styles.mitem}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
