import { Icon } from './IconSprite';
import MediaSlot from './MediaSlot';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

const FEATURES = ['fleet.f1', 'fleet.f2', 'fleet.f3', 'fleet.f4'];

export default function Fleet() {
  const { t, contacts } = useLanguage();

  return (
    <section className="section" id="fleet">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow-rule" />
          <h2 className="section-title">{t('fleet.title')}</h2>
          <p className="section-sub">{t('fleet.sub')}</p>
        </Reveal>

        <Reveal className="fleet-grid" delay={0.05}>
          <div className="fleet-card">
            <MediaSlot className="fleet-media" src="/assets/pass-at-pro.webp" alt={t('fleet.imgAlt')} />
          </div>
          <div className="fleet-body">
            <h3>PASSAT PRO</h3>
            <p className="fleet-tag">{t('fleet.tagline')}</p>
            <ul className="fleet-features">
              {FEATURES.map((key) => (
                <li key={key}>
                  <Icon name="check" />
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
            <a href={contacts.waLink} target="_blank" rel="noopener" className="btn btn-dark">
              {t('fleet.cta')}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
