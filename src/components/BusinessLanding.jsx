import { useState } from 'react';
import styles from '../styles/BusinessLanding.module.css';

const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';
const schedulerUrl =
  import.meta.env.VITE_SCHEDULER_URL ||
  import.meta.env.VITE_CALENDLY_URL ||
  'https://cal.com/erikabardales.mkt/hablemos?overlayCalendar=true';
const isSuccessValue = (value) => value === true || value === 'true' || value === 1 || value === '1';

const redirectToScheduler = () => {
  window.location.href = schedulerUrl;
};

const sendWithWeb3FormsClient = async ({ nombre, empresa, correo, mensaje }) => {
  if (!web3FormsAccessKey) {
    throw new Error('Falta VITE_WEB3FORMS_ACCESS_KEY para usar el envio directo desde navegador.');
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: web3FormsAccessKey,
      subject: 'Nuevo lead desde tu Portafolio | Revisar y agendar reunion',
      from_name: nombre,
      email: correo,
      nombre,
      empresa: empresa || 'No indicada',
      celular: 'No indicado',
      mensaje,
      fuente: 'Formulario ErikaPortafolio',
    }),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok || !isSuccessValue(payload?.success)) {
    throw new Error(payload?.message || 'Web3Forms no aceptó el envio.');
  }
};

function BusinessLanding() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    ayuda: '',
    mensaje: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setSubmitMessage('Enviando tu mensaje...');
    setSubmitError(false);

    const fullMessage = formData.ayuda
      ? `Necesita ayuda en: ${formData.ayuda}\n\n${formData.mensaje}`
      : formData.mensaje;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          empresa: formData.empresa,
          correo: formData.correo,
          celular: '',
          mensaje: fullMessage,
        }),
      });

      const contentType = response.headers.get('content-type') || '';
      const payload = contentType.includes('application/json')
        ? await response.json().catch(() => ({}))
        : {};

      if (!response.ok || !payload?.ok) {
        if (!contentType.includes('application/json')) {
          throw new Error('El endpoint de correo no respondio en JSON. Revisa la configuracion en Vercel.');
        }
        throw new Error(payload?.details || payload?.error || 'No se pudo enviar el formulario.');
      }

      setSubmitMessage('Mensaje enviado. Redirigiendo para agendar tu reunion...');
      setSubmitError(false);
      setFormData({
        nombre: '',
        empresa: '',
        correo: '',
        ayuda: '',
        mensaje: '',
      });
      setTimeout(redirectToScheduler, 700);
    } catch (error) {
      try {
        await sendWithWeb3FormsClient({
          nombre: formData.nombre,
          empresa: formData.empresa,
          correo: formData.correo,
          mensaje: fullMessage,
        });

        setSubmitMessage('Mensaje enviado. Redirigiendo para agendar tu reunion...');
        setSubmitError(false);
        setFormData({
          nombre: '',
          empresa: '',
          correo: '',
          ayuda: '',
          mensaje: '',
        });
        setTimeout(redirectToScheduler, 700);
      } catch (clientError) {
        setSubmitMessage(clientError?.message || error?.message || 'No se pudo enviar en este momento. Intenta nuevamente.');
        setSubmitError(true);
      }
    } finally {
      setIsSending(false);
    }
  };

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
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              Nombre
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </label>

            <label>
              Empresa
              <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} />
            </label>

            <label>
              Correo electrónico
              <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
            </label>

            <label>
              ¿En qué necesitas ayuda?
              <input type="text" name="ayuda" value={formData.ayuda} onChange={handleChange} />
            </label>

            <label>
              Mensaje
              <textarea name="mensaje" rows="5" value={formData.mensaje} onChange={handleChange} required />
            </label>

            <button className="btn btnOrangeFill" type="submit" disabled={isSending}>
              {isSending ? 'Enviando...' : 'Evaluar mi negocio'}
            </button>
            {submitMessage && (
              <p style={{ marginTop: '10px', color: submitError ? '#b42318' : '#1f7a3d' }}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

export default BusinessLanding;
