import { useState } from 'react';
import styles from '../styles/FinalCTA.module.css';

function FinalCTA() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    celular: '',
    mensaje: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
              <input name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleChange} />
              <input name="empresa" placeholder="Empresa" value={formData.empresa} onChange={handleChange} />
            </div>
            <div className={styles.row2}>
              <input name="correo" placeholder="Correo" value={formData.correo} onChange={handleChange} />
              <input name="celular" placeholder="Celular" value={formData.celular} onChange={handleChange} />
            </div>
            <textarea name="mensaje" rows="4" placeholder="Mensaje" value={formData.mensaje} onChange={handleChange} />
            <button type="submit">Enviar</button>
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
