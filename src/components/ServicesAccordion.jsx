import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { services } from '../data/services';
import { fadeUp } from '../utils/motion';
import styles from '../styles/ServicesAccordion.module.css';

function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.section
      id="services"
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      <div className="container">
        <div className={styles.headlineWrap}>
          <p className={styles.kicker}>SERVICIOS ESTRATÉGICOS</p>
          <h2>
            Servicios para crecimiento
            <em> sostenible</em>
          </h2>
          <p className={styles.intro}>
            Diseño e implementación de soluciones comerciales y de comunicación para
            marcas que necesitan estructura, claridad y resultados medibles.
          </p>
        </div>

        <div className={styles.list}>
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const visibleItems = service.items.filter(
              (point) => !/^(b2b|b2c|growth)$/i.test(point.trim())
            );

            return (
              <motion.article
                key={service.title}
                className={styles.item}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
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
                  <motion.span
                    className={styles.icon}
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.content}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <ul>
                        {visibleItems.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <a href="#contact" className={styles.cta}>
                        Solicitar propuesta
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default ServicesAccordion;