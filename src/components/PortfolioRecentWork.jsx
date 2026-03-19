import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import { portfolioItems } from '../data/portfolio';
import styles from '../styles/PortfolioRecentWork.module.css';

function PortfolioRecentWork() {
  const [activeCase, setActiveCase] = useState(-1);

  const toggleVideo = (index, hasVideo) => {
    if (!hasVideo) return;
    setActiveCase(activeCase === index ? -1 : index);
  };

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
          <div className={styles.headerPanel}>
            <span className={styles.sectionDivider} aria-hidden="true" />
            <h2 className={styles.heading}>Algunos proyectos en los que he trabajado</h2>
          </div>
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
              <button
                type="button"
                className={styles.imageWrap}
                onClick={() => toggleVideo(i, Boolean(item.videoUrl))}
                aria-label={item.videoUrl ? `Ver video de ${item.title}` : `Imagen de ${item.title}`}
                disabled={!item.videoUrl}
              >
                {activeCase === i && item.videoUrl ? (
                  <iframe
                    src={item.videoUrl}
                    title={`Testimonio ${item.title}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img src={item.image} alt={item.title} loading="lazy" />
                    {item.videoUrl ? <span className={styles.playBadge}>Ver video</span> : null}
                  </>
                )}
                <span className={styles.categoryBadge}>{item.category}</span>
              </button>
              <div className={styles.body}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.result}><strong>Problema:</strong> {item.problem}</p>
                <p className={styles.result}><strong>Solución:</strong> {item.strategy}</p>
                <p className={styles.result}><strong>Testimonio:</strong> {item.result}</p>

              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default PortfolioRecentWork;
