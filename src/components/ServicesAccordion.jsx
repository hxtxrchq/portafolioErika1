import { motion } from 'framer-motion';
import { services } from '../data/services';
import { fadeUp } from '../utils/motion';
import styles from '../styles/ServicesAccordion.module.css';

function ServicesAccordion() {
  return (
    <motion.section
      id="servicios"
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      <div className="container">
        <div className={styles.headerPanel}>
          <span className={styles.sectionDivider} aria-hidden="true" />
          <h2>Como puedo ayudarte</h2>
          <p className={styles.intro}>
            Servicios estrategicos en formato claro y accionable.
            Puedes abrir cada servicio en una pagina dedicada.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article key={service.slug} className={styles.card}>
              <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
              <a className={styles.link} href={`/servicios/${service.slug}`}>
                Ver detalle
              </a>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ServicesAccordion;
