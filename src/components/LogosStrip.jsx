import styles from '../styles/LogosStrip.module.css';

function LogosStrip() {
  return (
    <section className={styles.section} aria-label="Marcas que confian">
      <div className="container">
        <img src="/marcas.svg" alt="Marcas" className={styles.word} />

        <p className={styles.eyebrow}>MARCAS QUE CONFIAN</p>

        <div className={styles.logos}>
          <img src="/Kanagawa Nikkei.png" alt="Kanagawa" />
          <img src="/Elevaria Logo.png" alt="Elevaria" />
        </div>
      </div>
    </section>
  );
}

export default LogosStrip;
