import { motion } from 'framer-motion';
import styles from '../styles/AboutMediaKit.module.css';

function AboutMediaKit() {
  const erikaPortrait = '/erika-bardales.png';

  return (
    <section id="sobre-mi" className={styles.section}>
      {/* Big typographic backdrop — dual font style */}
      <div className={styles.typoBackdrop} aria-hidden="true">
        <motion.span
          className={styles.wordSobre}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Sobre
        </motion.span>
        <motion.span
          className={styles.wordMi}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          Mí
        </motion.span>
      </div>

      <div className={`container ${styles.shell}`}>
        {/* Content — asymmetric layout */}
        <div className={styles.layout}>
          {/* Left: text block */}
          <motion.div
            className={styles.textBlock}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <p className={styles.intro}>
              Soy ingeniera empresarial con más de 6 años de experiencia diseñando
              estrategias comerciales y de marketing para empresas en crecimiento.
            </p>
            <p className={styles.body}>
              Trabajo conectando visión de negocio, procesos y comunicación para que
              las decisiones de marketing realmente generen resultados.
            </p>
          </motion.div>

          {/* Right: photo with decorative elements */}
          <motion.div
            className={styles.photoBlock}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className={styles.photoFrame}>
              <img src={erikaPortrait} alt="Erika Bardales" className={styles.photo} />
            </div>

            {/* Decorative abstract shapes */}
            <div className={styles.decoShapes} aria-hidden="true">
              {/* Large ring */}
              <motion.div
                className={styles.decoRing}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Diagonal lines cluster */}
              <motion.svg
                className={styles.decoLines}
                viewBox="0 0 120 160"
                fill="none"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <line x1="0" y1="0" x2="120" y2="160" stroke="currentColor" strokeWidth="1.5" />
                <line x1="20" y1="0" x2="120" y2="130" stroke="currentColor" strokeWidth="1" />
                <line x1="40" y1="0" x2="120" y2="100" stroke="currentColor" strokeWidth="0.8" />
                <line x1="60" y1="0" x2="120" y2="70" stroke="currentColor" strokeWidth="0.5" />
              </motion.svg>

              {/* Small filled circle */}
              <motion.div
                className={styles.decoDot}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              />

              {/* Lime accent arc */}
              <motion.svg
                className={styles.decoArc}
                viewBox="0 0 100 100"
                fill="none"
                initial={{ opacity: 0, rotate: -30 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.55 }}
              >
                <path d="M10 90 A 60 60 0 0 1 90 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </motion.svg>

              {/* Small cross */}
              <motion.svg
                className={styles.decoCross}
                viewBox="0 0 24 24"
                fill="none"
                initial={{ opacity: 0, rotate: 45 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.65 }}
              >
                <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </motion.svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMediaKit;
