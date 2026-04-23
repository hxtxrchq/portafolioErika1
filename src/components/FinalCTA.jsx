import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/FinalCTA.module.css';
import { fadeUp } from '../utils/motion';

const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';
const schedulerUrl =
  import.meta.env.VITE_SCHEDULER_URL ||
  import.meta.env.VITE_CALENDLY_URL ||
  'https://cal.com/erikabardales.mkt/hablemos?overlayCalendar=true';
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
    <motion.section
      id="contacto"
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <span>Hablemos</span>
              <strong> de tu negocio</strong>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: 0.16 }}
            >
              Podemos tener una conversacion inicial para entender tu empresa,
              identificar oportunidades y evaluar como trabajar juntos.
            </motion.p>
          </motion.div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
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
          </motion.form>
        </div>
      </div>

      <div className={styles.bottomBrand}>
        <motion.div
          className={styles.sealOrbit}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src="/escalemos tu negocio-8.png"
            alt="Escalemos tu negocio"
            className={styles.seal}
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default FinalCTA;
