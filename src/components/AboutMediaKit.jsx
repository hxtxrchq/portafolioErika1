import { motion } from 'framer-motion';
import styles from '../styles/AboutMediaKit.module.css';
import { portfolioItems } from '../data/portfolio';

const projectShowcase = portfolioItems.map((item) => ({
  title: item.title,
  category: item.category,
  desc: item.result,
  image: item.image,
}));

function AboutMediaKit() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.blueBlock}>
        <div className={`container ${styles.blueInner}`}>
          <div className={styles.copyCol}>
            <p>
              27 años, mamá y estratega de marca. Inicié mi camino en gestión y
              emprendimiento, evolucionando hacia dirección de marketing y comunicación.
            </p>
            <p>
              Hoy combino planificación comercial, narrativa visual y ejecución de
              contenidos para construir marcas con una identidad clara y memorable.
            </p>
            <p>
              Mi enfoque conecta <strong>innovación, propósito y negocio</strong> en piezas
              que generan conversación y resultados.
            </p>
            <h3>ACERCA</h3>
          </div>

          <div className={styles.collageCol}>
            <div className={styles.collageTop}>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80"
                alt="Perfil branding"
              />
              <span className={styles.tagBlack}>Estratega</span>
            </div>
            <div className={styles.collageCenter}>
              <img
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1000&q=80"
                alt="Comunicadora"
              />
              <span className={styles.tagPink}>Comunicadora</span>
            </div>
            <span className={styles.sideName}>Erika — Estrategia & Marca</span>
            <span className={styles.blurAccent} aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className={`container ${styles.gridSection}`}>
        <p className={styles.gridLabel}>Portafolio</p>
        <motion.div
          className={styles.sliderMask}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div className={styles.capsuleTrack}>
            {[...projectShowcase, ...projectShowcase].map((item, index) => (
              <article key={`${item.title}-${index}`} className={styles.capsule}>
                <img src={item.image} alt={item.title} />
                <span className={styles.typeBadge}>Proyecto</span>
                <h4>{item.title}</h4>
                <p className={styles.subtitle}>{item.category}</p>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMediaKit;
