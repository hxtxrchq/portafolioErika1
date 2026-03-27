import { motion } from 'framer-motion';
import styles from '../styles/LogosStrip.module.css';

const logoImages = [
  { name: 'Barbarian Bar', src: '/Barbarian Bar.png' },
  { name: 'Design Market', src: '/Design Market.png' },
  { name: 'Elevaria', src: '/Elevaria Logo.png' },
  { name: 'GMS', src: '/GMS.png' },
  { name: 'Kanagawa Nikkei', src: '/Kanagawa Nikkei.png' },
];

const repeated = [...logoImages, ...logoImages, ...logoImages, ...logoImages];

function LogosStrip() {
  return (
    <div className={styles.strip} aria-label="Marcas que confían">
      {/* Dual-typography heading */}
      <div className={styles.heading}>
        <span className={styles.serifWord}>Marcas</span>{' '}
        <span className={styles.sansWord}>QUE CONFÍAN</span>
      </div>

      <motion.div
        className={styles.track}
        animate={{ x: ['0%', '-25%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
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
