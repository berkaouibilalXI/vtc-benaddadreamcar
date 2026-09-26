import { motion } from 'framer-motion';
import MediaSlot from './MediaSlot';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';
import { Send, Phone, ChevronDownIcon } from 'lucide-react';
import { container, btnPrimary, btnOutline, btnIcon } from '../styles/ui';

export default function Hero() {
  const { t, contacts } = useLanguage();

  return (
    <section className="pt-12" id="hero">
      <div className={`${container} tablet:grid tablet:grid-cols-[1.1fr_0.9fr] tablet:items-center tablet:gap-16`}>
        <Reveal className="pb-8">
          <h1 className="text-[clamp(32px,7vw,48px)] font-display font-extrabold leading-[1.15] tracking-[-0.01em]">
            {t('hero.title')}
          </h1>
          <p className="mt-4 font-display text-[clamp(15px,2vw,18px)] font-bold text-red">
            {t('hero.subtitle')}
          </p>
          <p className="mt-4 max-w-[46ch] text-[clamp(14px,1.6vw,16px)] text-grey-text">
            {t('hero.copy')}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href={contacts.waLink}
              target="_blank"
              rel="noopener"
              className={btnPrimary}
              whileTap={{ scale: 0.97 }}
            >
              <Send size={18} className={btnIcon} />
              <span>{t('cta.whatsapp')}</span>
            </motion.a>
            {contacts.telLink && (
              <motion.a href={contacts.telLink} className={btnPrimary} whileTap={{ scale: 0.97 }}>
                <Phone size={18} className={btnIcon} />
                <span>{t('cta.call')}</span>
              </motion.a>
            )}
            <a href="#services" className={btnOutline}>
              {t('hero.discover')}
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 text-[clamp(13px,1.4vw,14px)] text-grey-text">
            <Send size={16} className="text-red" />
            <span>{t('hero.info')}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <MediaSlot
            className="relative mt-12 aspect-4/5 rounded-card border border-line tablet:mt-0 tablet:aspect-auto tablet:h-130"
            src="/assets/hero.png"
            alt={t('hero.imgAlt')}
            loading="eager"
          />
        </Reveal>
      </div>

      <div className="flex justify-center py-4 text-grey-text">
        <ChevronDownIcon className="h-5 w-5 animate-bob" />
      </div>
    </section>
  );
}
