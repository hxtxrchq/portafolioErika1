import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/FinalCTA.module.css';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

function FinalCTA() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    ayuda: '',
    mensaje: '',
  });
  const [submitState, setSubmitState] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      setSubmitState('error');
      setSubmitMessage('Falta configurar VITE_FORMSPREE_ENDPOINT para enviar el formulario.');
      return;
    }

    try {
      setSubmitState('loading');
      setSubmitMessage('');

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Consulta web - ${formData.nombre || 'Nuevo contacto'}`,
        }),
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar el formulario.');
      }

      setSubmitState('success');
      setSubmitMessage('Gracias, recibí tu mensaje. Te responderé pronto.');
      setFormData({
        nombre: '',
        empresa: '',
        correo: '',
        ayuda: '',
        mensaje: '',
      });
    } catch {
      setSubmitState('error');
      setSubmitMessage('Hubo un problema al enviar. Inténtalo de nuevo en unos minutos.');
    }
  };

  return (
    <motion.section
      id="contacto"
      className={styles.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container">
        <div className={styles.contentGrid}>
          <div className={styles.leftCol}>
            <span className={styles.sectionDivider} aria-hidden="true" />
            <h2 className={styles.heading}>
              ¿Quieres evaluar el potencial de crecimiento de tu negocio?
            </h2>
            <p className={styles.sub}>
              Podemos tener una conversación inicial para entender tu empresa,
              identificar oportunidades y evaluar cómo trabajar juntos.
            </p>
            <div className={styles.actions}>
              <a
                href="mailto:calonsoparedes1@gmail.com?subject=Consulta%20desde%20la%20web"
                className="btn btnCream"
              >
                Evaluar mi negocio
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.formTitle}>Formulario</p>
            <div className={styles.formGrid}>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
              />
              <input
                type="text"
                name="empresa"
                placeholder="Empresa"
                value={formData.empresa}
                onChange={handleChange}
              />
              <input
                type="email"
                name="correo"
                placeholder="Correo electrónico"
                required
                value={formData.correo}
                onChange={handleChange}
              />
              <input
                type="text"
                name="ayuda"
                placeholder="¿En qué necesitas ayuda?"
                required
                value={formData.ayuda}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="mensaje"
              rows="4"
              placeholder="Mensaje"
              required
              value={formData.mensaje}
              onChange={handleChange}
            />
            {submitMessage ? (
              <p
                className={`${styles.formStatus} ${submitState === 'error' ? styles.formStatusError : styles.formStatusSuccess}`}
                role="status"
              >
                {submitMessage}
              </p>
            ) : null}
            <button
              type="submit"
              className="btn btnCream"
              disabled={submitState === 'loading'}
            >
              {submitState === 'loading' ? 'Enviando...' : 'Evaluar mi negocio'}
            </button>
          </form>
        </div>
      </div>

      <div className={styles.bgWord} aria-hidden="true">CONTACTO</div>
    </motion.section>
  );
}

export default FinalCTA;