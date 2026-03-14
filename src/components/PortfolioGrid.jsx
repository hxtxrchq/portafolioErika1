import { motion } from 'framer-motion';
import { portfolioCategories, portfolioItems } from '../data/portfolio';
import { fadeUp } from '../utils/motion';
import styles from '../styles/PortfolioGrid.module.css';

function PortfolioGrid() {
  return (
    <motion.section
      id="portfolio"
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <h2>Casos y proyectos</h2>
        <div className={styles.categories}>
          {portfolioCategories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <div className={styles.grid}>
          {portfolioItems.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={item.image} alt={item.title} />
                <div className={styles.overlay}>View case</div>
              </div>
              <div className={styles.body}>
                <h3>{item.title}</h3>
                <p>
                  <strong>Problema:</strong> {item.problem}
                </p>
                <p>
                  <strong>Estrategia:</strong> {item.strategy}
                </p>
                <p>
                  <strong>Resultado:</strong> {item.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default PortfolioGrid;