import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, Phone, Send } from 'lucide-react';
import SiteLayout from '../components/SiteLayout';
import HowItWorks from '../components/HowItWorks';
import CtaFinal from '../components/CtaFinal';
import { Icon } from '../components/Icon';
import { useLanguage } from '../context/LanguageContext';
import { getServicePage } from '../data/servicePages';
import { SERVICE_IDS, SERVICE_PATHS } from '../data/pages';
import {
  container,
  section,
  sectionHead,
  eyebrowRule,
  sectionTitle,
  btnPrimary,
  btnOutline,
  btnIcon,
  card,
  linkCta,
  linkCtaIcon,
} from '../styles/ui';

function ServiceContent({ id }) {
  const { t, lang, homeHref, contacts } = useLanguage();
  const page = getServicePage(id, lang);
  const others = SERVICE_IDS.filter((s) => s !== id);

  return (
    <>
      {/* En-tête : fil d'Ariane, H1, accroche, CTA */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className={container}>
          <nav aria-label={t('svc.breadcrumb')} className="mb-6 text-[0.85rem] text-grey-text">
            <ol className="m-0 flex list-none flex-wrap items-center gap-1.5 p-0">
              <li>
                <a href={homeHref()} className="hover:text-red">
                  {t('svc.home')}
                </a>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </li>
              <li aria-current="page" className="font-semibold text-ink">
                {t(`services.${id}.title`)}
              </li>
            </ol>
          </nav>

          <div className="tablet:grid tablet:grid-cols-[1.2fr_0.8fr] tablet:items-start tablet:gap-12">
            <div>
              <h1 className="text-[clamp(30px,6vw,44px)] font-display font-extrabold leading-[1.15] tracking-[-0.01em]">
                {page.h1}
              </h1>
              <p className="mt-4 max-w-[52ch] text-[clamp(15px,1.8vw,17px)] text-grey-text">{page.lead}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={contacts.waLink} target="_blank" rel="noopener" className={btnPrimary}>
                  <Send size={18} className={`${btnIcon} rtl:-scale-x-100`} />
                  <span>{t('cta.whatsapp')}</span>
                </a>
                {contacts.telLink && (
                  <a href={contacts.telLink} className={btnOutline}>
                    <Phone size={18} className={btnIcon} />
                    <span>{t('cta.call')}</span>
                  </a>
                )}
              </div>
            </div>

            <aside className={`${card} mt-8 p-6 tablet:mt-0`}>
              <h2 className="text-[clamp(18px,3vw,20px)] font-display font-bold text-red">{t('svc.included')}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {page.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[clamp(14px,1.5vw,15px)] text-ink">
                    <Icon name="check" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Texte de fond : 2 blocs avec H2 */}
      <section className={`${section} bg-grey-light`}>
        <div className={`${container} grid gap-6 tablet:grid-cols-2 tablet:gap-8`}>
          {page.sections.map((s) => (
            <article key={s.h2} className="rounded-card bg-white p-6">
              <div className={eyebrowRule} />
              <h2 className="text-[clamp(20px,3.5vw,26px)] font-display font-extrabold">{s.h2}</h2>
              <p className="mt-3 text-[clamp(14px,1.5vw,15px)]">{s.p}</p>
            </article>
          ))}
        </div>
      </section>

      <HowItWorks />

      {/* FAQ : <details> natifs — le texte des réponses est bien présent dans le HTML */}
      <section className={`${section} bg-grey-light`} id="faq">
        <div className={container}>
          <div className={sectionHead}>
            <div className={eyebrowRule} />
            <h2 className={sectionTitle}>{t('svc.faq')}</h2>
          </div>
          <div className="flex max-w-[820px] flex-col gap-3">
            {page.faq.map((item) => (
              <details key={item.q} className="group rounded-smcard border border-line bg-white p-4 open:shadow-card">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[clamp(15px,2vw,17px)] font-display font-bold">{item.q}</h3>
                  <ChevronDown className="h-5 w-5 shrink-0 text-red transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-[clamp(14px,1.5vw,15px)]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Maillage interne : liens vers les autres services */}
      <section className={section}>
        <div className={container}>
          <div className={sectionHead}>
            <div className={eyebrowRule} />
            <h2 className={sectionTitle}>{t('svc.related')}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 desktop:grid-cols-4">
            {others.map((other) => (
              <Link
                key={other}
                to={SERVICE_PATHS[other][lang]}
                hrefLang={lang}
                className={`${card} group block p-5 transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-card-hover`}
              >
                <h3 className="text-[clamp(16px,2vw,18px)] font-display font-bold">{t(`services.${other}.title`)}</h3>
                <p className="mt-1 text-[0.85rem]">{t(`services.${other}.desc${other === 'outoftown' ? '2' : ''}`)}</p>
                <span className={`mt-3 ${linkCta}`}>
                  <span>{t('svc.more')}</span>
                  <Icon name="chevron" className={linkCtaIcon} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}

export default function ServicePage({ lang, id }) {
  const page = getServicePage(id, lang);
  return (
    <SiteLayout lang={lang} pageId={id} waMessage={page.wa}>
      <ServiceContent id={id} />
    </SiteLayout>
  );
}
