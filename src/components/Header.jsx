import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

const navItems = [
  { label: 'Mi trabajo', href: '#portfolio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Acerca', href: '#sobre-mi' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const isHome = typeof window !== 'undefined' ? window.location.pathname === '/' : true;
  const isHomeTop = isHome && !scrolled;
  const logoSrc = '/logo-erika.png';
  const resolveHash = (hash) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isHomeTop ? styles.homeTop : ''} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href={isHome ? '#hero' : '/'} className={styles.logo}>
          <img
            src={logoSrc}
            alt="Erika Bardales"
            className={`${styles.logoImage} ${isHomeTop ? styles.logoImageOnTop : ''}`}
          />
        </a>
        <nav className={styles.nav} aria-label="Navegacion principal">
          {navItems.map((item) => (
            <a key={item.href} href={resolveHash(item.href)} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href={resolveHash('#contacto')} className={styles.bookNow}>
          Contacto
        </a>
      </div>
    </header>
  );
}

export default Header;
