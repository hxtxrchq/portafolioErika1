import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMediaKit from './components/AboutMediaKit';
import ServicesAccordion from './components/ServicesAccordion';
import Experience from './components/Experience';
import MethodologyTimeline from './components/MethodologyTimeline';
import PortfolioRecentWork from './components/PortfolioRecentWork';
import FinalCTA from './components/FinalCTA';
import LogosStrip from './components/LogosStrip';
import ServiceDetailPage from './components/ServiceDetailPage';
import WhatsAppFab from './components/WhatsAppFab';
import ScrollZoomEffect from './components/ScrollZoomEffect';

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
      </>
    );
  }

  return (
    <>
      <Header />
      <main style={{ overflowX: 'hidden' }}>
        <ScrollZoomEffect isFirst>
          <Hero />
        </ScrollZoomEffect>
        <ScrollZoomEffect>
          <Experience />
        </ScrollZoomEffect>
        <ScrollZoomEffect>
          <MethodologyTimeline />
        </ScrollZoomEffect>
        <ScrollZoomEffect>
          <ServicesAccordion />
        </ScrollZoomEffect>
        <ScrollZoomEffect>
          <PortfolioRecentWork />
        </ScrollZoomEffect>
        <ScrollZoomEffect>
          <AboutMediaKit />
        </ScrollZoomEffect>
        <ScrollZoomEffect>
          <LogosStrip />
        </ScrollZoomEffect>
        <ScrollZoomEffect>
          <FinalCTA />
        </ScrollZoomEffect>
      </main>
      <WhatsAppFab />
    </>
  );
}

export default App;
