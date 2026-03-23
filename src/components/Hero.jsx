import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

function Hero() {
  const heroPhoto = '/erika-bardales.png';
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 8, y: y * 6 });
  };

  return (
    <section id="hero" className={styles.hero} aria-label="Portada Erika Bardales">
      <div className={`container ${styles.shell}`}>
        <motion.div
          className={styles.stage}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className={styles.visual}
            onPointerMove={handleMove}
            onPointerLeave={() => setTilt({ x: 0, y: 0 })}
          >
            <img src={heroPhoto} alt="Erika Bardales" className={styles.photo} />

            <motion.svg
              className={styles.slashes}
              viewBox="0 0 1200 820"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: tilt.x * 0.2, y: tilt.y * 0.15 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <defs>
                <mask id="hero-cut-mask">
                  <rect width="1200" height="820" fill="black" />
                  <path
                    d="M-80 628 C 146 590, 344 548, 544 500 C 760 448, 986 422, 1280 430 L1280 540 C 1028 548, 788 588, 556 642 C 344 690, 134 724, -80 738 Z"
                    fill="white"
                  />
                </mask>
              </defs>
              <rect width="1200" height="820" fill="#e05b2d" mask="url(#hero-cut-mask)" />
            </motion.svg>

            <div className={styles.actions}>
              <a href="#contacto" className={`btn ${styles.primaryBtn}`}>Evaluar mi negocio</a>
              <a href="#metodologia" className={`btn ${styles.secondaryBtn}`}>Ver como trabajo</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
