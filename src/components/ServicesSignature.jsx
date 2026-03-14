import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { services } from '../data/services';
import styles from '../styles/ServicesSignature.module.css';

const marqueeItems = [
  'CONSULTORÍA',
  '✦',
  'ESTRATEGIA',
  '✦',
  'DATA',
  '✦',
  'VOZ EN OFF',
  '✦',
  'MARKETING',
  '✦',
  'CRECIMIENTO',
  '✦',
  'CONSULTORÍA',
  '✦',
  'ESTRATEGIA',
  '✦',
  'DATA',
  '✦',
  'VOZ EN OFF',
  '✦',
  'MARKETING',
  '✦',
  'CRECIMIENTO',
  '✦',
];

function ServicesSignature() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className={styles.section}>
      {/* ── WALLPAPER TEXT ── */}
      <div className={styles.wallpaper} aria-hidden="true">
        <p>NUESTROS SERVICIOS</p>
        <p className={styles.wallItalic}>Servicios <em>Erika</em></p>
        <p>FIRMA ERIKA</p>
      </div>

      {/* ── TWO-COLUMN: foto + acordeón ── */}
      <div className={`container ${styles.twoCol}`}>
        {/* foto izquierda */}
        <div className={styles.bigPhoto}>
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
            alt="Gestión comercial"
          />
        </div>

        {/* acordeón derecha */}
        <motion.div
          className={styles.accordion}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const visibleItems = service.items.filter(
              (item) => !/^(b2b|b2c|growth)$/i.test(item.trim())
            );
            return (
              <div key={service.title} className={styles.item}>
                <button
                  className={styles.trigger}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{service.title}</span>
                  <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.panel}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: 'easeInOut' }}
                    >
                      <ul>
                        {visibleItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <a href="#contact" className={`btn btnOrange ${styles.getCustom}`}>
                        Solicitar propuesta
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* ── MARQUEE BAND ── */}
      <div className={styles.band}>
        <motion.div
          className={styles.bandTrack}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          {marqueeItems.map((item, i) => (
            <span key={i} className={item === '✦' ? styles.bandDot : styles.bandItem}>
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSignature;
