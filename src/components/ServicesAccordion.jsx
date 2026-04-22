import styles from '../styles/ServicesAccordion.module.css';

const points = [
  {
    lead: 'VAS A TENER CLARIDAD',
    text: 'sobre qué comunicar.',
  },
  {
    lead: 'VAS A DEJAR DE IMPROVISAR',
    text: 'tu contenido.',
  },
  {
    lead: 'VAS A ATRAER',
    text: 'clientes más calificados.',
  },
  {
    lead: 'VAS A ENTENDER',
    text: 'cómo convertir consultas en proyectos.',
  },
  {
    lead: 'TU CONTENIDO VA A EMPEZAR',
    text: 'a generar oportunidades reales.',
  },
];

function ServicesAccordion() {
  return (
    <section id="servicios" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2>
            <span>¿Qué cambia en tu </span>
            <strong>estudio o marca personal?</strong>
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
