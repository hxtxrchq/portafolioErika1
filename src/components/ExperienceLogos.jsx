import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import styles from '../styles/ExperienceLogos.module.css';

const highlights = [
  'Liderazgo de equipos multidisciplinarios por proyecto',
  'Gestión de campañas comerciales integrales',
  'Implementación de herramientas de análisis y reporting',
  'Acompañamiento estratégico en decisiones de negocio',
];

const brands = [
  'Marcas / industrias',
  'Retail',
  'Educación',
  'Salud',
  'Servicios B2B',
  'Consumo masivo',
  'Tecnología',
];

function ExperienceLogos() {
  const repeated = [...brands, ...brands];

  return (
    <motion.section
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      <div className="container">
        <h2>Experiencia & logros</h2>
        <ul className={styles.bullets}>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.band}>
        <motion.div
          className={styles.marquee}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {repeated.map((logo, index) => (
            <span key={`${logo}-${index}`}>{logo}</span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ExperienceLogos;