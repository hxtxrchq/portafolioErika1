import { motion } from 'framer-motion';
import styles from '../styles/LogosStrip.module.css';

const logos = [
  'BUSINESS INSIDER',
  '✦',
  'Forbes',
  '✦',
  'BuzzFeed',
  '✦',
  'VOGUE',
  '✦',
  'BAZAAR',
  '✦',
  'The Guardian',
  '✦',
  'ROLLING STONE',
  '✦',
  'BUSINESS INSIDER',
  '✦',
  'Forbes',
  '✦',
  'BuzzFeed',
  '✦',
  'VOGUE',
  '✦',
  'BAZAAR',
  '✦',
  'The Guardian',
  '✦',
  'ROLLING STONE',
  '✦',
];

function LogosStrip() {
  return (
    <div className={styles.strip}>
      <motion.div
        className={styles.track}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {logos.map((logo, i) => (
          <span
            key={i}
            className={logo === '✦' ? styles.dot : styles.name}
          >
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default LogosStrip;
