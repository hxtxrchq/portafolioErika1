import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import { portfolioItems } from '../data/portfolio';
import styles from '../styles/PortfolioRecentWork.module.css';

function PortfolioRecentWork() {
  const carouselItems = [...portfolioItems, ...portfolioItems, ...portfolioItems];

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
          <span className={styles.sectionDivider} aria-hidden="true" />
          <p className={styles.eyebrow}>Seleccion curada</p>
          <h2 className={styles.heading}><span className={styles.serifWord}>Mi</span> <span className={styles.sansWord}>TRABAJO</span></h2>
          <p className={styles.intro}>
            Proyectos donde la estrategia, la identidad y el contenido se alinean
            para hacer que una marca se vea mas fuerte y se entienda mejor.
          </p>
        </div>

        <div className={styles.carouselMask}>
          <div className={styles.carouselTrack}>
            {carouselItems.map((item, index) => (
              <article key={`${item.title}-${index}`} className={styles.card}>
                <div className={styles.imageWrap}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.result}>{item.strategy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default PortfolioRecentWork;
