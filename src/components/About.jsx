import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import styles from '../styles/About.module.css';

const tags = ['Estrategia', 'Data', 'Marketing', 'Ventas'];

function About() {
  return (
    <motion.section
      id="about"
      className={styles.about}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
    >
      <div className={`container ${styles.wrapper}`}>
        <h2>Sobre mí</h2>
        <div className={styles.copy}>
          <p>
            Ingeniera Empresarial con más de 6 años de experiencia diseñando y liderando
            estrategias comerciales y de marketing orientadas a crecimiento y resultados
            medibles.
          </p>
          <p>
            He trabajado tanto desde agencia como en gestión directa de negocios,
            liderando equipos por proyecto, gestionando campañas integrales y acompañando
            a marcas en la toma de decisiones comerciales basadas en datos.
          </p>
          <p>
            Adapto herramientas de análisis, gestión y publicidad según las necesidades
            de cada proyecto, alineando estrategia, ejecución y performance.
          </p>
        </div>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;