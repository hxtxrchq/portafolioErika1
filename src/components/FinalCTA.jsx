import { motion } from 'framer-motion';
import styles from '../styles/FinalCTA.module.css';
import { fadeUp } from '../utils/motion';

const schedulerUrl =
  import.meta.env.VITE_SCHEDULER_URL ||
  import.meta.env.VITE_CALENDLY_URL ||
  'https://cal.com/erikabardales.mkt/hablemos?overlayCalendar=true';

// Build Cal embed URL. Attempt to request a light theme by adding `theme=light`.
// Note: Cal may ignore this parameter; if so the embed will keep its default theme.
const calEmbedUrl = (() => {
  try {
    const url = new URL(schedulerUrl);
    url.searchParams.delete('overlayCalendar');
    // try to request a light theme — Cal may not support it, but worth requesting
    url.searchParams.set('theme', 'light');
    return url.toString();
  } catch {
    return schedulerUrl;
  }
})();

function FinalCTA() {
  return (
    <motion.section
      id="contacto"
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.calendarShell}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            <div className={styles.calendarFrameWrap}>
              <iframe
                className={styles.calendarFrame}
                src={calEmbedUrl}
                title="Agenda de Cal.com para Erika Bardales"
                loading="lazy"
                allow="camera; microphone; autoplay; clipboard-read; clipboard-write"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.bottomBrand}>
        <motion.div
          className={styles.sealOrbit}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src="/escalemos tu negocio-8.png"
            alt="Escalemos tu negocio"
            className={styles.seal}
            animate={{ rotate: [-20, 8] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
      {/* WhatsApp floating button */}
      <a
        className={styles.whatsappFab}
        href="https://wa.me/51959212496?text=Hablemos%2C%20quiero%20agendar%20una%20cita"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
      />
    </motion.section>
  );
}

export default FinalCTA;
