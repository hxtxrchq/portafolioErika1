import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

function Hero() {
  const heroPhoto = '/erika-bardales.png';
  const handleImageError = (event) => {
    event.currentTarget.style.opacity = '0';
  };

  return (
    <section
      id="hero"
      className={styles.hero}
      aria-label="Portada editorial Erika Bardales"
    >
      <div className={styles.canvas}>
        <motion.div
          className={styles.editorialStage}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.baseTexture} aria-hidden="true" />

          <motion.div
            className={styles.titleWrap}
            initial={{ opacity: 0, y: 24, filter: 'blur(7px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className={styles.mainTitle}>
              <span className={styles.lineA}>Erika</span>
              <span className={styles.lineB}>Bardales</span>
            </h1>

            <p className={styles.heroLead}>
              No todo problema de marketing es un problema de marketing.
            </p>

            <div className={styles.heroActions}>
              <a href="#contacto" className="btn btnOrangeFill">Evaluar mi negocio</a>
              <a href="#metodologia" className="btn btnLime">Ver cómo trabajo</a>
            </div>
          </motion.div>

          <motion.div
            className={styles.photoCluster}
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              className={styles.ghostFar}
              src={heroPhoto}
              alt=""
              aria-hidden="true"
              onError={handleImageError}
            />

            <img
              className={styles.ghostNear}
              src={heroPhoto}
              alt=""
              aria-hidden="true"
              onError={handleImageError}
            />

            <img
              className={styles.mainPortrait}
              src={heroPhoto}
              alt="Retrato de Erika Bardales"
              onError={handleImageError}
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
