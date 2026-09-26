import { Icon } from './IconSprite';
import TopoMotif from './TopoMotif';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

const TAGS = [
  { icon: 'plane', key: 'city.cat.airport' },
  { icon: 'building', key: 'city.cat.hotels' },
  { icon: 'briefcase', key: 'city.cat.business' },
  { icon: 'steering', key: 'ctaFinal.disposal' },
];

export default function CtaFinal() {
  const { t, contacts } = useLanguage();

  return (
    <section className="section cta-final" id="book">
      <TopoMotif />
      <Reveal as="div" className="container cta-final-inner">
        <h2>{t('ctaFinal.title')}</h2>
        <p className="lead">{t('ctaFinal.lead')}</p>

        <div className="cta-tags">
          {TAGS.map((tag) => (
            <span key={tag.key}>
              <Icon name={tag.icon} />
              <span>{t(tag.key)}</span>
            </span>
          ))}
        </div>

        <div className="cta-final-btns">
          <a href={contacts.waLink} target="_blank" rel="noopener" className="btn btn-primary">
            <Icon name="whatsapp" className="icon btn-icon" style={{ stroke: 'none', fill: 'currentColor' }} />
            <span>{t('cta.whatsapp')}</span>
          </a>
          {contacts.telLink && (
            <a href={contacts.telLink} className="btn btn-outline-light">
              <Icon name="phone" className="icon btn-icon" />
              <span>{t('ctaFinal.call')}</span>
            </a>
          )}
        </div>

        <p className="cta-final-avail">{t('ctaFinal.avail')}</p>
      </Reveal>
    </section>
  );
}
