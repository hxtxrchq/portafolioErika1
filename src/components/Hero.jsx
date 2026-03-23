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
                    d="M-80 616 C 148 596, 356 548, 560 500 C 760 452, 984 424, 1280 432 L1280 560 C 1022 564, 790 602, 560 654 C 338 704, 128 744, -80 760 Z"
                    fill="white"
                  />
                  <path
                    d="M-80 788 C 136 760, 356 730, 578 708 C 824 682, 1056 688, 1280 722 L1280 820 L-80 820 Z"
                    fill="white"
                  />
                  <path
                    d="M748 608 C 850 588, 956 596, 1062 628 L1062 654 C 952 624, 848 616, 748 636 Z"
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
