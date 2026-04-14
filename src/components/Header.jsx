import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

const navItems = [
  { label: 'Nuestro proceso', href: '#metodologia' },
  { label: 'Sistema Base Comercial', href: '#servicios' },
  { label: 'Portafolio', href: '#portfolio' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = typeof window !== 'undefined' ? window.location.pathname === '/' : true;
  const isHomeTop = isHome && !scrolled;
  const logoSrc = '/logo-erika.png';
  const resolveHash = (hash) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${isHomeTop ? styles.homeTop : ''} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuOpen : ''}`}
    >
      <div className={`container ${styles.inner}`}>
        <a href={isHome ? '#hero' : '/'} className={styles.logo} onClick={handleNavClick}>
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
          Trabajemos juntos
        </a>
        <button
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={styles.menuToggleLine} />
          <span className={styles.menuToggleLine} />
          <span className={styles.menuToggleLine} />
        </button>
      </div>
      <div
        id="mobile-navigation"
        className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ''}`}
      >
        <nav className={styles.mobileNav} aria-label="Navegacion movil">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={resolveHash(item.href)}
              className={styles.mobileNavLink}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
          <a
            href={resolveHash('#contacto')}
            className={`${styles.bookNow} ${styles.mobileBookNow}`}
            onClick={handleNavClick}
          >
            Trabajemos juntos
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
