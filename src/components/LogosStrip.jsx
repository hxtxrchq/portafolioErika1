import styles from '../styles/LogosStrip.module.css';

function LogosStrip() {
  return (
    <section className={styles.section} aria-label="Marcas que confian">
      <div className="container">
        <img src="/marcas.svg" alt="Marcas" className={styles.word} />

        <p className={styles.eyebrow}>MARCAS QUE CONFIAN</p>

        <div className={styles.logos}>
          <img src="/Design Market.png" alt="Design Market" />
          <img src="/GMS.png" alt="GMS" />
        </div>
      </div>
    </section>
  );
}

export default LogosStrip;
