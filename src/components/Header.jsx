import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

const navItems = [
  { label: 'Acerca', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Portafolio', href: '#portfolio' },
  { label: 'Voz', href: '#voice' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>
          Erika
        </a>
        <nav className={styles.nav} aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className={styles.bookNow}>
          Contacto
        </a>
      </div>
    </header>
  );
}

export default Header;