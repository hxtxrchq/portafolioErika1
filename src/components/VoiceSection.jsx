import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/VoiceSection.module.css';

// Reemplaza con la URL de tu demo real (ej. /demo-voz.mp3 en /public)
const DEMO_URL = '/demo-voz.mp3';

function PlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <polygon points="10,7 22,14 10,21" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="8" y="6" width="4" height="16" rx="1.5" fill="currentColor" />
      <rect x="16" y="6" width="4" height="16" rx="1.5" fill="currentColor" />
    </svg>
  );
}

function VoiceSection() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (value) => {
    if (!Number.isFinite(value) || value <= 0) return '0:00';
    const mins = Math.floor(value / 60);
    const secs = Math.floor(value % 60)
      .toString()
      .padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {});
      setPlaying(true);
    }
  };

  const onTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setCurrentTime(audio.currentTime);
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const onLoadedMetadata = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setDuration(audio.duration);
  };

  const onEnded = () => {
    setPlaying(false);
    setCurrentTime(0);
    setProgress(0);
  };

  const seek = (e) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
    setCurrentTime(audio.currentTime);
    setProgress(ratio * 100);
  };

  return (
    <motion.section
      id="voice"
      className={styles.section}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`container ${styles.layout}`}>
        <div className={styles.left}>
          <span className={styles.sectionDivider} aria-hidden="true" />
          <h2>
            Una firma de voz
            <em> memorable</em> para tu marca
          </h2>
          <p className={styles.body}>
            Producciones de locución con dirección narrativa y enfoque comercial.
            Cada entrega se diseña para transmitir autoridad, cercanía y claridad en
            piezas institucionales, audiovisuales y de venta.
          </p>
          <div className={styles.tags}>
            {['Brand Films', 'E-learning', 'Anuncios', 'Documentales', 'Explainer'].map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
          <div className={styles.metrics}>
            <div>
              <p className={styles.metricValue}>+120</p>
              <p className={styles.metricLabel}>piezas locutadas</p>
            </div>
            <div>
              <p className={styles.metricValue}>48h</p>
              <p className={styles.metricLabel}>entrega promedio</p>
            </div>
          </div>
          <div className={styles.actions}>
            <a href="#contact" className="btn btnOrangeFill">Solicitar cotización</a>
          </div>
        </div>

        <div className={styles.player}>
          <div className={styles.playerTop}>
            <p className={styles.playerLabel}>AUDIO DEMO</p>
            <p className={styles.playerTimer}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </p>
          </div>

          <p className={styles.playerTitle}>Locución corporativa premium</p>

          <div className={styles.wave} aria-hidden="true">
            {Array.from({ length: 26 }).map((_, idx) => (
              <span
                key={idx}
                className={`${styles.bar} ${playing ? styles.barActive : ''}`}
                style={{ '--i': idx }}
              />
            ))}
          </div>

          <div className={styles.controls}>
            <button
              className={`${styles.playBtn} ${playing ? styles.playBtnActive : ''}`}
              onClick={toggle}
              aria-label={playing ? 'Pausar demo' : 'Reproducir demo de voz'}
            >
              {playing ? <PauseIcon /> : <PlayIcon />}
            </button>
            <p className={styles.playerNote}>
              {playing ? 'Reproduciendo muestra en curso' : 'Haz clic para escuchar la muestra'}
            </p>
          </div>

          <div
            className={styles.track}
            onClick={seek}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            aria-label="Progreso del audio"
          >
            <div className={styles.fill} style={{ width: `${progress}%` }} />
            <span className={styles.thumb} style={{ left: `${progress}%` }} />
          </div>

          <audio
            ref={audioRef}
            src={DEMO_URL}
            onTimeUpdate={onTimeUpdate}
            onLoadedMetadata={onLoadedMetadata}
            onEnded={onEnded}
            preload="metadata"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default VoiceSection;