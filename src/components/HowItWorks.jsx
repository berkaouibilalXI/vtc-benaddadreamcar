import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';
import { container, section, sectionHead, eyebrowRule, sectionTitle } from '../styles/ui';

const STEPS = [
  { num: '01', titleKey: 'how.s1.title', descKey: 'how.s1.desc' },
  { num: '02', titleKey: 'how.s2.title', descKey: 'how.s2.desc' },
  { num: '03', titleKey: 'how.s3.title', descKey: 'how.s3.desc' },
];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className={section} id="how">
      <div className={container}>
        <Reveal className={sectionHead}>
          <div className={eyebrowRule} />
          <h2 className={sectionTitle}>{t('how.title')}</h2>
        </Reveal>

        <Reveal className="flex flex-col" delay={0.05}>
          {STEPS.map((step, i) => (
            <div className="relative flex gap-6 pb-8 last:pb-0" key={step.num}>
              <div className="relative z-[2] flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red font-display text-[0.85rem] font-extrabold text-white">
                {step.num}
              </div>
              {i < STEPS.length - 1 && (
                <div className="step-connector absolute bottom-0 left-[19px] top-10 w-px" />
              )}
              <div>
                <h3 className="text-[clamp(18px,3vw,20px)] font-display font-bold">{t(step.titleKey)}</h3>
                <p className="mt-1 text-[clamp(13px,1.4vw,14px)]">{t(step.descKey)}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
