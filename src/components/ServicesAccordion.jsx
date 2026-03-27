import { motion } from 'framer-motion';
import { services } from '../data/services';
import { fadeUp } from '../utils/motion';
import styles from '../styles/ServicesAccordion.module.css';

function ServicesAccordion() {
  return (
    <motion.section
      id="servicios"
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      <div className="container">
        <div className={styles.headerPanel}>
          <span className={styles.sectionDivider} aria-hidden="true" />
          <h2 className={styles.heading}>
            <span className={styles.serifWord}>Cómo puedo</span>{' '}
            <span className={styles.sansWord}>AYUDARTE</span>
          </h2>
        </div>

        <div className={styles.list}>
          {services.map((service, index) => (
            <a
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className={styles.row}
            >
              <span className={styles.rowIndex}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className={styles.rowContent}>
                <h3 className={styles.rowTitle}>{service.title}</h3>
                <p className={styles.rowDesc}>{service.short}</p>
              </div>
              <span className={styles.rowArrow}>→</span>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ServicesAccordion;
