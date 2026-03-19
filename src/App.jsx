import Header from './components/Header';
import Hero from './components/Hero';
import AboutMediaKit from './components/AboutMediaKit';
import ServicesAccordion from './components/ServicesAccordion';
import Experience from './components/Experience';
import MethodologyTimeline from './components/MethodologyTimeline';
import PortfolioRecentWork from './components/PortfolioRecentWork';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
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