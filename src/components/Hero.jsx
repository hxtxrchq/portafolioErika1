import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

function Hero() {
  const heroPhoto = '/erika-bardales.png';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="hero" className={styles.hero} aria-label="Portada">
      <h1 className={styles.srOnly}>
        Optimizo cómo tu negocio atrae clientes y vende — Erika Bardales
      </h1>

      <div className={styles.heroContainer}>
        {/* ── Left: Text Content ── */}
        <motion.div
          className={styles.textContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtitle */}
          <motion.p className={styles.subtitle} variants={itemVariants}>
            SISTEMA DE MARKETING Y VENTAS PARA{' '}
            <strong>ARQUITECTOS Y DISEÑADORES</strong>
          </motion.p>

          {/* Main Headline */}
          <motion.h1 className={styles.headline} variants={itemVariants}>
            <span className={styles.orangeHeadline}>
              Optimiza cómo atraes 
              <br />
              y conviertes clientes
            </span>
            <br />
            <span className={styles.highlight}>toma el control en 45 días.</span>
          </motion.h1>

          {/* Description */}
          <motion.p className={styles.description} variants={itemVariants}>
            Deja de depender del boca en boca
            <br />
            con un sistema claro
          </motion.p>

          {/* CTA */}
          <motion.div className={styles.ctas} variants={itemVariants}>
            <a href="#contacto" className={`btn ${styles.btnPrimary}`}>
              Agendar diagnóstico
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Photo ── */}
        <motion.div
          className={styles.photoWrap}
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
        >
          <img
            src={heroPhoto}
            alt="Erika Bardales"
            className={styles.photo}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
