import { services } from '../data/services';
import styles from '../styles/ServiceDetailPage.module.css';

function ServiceDetailPage({ slug }) {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
          <span className={styles.kicker}>Servicio no encontrado</span>
          <h1>No encontramos esta pagina</h1>
          <a href="/#servicios" className="btn btnOrangeFill">Volver a servicios</a>
        </div>
      </section>
    );
  }

  const deliverables = service.deliverables?.length ? service.deliverables : [];
  const notes = service.notes?.length ? service.notes : [];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <a href="/#servicios" className={styles.backLink}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
            alt=""
            aria-hidden="true"
          />
          <span>Volver a servicios</span>
        </a>

        <div className={styles.stage}>
          <div className={styles.heroBlock}>
            <p className={styles.kicker}>Servicios</p>
            <p className={styles.subhead}>Cómo puedo ayudarte</p>
            <h1>{service.title}</h1>
            <p className={styles.lead}>{service.short}</p>
          </div>

          <div className={styles.visualBlock} aria-hidden="true">
            <div className={styles.visualWord}>SERVICIOS</div>
            <div className={styles.visualSlice} />
            <div className={styles.visualGrid} />
          </div>

          <div className={styles.readingLayout}>
            <div className={styles.contentBlock}>
              <h2>{service.includeTitle || 'Este servicio incluye'}</h2>
              <p className={styles.readingHint}>Puntos clave que trabajamos contigo:</p>
              <ul className={styles.includesList}>
                {service.items.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {(deliverables.length > 0 || notes.length > 0) && (
              <div className={styles.deliveryBlock}>
                {deliverables.length > 0 && (
                  <>
                    <h3>{service.deliverablesTitle || 'Entregables'}</h3>
                    <ul className={styles.deliverablesList}>
                      {deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {notes.length > 0 && (
                  <ul className={styles.notesList}>
                    {notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <div className={styles.ctaPanel}>
            <p>
              Si quieres revisar cuál servicio encaja mejor en tu caso, conversemos y te
              propongo una ruta clara.
            </p>
            <a href="/#contacto" className="btn btnOrangeFill">Agendar diagnóstico</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetailPage;
