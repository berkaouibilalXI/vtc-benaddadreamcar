import { motion } from 'framer-motion';
import { Icon } from './IconSprite';
import { useLanguage } from '../context/LanguageContext';

export default function WhatsappBar() {
  const { t, contacts } = useLanguage();

  return (
    <motion.div
      className="fixed left-4 right-4 z-[55] h-14 rounded-full bg-red shadow-wa tablet:left-auto tablet:right-8 tablet:w-auto"
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <a
        href={contacts.waLink}
        target="_blank"
        rel="noopener"
        className="flex h-full items-center justify-center gap-2.5 px-5 font-display text-[clamp(13px,1.4vw,14px)] font-bold text-white tablet:px-6"
      >
        <Icon name="whatsapp" className="h-[19px] w-[19px] shrink-0" style={{ stroke: 'none', fill: 'currentColor' }} />
        <span>{t('cta.whatsapp')}</span>
      </a>
    </motion.div>
  );
}
