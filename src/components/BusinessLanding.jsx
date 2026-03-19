import styles from '../styles/BusinessLanding.module.css';

function BusinessLanding() {
  return (
    <div className={styles.page}>
      <section id="hero" className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.heroEyebrow}>Hero</p>
          <h1>Erika Bardales</h1>
          <p className={styles.heroLead}>
            No todo problema de marketing es un problema de marketing.
          </p>
          <div className={styles.heroActions}>
            <a className="btn btnOrangeFill" href="#contacto">Evaluar mi negocio</a>
            <a className="btn btnLime" href="#metodologia">Ver cómo trabajo</a>
          </div>
        </div>
      </section>

      <section id="enfoque" className={styles.section}>
        <div className={`container ${styles.block}`}>
          <h2>Una mirada estratégica del negocio</h2>
          <p>
            Mi formación como ingeniera empresarial me permite analizar una empresa más allá del marketing.
          </p>
          <p>
            Antes de plantear campañas o comunicación, reviso cómo funcionan los procesos, la operación comercial y la estructura de ventas.
          </p>
          <p>
            Esto permite entender qué está frenando el crecimiento y dónde realmente se deben tomar decisiones.
          </p>
        </div>
      </section>

      <section id="metodologia" className={styles.section}>
        <div className={`container ${styles.block}`}>
          <h2>Cómo trabajo con las empresas</h2>

          <article className={styles.card}>
            <h3>Diagnóstico</h3>
            <p>Analizo el negocio desde tres dimensiones:</p>
            <ul>
              <li>operación</li>
              <li>ventas</li>
              <li>marketing</li>
            </ul>
            <p>El objetivo es identificar qué está frenando el crecimiento.</p>
          </article>

          <article className={styles.card}>
            <h3>Plan de acción</h3>
            <p>A partir del diagnóstico desarrollo un plan que define:</p>
            <ul>
              <li>objetivos comerciales</li>
              <li>prioridades estratégicas</li>
              <li>acciones de marketing</li>
              <li>mejoras en procesos</li>
            </ul>
          </article>

          <article className={styles.card}>
            <h3>Implementación</h3>
            <p>
              Dependiendo de lo que el negocio necesite, acompaño la ejecución en estrategia comercial, optimización de procesos o marketing.
            </p>
            <p>
              Cuando el plan requiere implementación en marketing, trabajo junto a mi equipo en la agencia.
            </p>
          </article>
        </div>
      </section>

      <section id="casos" className={styles.section}>
        <div className={`container ${styles.block}`}>
          <h2>Algunos proyectos en los que he trabajado</h2>

          <article className={styles.caseCard}>
            <h3>Caso 1</h3>
            <p><strong>Problema:</strong> La empresa buscaba mejorar su marketing digital, pero no tenía una estructura comercial clara.</p>
            <p><strong>Solución:</strong> Se desarrolló un plan de acción que incluyó reorganización del proceso comercial y una estrategia de posicionamiento.</p>
            <p><strong>Testimonio (agregar video):</strong> creo que podría grabarles y si me dejarían jaja</p>
            <blockquote>
              “Erika nos ayudó a entender que el problema no era solo marketing, sino la forma en que estábamos estructurando nuestro crecimiento.”
            </blockquote>
          </article>

          <article className={styles.caseCard}>
            <h3>Caso 2</h3>
            <p><strong>Problema:</strong> La empresa tenía presencia digital pero no lograba convertir ese tráfico en ventas.</p>
            <p><strong>Solución:</strong> Se realizó un diagnóstico comercial y se definió una estrategia de marketing alineada con los objetivos de crecimiento.</p>
            <blockquote>
              “Su capacidad para analizar el negocio completo nos permitió replantear nuestra estrategia.”
            </blockquote>
          </article>
        </div>
      </section>

      <section id="servicios" className={styles.section}>
        <div className={`container ${styles.block}`}>
          <h2>Cómo puedo ayudarte</h2>

          <article className={styles.serviceCard}>
            <h3>Diagnóstico estratégico y plan de crecimiento</h3>
            <p>
              Un análisis integral del negocio para identificar qué está frenando su crecimiento y definir una estrategia clara de acción.
            </p>
            <p>Este servicio incluye:</p>
            <ul>
              <li>análisis de la operación actual del negocio</li>
              <li>revisión del proceso comercial y estructura de ventas</li>
              <li>evaluación de la estrategia de marketing y posicionamiento</li>
              <li>identificación de problemas y oportunidades de mejora</li>
              <li>definición de objetivos comerciales</li>
              <li>desarrollo de un plan de acción comercial priorizado</li>
              <li>recomendaciones estratégicas para marketing, ventas y operación</li>
            </ul>
            <p><strong>Entregable:</strong> Documento estratégico con diagnóstico del negocio y plan de acción para crecimiento.</p>
          </article>

          <article className={styles.serviceCard}>
            <h3>Estrategia de marca y dirección estratégica de marketing</h3>
            <p>
              Un proceso para definir o reorganizar la estrategia de la marca y asegurar que el marketing esté alineado con la visión del negocio.
            </p>
            <p>Este servicio incluye:</p>
            <ul>
              <li>revisión de visión, misión y valores de la empresa</li>
              <li>análisis del posicionamiento actual de la marca</li>
              <li>definición o ajuste del concepto estratégico de marca</li>
              <li>alineación entre identidad de marca y objetivos del negocio</li>
              <li>definición de pilares de comunicación y narrativa de marca</li>
              <li>desarrollo de lineamientos estratégicos de marketing</li>
              <li>definición de objetivos de marketing alineados a la estrategia comercial</li>
              <li>identificación de canales y prioridades estratégicas de marketing</li>
            </ul>
            <p><strong>Entregables:</strong></p>
            <ul>
              <li>documento estratégico de marca</li>
              <li>lineamientos de comunicación</li>
              <li>guía estratégica de marketing</li>
            </ul>
          </article>

          <article className={styles.serviceCard}>
            <h3>Desarrollo estratégico por proyecto</h3>
            <p>
              Acompañamiento integral en el desarrollo de un proyecto específico, desde el diagnóstico hasta la implementación de las acciones estratégicas.
            </p>
            <p>Este servicio puede incluir:</p>
            <ul>
              <li>diagnóstico inicial del negocio</li>
              <li>desarrollo de estrategia comercial y de marketing</li>
              <li>organización de procesos y estructura operativa</li>
              <li>implementación de acciones estratégicas</li>
              <li>coordinación de equipos o proveedores</li>
              <li>seguimiento del desarrollo del proyecto</li>
            </ul>
            <p>
              Este servicio se trabaja por proyecto o periodo determinado, dependiendo de las necesidades de la empresa.
            </p>
          </article>
        </div>
      </section>

      <section id="sobre-mi" className={styles.section}>
        <div className={`container ${styles.block}`}>
          <h2>Sobre mí</h2>
          <p>
            Soy ingeniera empresarial con más de 6 años de experiencia diseñando estrategias comerciales y de marketing para empresas en crecimiento.
          </p>
          <p>
            Trabajo conectando visión de negocio, procesos y comunicación para que las decisiones de marketing realmente generen resultados.
          </p>
        </div>
      </section>

      <section id="cta-final" className={styles.ctaSection}>
        <div className={`container ${styles.block}`}>
          <h2>¿Quieres evaluar el potencial de crecimiento de tu negocio?</h2>
          <p>
            Podemos tener una conversación inicial para entender tu empresa, identificar oportunidades y evaluar cómo trabajar juntos.
          </p>
          <a className="btn btnOrangeFill" href="#contacto">Evaluar mi negocio</a>
        </div>
      </section>

      <section id="contacto" className={styles.section}>
        <div className={`container ${styles.block}`}>
          <h2>Formulario</h2>
          <form className={styles.form}>
            <label>
              Nombre
              <input type="text" name="nombre" />
            </label>

            <label>
              Empresa
              <input type="text" name="empresa" />
            </label>

            <label>
              Correo electrónico
              <input type="email" name="correo" />
            </label>

            <label>
              ¿En qué necesitas ayuda?
              <input type="text" name="ayuda" />
            </label>

            <label>
              Mensaje
              <textarea name="mensaje" rows="5" />
            </label>

            <button className="btn btnOrangeFill" type="submit">Evaluar mi negocio</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default BusinessLanding;
