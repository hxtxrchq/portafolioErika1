import styles from '../styles/WhatsAppFab.module.css';

const whatsappUrl = 'https://wa.me/51959212496?text=Hablemos%2C%20quiero%20agendar%20una%20cita';

function WhatsAppFab() {
  return (
    <a
      className={styles.whatsappFab}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
    />
  );
}

export default WhatsAppFab;