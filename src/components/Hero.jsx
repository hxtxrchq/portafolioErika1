import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

function Hero() {
  const fallbackPng =
    'https://pngimg.com/d/woman_PNG100788.png';
  const fallbackJpg =
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80';

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.canvas}>
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Soy <span>Erika</span>,<br />
          Estratega Comercial y Marketing
        </motion.h1>


        <motion.div
          className={styles.stage}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <aside className={styles.sideLeft}>
            <p className={styles.sideKicker}>Lo que hago</p>
            <p>
              Diseño e implemento planes de estrategia comercial, marketing y
              posicionamiento para marcas que quieren crecer con estructura.
            </p>
          </aside>

          <div className={styles.photoWrap}>
            <div className={styles.orbit} aria-hidden="true" />
            <img
              src="/clienta.png"
              alt="Erika, estratega comercial y marketing"
              onError={(event) => {
                if (event.currentTarget.dataset.fallbackStep === 'png') {
                  event.currentTarget.src = fallbackJpg;
                  event.currentTarget.dataset.fallbackStep = 'jpg';
                  return;
                }
                event.currentTarget.src = fallbackPng;
                event.currentTarget.dataset.fallbackStep = 'png';
              }}
            />
          </div>

          <aside className={styles.sideRight}>
            <strong>10 Años</strong>
            <p>de experiencia</p>
            <div className={styles.line} aria-hidden="true" />
            <small>Liderando estrategia comercial y marketing</small>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
