import { motion } from 'framer-motion';
import { Icon } from './IconSprite';
import { useLanguage } from '../context/LanguageContext';

export default function WhatsappBar() {
  const { t, contacts } = useLanguage();

  return (
    <motion.div
      className="wa-bar"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <a href={contacts.waLink} target="_blank" rel="noopener">
        <Icon name="whatsapp" />
        <span>{t('cta.whatsapp')}</span>
      </a>
    </motion.div>
  );
}
