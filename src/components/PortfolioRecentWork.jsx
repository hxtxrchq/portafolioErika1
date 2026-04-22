import styles from '../styles/PortfolioRecentWork.module.css';

const items = [
  'Diagnóstico estratégico completo',
  'Posicionamiento y propuesta de valor',
  'Sistema de contenido estructurado',
  'Plan de acción mensual',
  'Optimización de perfil',
  'Guía de ventas y seguimiento',
  'Estructura de conversión',
];

function PortfolioRecentWork() {
  return (
    <section id="sistema-base" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2>
            Sistema de Atracción y Conversión <span>(90 días)</span>
          </h2>
          <p>
            Construimos un sistema para que puedas atraer y convertir clientes
            de forma constante.
          </p>
        </header>

        <div className={styles.listGrid}>
          {items.map((item, index) => (
            <div key={item} className={styles.row}>
              <span>{String(index + 1).padStart(2, '0')}.</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <a href="#contacto" className={`btn ${styles.inlineCta}`}>
          Quiero mi sistema
        </a>
      </div>
    </section>
  );
}

export default PortfolioRecentWork;
