import { motion } from 'framer-motion';
import styles from '../styles/LogosStrip.module.css';
import { fadeUp } from '../utils/motion';

function LogosStrip() {
  return (
    <motion.section
      className={styles.section}
      aria-label="Marcas que confian"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container">
        <motion.img
          src="/marcas.svg"
          alt="Marcas"
          className={styles.word}
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          MARCAS QUE CONFIAN
        </motion.p>

        <div className={styles.logos}>
          <motion.img
            src="/Design Market.png"
            alt="Design Market"
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          />
          <motion.img
            src="/GMS.png"
            alt="GMS"
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          />
        </div>
      </div>
    </motion.section>
  );
}

export default LogosStrip;
