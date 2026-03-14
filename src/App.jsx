import Header from './components/Header';
import Hero from './components/Hero';
import AboutMediaKit from './components/AboutMediaKit';
import ServicesAccordion from './components/ServicesAccordion';
import VoiceSection from './components/VoiceSection';
import Experience from './components/Experience';
import MethodologyTimeline from './components/MethodologyTimeline';
import PortfolioRecentWork from './components/PortfolioRecentWork';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMediaKit />
        <ServicesAccordion />
        <VoiceSection />
        <Experience />
        <MethodologyTimeline />
        <PortfolioRecentWork />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;