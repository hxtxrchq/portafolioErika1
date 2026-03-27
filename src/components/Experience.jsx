import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import styles from '../styles/Experience.module.css';

function Experience() {
  return (
    <motion.section
      id="enfoque"
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container">
        <div className={styles.stage}>
          <div className={styles.copyZone}>
            <p className={styles.kicker}>ENFOQUE</p>
            <h2 className={styles.heading}>
              <span className={styles.serifWord}>Una mirada</span>{' '}
              <span className={styles.sansWord}>ESTRATÉGICA</span>
            </h2>
            <div className={styles.copyStack}>
              <p>
                Mi formación como ingeniera empresarial me permite analizar una empresa
                más allá del marketing.
              </p>
              <p>
                Antes de plantear campañas o comunicación, reviso cómo funcionan los
                procesos, la operación comercial y la estructura de ventas.
              </p>
              <p>
                Esto permite entender qué está frenando el crecimiento y dónde realmente
                se deben tomar decisiones.
              </p>
            </div>
          </div>

          <div className={styles.visualZone} aria-hidden="true">
            <img
              src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?cs=srgb&dl=pexels-fauxels-3184296.jpg&fm=jpg"
              alt=""
              className={styles.contextImage}
            />
            <div className={styles.imageTint} />
            <div className={styles.bigWord}>ENFOQUE</div>
          </div>
        </div>
        <div className={styles.orangeWave} aria-hidden="true" />
        <div className={styles.limeWave} aria-hidden="true" />
      </div>
    </motion.section>
  );
}

export default Experience;
