import styles from '../styles/MethodologyTimeline.module.css';

const steps = [
  {
    n: '01.',
    title: 'Diagnostico',
    text: 'Analizamos tu perfil, contenido y proceso comercial para detectar por qué no estás generando clientes constantes.',
  },
  {
    n: '02.',
    title: 'Estructura',
    text: 'Definimos tu posicionamiento, mensaje y sistema de contenido para atraer clientes correctos.',
  },
  {
    n: '03.',
    title: 'Plan de accion',
    text: 'Te guiamos para transformar tu contenido en consultas reales y oportunidades de venta.',
  },
];

function MethodologyTimeline() {
  return (
    <section id="metodologia" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2>Nuestro proceso</h2>
          <p>Subtítulo:
Un sistema para estructurar tu marketing y convertirlo en clientes</p>
        </header>

        <div className={styles.grid}>
          {steps.map((step) => (
            <article key={step.n} className={styles.card}>
              <span className={styles.n}>{step.n}</span>
              <h3>{step.title}</h3>
              <span className={styles.dot} aria-hidden="true" />
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MethodologyTimeline;
