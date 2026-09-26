import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

const STEPS = [
  { num: '01', titleKey: 'how.s1.title', descKey: 'how.s1.desc' },
  { num: '02', titleKey: 'how.s2.title', descKey: 'how.s2.desc' },
  { num: '03', titleKey: 'how.s3.title', descKey: 'how.s3.desc' },
];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="section" id="how">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow-rule" />
          <h2 className="section-title">{t('how.title')}</h2>
        </Reveal>

        <Reveal className="steps" delay={0.05}>
          {STEPS.map((step) => (
            <div className="step" key={step.num}>
              <div className="step-num">{step.num}</div>
              <div className="step-body">
                <h3>{t(step.titleKey)}</h3>
                <p>{t(step.descKey)}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
