import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import IconSprite from './components/IconSprite';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CityOran from './components/CityOran';
import Fleet from './components/Fleet';
import Partners from './components/Partners';
import HowItWorks from './components/HowItWorks';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';
import WhatsappBar from './components/WhatsappBar';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <LanguageProvider>
      <IconSprite />

      <Navbar onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main id="content">
        <Hero />
        <Services />
        <WhyChooseUs />
        <CityOran />
        <Fleet />
        <Partners />
        <HowItWorks />
        <CtaFinal />
        <Footer />
      </main>

      <WhatsappBar />
    </LanguageProvider>
  );
}
