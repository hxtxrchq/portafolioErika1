import styles from '../styles/PortfolioRecentWork.module.css';

const items = [
  'Diagnostico comercial completo',
  'Estructura de ventas definida',
  'Plan comercial accionable',
  'Estrategia de precios',
  'Organizacion del equipo',
  'Indicadores clave',
  'Guion de ventas',
];

function PortfolioRecentWork() {
  return (
    <section id="sistema-base" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2>
            Sistema Base Comercial <span>(45 dias)</span>
          </h2>
          <p>
            Ordenamos tu negocio, definimos como vender mejor y te dejamos una
            estructura clara para que puedas ejecutarlo sin improvisar.
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
          Quiero ordenar mi negocio
        </a>
      </div>
    </section>
  );
}

export default PortfolioRecentWork;
