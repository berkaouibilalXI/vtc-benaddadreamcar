import { Icon } from './IconSprite';
import TopoMotif from './TopoMotif';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';
import { container, section, btnPrimary, btnOutlineLight, btnIcon } from '../styles/ui';

const TAGS = [
  { icon: 'plane', key: 'city.cat.airport' },
  { icon: 'building', key: 'city.cat.hotels' },
  { icon: 'briefcase', key: 'city.cat.business' },
  { icon: 'steering', key: 'ctaFinal.disposal' },
];

export default function CtaFinal() {
  const { t, contacts } = useLanguage();

  return (
    <section className={`${section} relative overflow-hidden bg-ink text-white`} id="book">
      <TopoMotif />
      <Reveal as="div" className={`${container} relative z-[2]`}>
        <h2 className="text-[clamp(32px,7vw,48px)] font-display font-extrabold leading-[1.15] tracking-[-0.01em] text-white">
          {t('ctaFinal.title')}
        </h2>
        <p className="mt-4 text-[clamp(14px,1.6vw,16px)] text-white/80">{t('ctaFinal.lead')}</p>

        <div className="mt-8 flex flex-wrap gap-6">
          {TAGS.map((tag) => (
            <span key={tag.key} className="flex items-center gap-2 text-[clamp(13px,1.4vw,14px)] text-white/85">
              <Icon
                name={tag.icon}
                className="h-[18px] w-[18px] shrink-0 stroke-white/55 fill-none stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"
              />
              <span>{t(tag.key)}</span>
            </span>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 tablet:flex-row">
          <a href={contacts.waLink} target="_blank" rel="noopener" className={btnPrimary}>
            <Icon name="whatsapp" className={btnIcon} style={{ stroke: 'none', fill: 'currentColor' }} />
            <span>{t('cta.whatsapp')}</span>
          </a>
          {contacts.telLink && (
            <a href={contacts.telLink} className={btnOutlineLight}>
              <Icon name="phone" className={btnIcon} />
              <span>{t('ctaFinal.call')}</span>
            </a>
          )}
        </div>

        <p className="mt-6 text-[clamp(13px,1.4vw,14px)] text-white/60">{t('ctaFinal.avail')}</p>
      </Reveal>
    </section>
  );
}
