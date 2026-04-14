import styles from '../styles/Experience.module.css';

function Experience() {
  return (
    <section id="enfoque" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <h2>
            Si tu negocio vende
            <br />
            pero no crece
            <br />
            <span>no es falta de marketing</span>
          </h2>
        </div>

        <div className={styles.right}>
          <ul>
            <li>Estas tomando decisiones sin claridad.</li>
            <li>No sabes que esta funcionando.</li>
            <li>Todo depende de prueba y error.</li>
            <li>Estas perdiendo ventas sin darte cuenta.</li>
          </ul>
        </div>
      </div>

      <div className={styles.ribbon}>
        El problema no es vender mas. Es no tener una base comercial clara.
      </div>
    </section>
  );
}

export default Experience;
