import { motion } from 'framer-motion';
import styles from '../styles/LogosStrip.module.css';

const logoImages = [
  { name: 'Barbarian Bar', src: '/Barbarian Bar.png' },
  { name: 'Design Market', src: '/Design Market.png' },
  { name: 'Elevaria', src: '/Elevaria Logo.png' },
  { name: 'GMS', src: '/GMS.png' },
  { name: 'Kanagawa Nikkei', src: '/Kanagawa Nikkei.png' },
];

const repeated = [...logoImages, ...logoImages, ...logoImages];

function LogosStrip() {
  return (
    <div className={styles.strip} aria-label="Marcas en loop">
      <motion.div
        className={styles.track}
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        {repeated.map((logo, index) => (
          <div key={`${logo.name}-${index}`} className={styles.logoSlot}>
            <img src={logo.src} alt={`Logo ${logo.name}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default LogosStrip;
