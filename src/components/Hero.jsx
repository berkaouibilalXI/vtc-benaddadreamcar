import { motion } from 'framer-motion';
import { Icon } from './IconSprite';
import MediaSlot from './MediaSlot';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, contacts } = useLanguage();

  return (
    <section className="section hero" id="hero">
      <div className="container hero-inner">
        <Reveal className="hero-text">
          <h1>{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <p className="hero-copy">{t('hero.copy')}</p>
          <div className="hero-ctas">
            <motion.a
              href={contacts.waLink}
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
              whileTap={{ scale: 0.97 }}
            >
              <Icon name="whatsapp" className="icon btn-icon" style={{ stroke: 'none', fill: 'currentColor' }} />
              <span>{t('cta.whatsapp')}</span>
            </motion.a>
            <a href="#services" className="btn btn-outline">
              {t('hero.discover')}
            </a>
          </div>
          <div className="hero-info">
            <Icon name="plane" />
            <span>{t('hero.info')}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <MediaSlot className="hero-media" src="/assets/hero-vehicle.webp" alt={t('hero.imgAlt')} loading="eager" />
        </Reveal>
      </div>

      <div className="scroll-hint">
        <Icon name="chevron" rotate={90} />
      </div>
    </section>
  );
}
