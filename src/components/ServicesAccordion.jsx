import { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { fadeUp } from '../utils/motion';
import styles from '../styles/ServicesAccordion.module.css';

function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

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
        <div className={styles.headlineWrap}>
          <div className={styles.headerPanel}>
            <span className={styles.sectionDivider} aria-hidden="true" />
            <h2>
              Cómo puedo ayudarte
            </h2>
            <p className={styles.intro}>
              Servicios estratégicos para empresas que necesitan claridad comercial,
              dirección y crecimiento sostenible.
            </p>
          </div>
        </div>

        <div className={styles.list}>
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const visibleItems = service.items.filter(
              (point) => !/^(b2b|b2c|growth)$/i.test(point.trim())
            );

            return (
              <article
                key={service.title}
                className={styles.item}
              >
                <button
                  className={styles.trigger}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.index} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{service.title}</span>
                  <span
                    className={styles.icon}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
                  <ul>
                    {visibleItems.map((point) => {
                      const isSubheading = point.endsWith(':');
                      return (
                        <li
                          key={point}
                          className={isSubheading ? styles.subheading : ''}
                        >
                          {point}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default ServicesAccordion;