import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMediaKit from './components/AboutMediaKit';
import ServicesAccordion from './components/ServicesAccordion';
import Experience from './components/Experience';
import MethodologyTimeline from './components/MethodologyTimeline';
import PortfolioRecentWork from './components/PortfolioRecentWork';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import LogosStrip from './components/LogosStrip';
import ServiceDetailPage from './components/ServiceDetailPage';

function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  const serviceSlug = path.startsWith('/servicios/') ? path.replace('/servicios/', '') : null;

  /* Auto-scroll to hash anchor after page load */
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  }, []);

  if (serviceSlug) {
    return (
      <>
        <Header />
        <main>
          <ServiceDetailPage slug={serviceSlug} />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <LogosStrip />
        <MethodologyTimeline />
        <PortfolioRecentWork />
        <ServicesAccordion />
        <AboutMediaKit />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
