import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import styles from '../styles/Experience.module.css';

const brands = [
  { name: 'Barbarian Bar', logo: '/Barbarian Bar.png' },
  { name: 'Design Market', logo: '/Design Market.png' },
  { name: 'Elevaria', logo: '/Elevaria Logo.png' },
  { name: 'GMS', logo: '/GMS.png' },
  { name: 'Kanagawa Nikkei', logo: '/Kanagawa Nikkei.png' },
];

function Experience() {
  return (
    <motion.section
      id="enfoque"
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container">
        <div className={styles.unifiedPanel}>
          <div className={styles.leftCol}>
            <span className={styles.sectionDivider} aria-hidden="true" />
            <h2 className={styles.heading}>Una mirada estratégica del negocio</h2>
            <p className={styles.aboutCopy}>
              Mi formación como ingeniera empresarial me permite analizar una empresa
              más allá del marketing.
            </p>
            <p className={styles.aboutCopy}>
              Antes de plantear campañas o comunicación, reviso cómo funcionan los
              procesos, la operación comercial y la estructura de ventas.
            </p>
            <p className={styles.aboutCopy}>
              Esto permite entender qué está frenando el crecimiento y dónde realmente
              se deben tomar decisiones.
            </p>
          </div>

          <div className={styles.brandsBlock}>
            <p className={styles.brandsLabel}>Marcas con las que he trabajado</p>
            <div className={styles.brandsGrid}>
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  className={styles.brandCard}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <img src={brand.logo} alt={`Logo de ${brand.name}`} loading="lazy" />
                </motion.div>
              ))}
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
