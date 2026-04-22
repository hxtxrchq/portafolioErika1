import { useState } from 'react';
import styles from '../styles/FinalCTA.module.css';

const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';
const schedulerUrl =
  import.meta.env.VITE_SCHEDULER_URL ||
  import.meta.env.VITE_CALENDLY_URL ||
  'https://cal.com';
const isSuccessValue = (value) => value === true || value === 'true' || value === 1 || value === '1';

const redirectToScheduler = () => {
  window.location.href = schedulerUrl;
};

const sendWithWeb3FormsClient = async ({ nombre, empresa, correo, celular, mensaje }) => {
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
      celular: celular || 'No indicado',
      mensaje,
      fuente: 'Formulario ErikaPortafolio',
    }),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok || !isSuccessValue(payload?.success)) {
    throw new Error(payload?.message || 'Web3Forms no aceptó el envio.');
  }
};

function FinalCTA() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    celular: '',
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
          celular: formData.celular,
          mensaje: formData.mensaje,
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
        celular: '',
        mensaje: '',
      });
      setTimeout(redirectToScheduler, 700);
    } catch (error) {
      try {
        await sendWithWeb3FormsClient({
          nombre: formData.nombre,
          empresa: formData.empresa,
          correo: formData.correo,
          celular: formData.celular,
          mensaje: formData.mensaje,
        });

        setSubmitMessage('Mensaje enviado. Redirigiendo para agendar tu reunion...');
        setSubmitError(false);
        setFormData({
          nombre: '',
          empresa: '',
          correo: '',
          celular: '',
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
    <section id="contacto" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2>
              <span>Hablemos</span>
              <strong> de tu negocio</strong>
            </h2>
            <p>
              Podemos tener una conversacion inicial para entender tu empresa,
              identificar oportunidades y evaluar como trabajar juntos.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row2}>
              <input
                name="nombre"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
              <input name="empresa" placeholder="Empresa" value={formData.empresa} onChange={handleChange} />
            </div>
            <div className={styles.row2}>
              <input
                type="email"
                name="correo"
                placeholder="Correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
              <input name="celular" placeholder="Celular" value={formData.celular} onChange={handleChange} />
            </div>
            <textarea
              name="mensaje"
              rows="4"
              placeholder="Mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={isSending}>
              {isSending ? 'Enviando...' : 'Enviar'}
            </button>
            {submitMessage && (
              <p className={`${styles.formStatus} ${submitError ? styles.error : styles.success}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className={styles.bottomBrand}>
        <img src="/escalemos tu negocio-8.png" alt="Escalemos tu negocio" className={styles.seal} />
      </div>
    </section>
  );
}

export default FinalCTA;
