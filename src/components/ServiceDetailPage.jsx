import { services } from '../data/services';
import styles from '../styles/ServiceDetailPage.module.css';

function ServiceDetailPage({ slug }) {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className={styles.section}>
        <div className={styles.heroBanner}>
          <div className={styles.heroBannerInner}>
            <h1 className={styles.title}>No encontramos esta pagina</h1>
            <h1>No encontramos esta pagina</h1>
            <a href="/#servicios" className="btn btnOrangeFill">Volver a servicios</a>
          </div>
        </div>
      </section>
    );
  }

  const deliverables = service.deliverables?.length ? service.deliverables : [];
  const notes = service.notes?.length ? service.notes : [];

  /* Split title: first two words go serif, rest go bold sans */
  const words = service.title.split(' ');
  const serifPart = words.slice(0, 2).join(' ');
  const sansPart = words.slice(2).join(' ');

  /* Index for decorative number */
  const serviceIndex = services.indexOf(service) + 1;

  return (
    <section className={styles.section}>
      {/* ── Orange hero banner ── */}
      <div className={styles.heroBanner}>
        <div className={styles.heroBannerInner}>
          <a href="/#servicios" className={styles.backLink}>
            ← Volver a servicios
          </a>
          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.title}>
                <span className={styles.serifWord}>{serifPart}</span>
                {sansPart && (
                  <span className={styles.sansWord}>{sansPart}</span>
                )}
              </h1>
              <p className={styles.lead}>{service.short}</p>
            </div>
            <div className={styles.heroDecor}>
              <div>
                <p className={styles.heroTagline}>Servicio de consultoría estratégica</p>
                <span className={styles.heroNumber} aria-hidden="true">
                  {String(serviceIndex).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Gradient divider ── */}
      <span className={styles.heroBottomDivider} aria-hidden="true" />

      {/* ── Body content on cream bg ── */}
      <div className={styles.bodyContent}>


        <div className={styles.contentGrid}>
          {/* Left: includes */}
          <div className={styles.contentBlock}>
            <h2 className={styles.blockTitle}>
              {service.includeTitle || 'Este servicio incluye'}
            </h2>
            <ul className={styles.includesList}>
              {service.items.map((item, index) => (
                <li key={item}>
                  <span className={styles.itemIndex}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: deliverables */}
          {(deliverables.length > 0 || notes.length > 0) && (
            <div className={styles.deliveryBlock}>
              {deliverables.length > 0 && (
                <>
                  <h3 className={styles.blockTitle}>
                    {service.deliverablesTitle || 'Entregables'}
                  </h3>
                  <ul className={styles.deliverablesList}>
                    {deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {notes.length > 0 && (
                <div className={styles.notesBox}>
                  {notes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── CTA ── */}
        <div className={styles.ctaPanel}>
          <div className={styles.ctaText}>
            <div className={styles.ctaHeading}>
              <span className={styles.ctaSerifWord}>¿Te interesa</span>{' '}
              <span className={styles.ctaSansWord}>ESTE SERVICIO?</span>
            </div>
            <p>Conversemos y te propongo una ruta clara para tu negocio.</p>
          </div>
          <a href="/#contacto" className={styles.ctaBtn}>
            Agendar {service.slug === 'diagnostico-estrategico' ? 'diagnóstico' : 'consulta'} →
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetailPage;
