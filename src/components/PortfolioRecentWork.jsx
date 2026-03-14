import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import { portfolioItems } from '../data/portfolio';
import styles from '../styles/PortfolioRecentWork.module.css';

function PortfolioRecentWork() {
  return (
    <motion.section
      id="portfolio"
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
    >
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>CASOS Y PROYECTOS</p>
          <h2 className={styles.heading}>
            Recent <em>Work</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {portfolioItems.map((item, i) => (
            <motion.article
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <div className={styles.imageWrap}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className={styles.categoryBadge}>{item.category}</span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.result}>{item.result}</p>
                <a href="#contact" className={styles.cta}>Ver caso →</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default PortfolioRecentWork;
