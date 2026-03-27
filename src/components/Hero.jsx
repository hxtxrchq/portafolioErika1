import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Hero.module.css';

const WORDS = ['impacto', 'claridad', 'presencia'];

function Hero() {
  const heroPhoto = '/erika-bardales.png';
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % WORDS.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className={styles.hero} aria-label="Portada">
      <h1 className={styles.srOnly}>Tu marca con impacto — Erika Bardales</h1>

      {/* ── Layer 1: Background headline — BEHIND photo ── */}
      <motion.div
        className={styles.textBehind}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        {/* Bold sans-serif "TU" */}
        <span className={styles.wordTu}>Tu</span>
        {/* Flowing italic serif "marca" */}
        <span className={styles.wordMarca}>marca</span>
      </motion.div>

      {/* ── Layer 2: Photo — centered, floating ── */}
      <motion.div
        className={styles.photoWrap}
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: [0, -3, 0] }}
        transition={{
          opacity: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
          scale: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
        }}
      >
        <img src={heroPhoto} alt="Erika Bardales" className={styles.photo} />
      </motion.div>

      {/* ── Layer 3: Front headline — IN FRONT of photo ── */}
      <motion.div
        className={styles.textFront}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        aria-hidden="true"
      >
        {/* Italic serif rotating word */}
        <span className={styles.wordRotating}>
          <AnimatePresence mode="wait">
            <motion.span
              key={WORDS[idx]}
              className={styles.rotWord}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {WORDS[idx]}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.div>



      {/* ── Layer 5: CTAs ── */}
      <motion.div
        className={styles.ctas}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <a href="#contacto" className={`btn ${styles.btnPrimary}`}>Evaluar mi negocio</a>
        <a href="#metodologia" className={`btn ${styles.btnGhost}`}>Ver como trabajo</a>
      </motion.div>
    </section>
  );
}

export default Hero;
