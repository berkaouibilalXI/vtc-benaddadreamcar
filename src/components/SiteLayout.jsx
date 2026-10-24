import { useState } from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import Seo from '../seo/Seo';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import WhatsappBar from './WhatsappBar';

/** Squelette commun à toutes les pages : <head> SEO, navigation, contenu, pied de page. */
export default function SiteLayout({ lang, pageId, waMessage, children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <LanguageProvider lang={lang} pageId={pageId} waMessage={waMessage}>
      <Seo />

      <Navbar onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main id="content">{children}</main>

      <Footer />
      <WhatsappBar />
    </LanguageProvider>
  );
}
