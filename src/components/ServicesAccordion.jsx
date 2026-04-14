import styles from '../styles/ServicesAccordion.module.css';

const points = [
  {
    lead: 'VAS A ENTENDER',
    text: 'por que hoy no estas vendiendo mas.',
  },
  {
    lead: 'VAS A DETECTAR',
    text: 'donde estas perdiendo dinero.',
  },
  {
    lead: 'VAS A TENER CLARO',
    text: 'que hacer cada mes para generar ventas.',
  },
  {
    lead: 'VAS A DEJAR DE IMPROVISAR',
    text: 'en marketing y ventas.',
  },
  {
    lead: 'TU NEGOCIO VA A ATRAER CLIENTES',
    text: 'y vender con una estructura clara.',
  },
];

function ServicesAccordion() {
  return (
    <section id="servicios" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2>
            <span>Que cambia </span>
            <strong>en tu negocio?</strong>
          </h2>
        </header>

        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <img src="/que cambia en tu negocio-8.png" alt="Equipo en sesion de trabajo" />
          </div>

          <div className={styles.orangeBox}>
            <ul>
              {points.map((point) => (
                <li key={point.lead}>
                  <strong>{point.lead}</strong>
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesAccordion;
