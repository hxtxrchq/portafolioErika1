import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import styles from '../styles/Testimonials.module.css';

function Testimonials() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  return (
    <section className={styles.section}>
      <div className="container">
        <span className={styles.sectionDivider} aria-hidden="true" />

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active}
            className={styles.pullquote}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45 }}
          >
            <span className={styles.openQ} aria-hidden="true">“</span>
            <p className={styles.quoteText}>{item.quote}</p>
            <footer className={styles.quoteFooter}>
              <span className={styles.line} />
              <cite className={styles.cite}>{item.author}</cite>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        {testimonials.length > 1 && (
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
