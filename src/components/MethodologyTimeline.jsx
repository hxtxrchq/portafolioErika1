import styles from '../styles/MethodologyTimeline.module.css';

const steps = [
  {
    n: '01.',
    title: 'Diagnostico',
    text: 'Entendemos que esta frenando tus ventas y donde estas perdiendo dinero.',
  },
  {
    n: '02.',
    title: 'Estructura',
    text: 'Organizamos como tu negocio atrae clientes, vende y se sostiene.',
  },
  {
    n: '03.',
    title: 'Plan de accion',
    text: 'Te dejo claro que hacer, como hacerlo y en que orden.',
  },
];

function MethodologyTimeline() {
  return (
    <section id="metodologia" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2>Nuestro proceso</h2>
          <p>Un proceso de 45 dias para ordenar tu negocio desde la base</p>
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
