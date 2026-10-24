import { Head } from 'vite-react-ssg';
import { useLanguage } from '../context/LanguageContext';
import { getServicePage } from '../data/servicePages';
import { LANGS, OG_LOCALES, HOME_PATHS, PAGE_PATHS } from '../data/pages';

const ALL_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const LANG_NAMES_EN = { fr: 'French', en: 'English', ar: 'Arabic' };

/**
 * Balises <head> par page ET par langue : title, description, canonical, hreflang,
 * Open Graph / Twitter et données structurées JSON-LD.
 * Pré-rendues dans le HTML statique par vite-react-ssg.
 */
export default function Seo() {
  const { t, lang, dir, pageId, paths, config } = useLanguage();

  const site = config.SITE_URL;
  const isHome = pageId === 'home';
  const service = isHome ? null : getServicePage(pageId, lang);

  const url = `${site}${paths[lang]}`;
  const title = isHome ? t('seo.title') : service.seoTitle;
  const description = isHome ? t('seo.description') : service.seoDesc;
  const ogImage = `${site}/og.jpg`;
  const businessId = `${site}/#business`;

  const business = {
    '@type': 'LocalBusiness',
    '@id': businessId,
    name: config.BUSINESS_NAME,
    alternateName: 'BENADDA DREAMCAR',
    description: t('seo.description'),
    url: `${site}/`,
    image: ogImage,
    logo: `${site}/logo-512.png`,
    telephone: config.PHONE_NUMBER_TEL,
    email: config.EMAIL,
    sameAs: [config.INSTAGRAM_URL, config.RENTAL_URL],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bir El Djir',
      addressRegion: 'Oran',
      addressCountry: 'DZ',
    },
    areaServed: [{ '@type': 'City', name: 'Oran' }],
    knowsLanguage: LANGS,
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ALL_DAYS, opens: '00:00', closes: '23:59' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: config.PHONE_NUMBER_TEL,
      contactType: 'reservations',
      availableLanguage: LANGS.map((l) => LANG_NAMES_EN[l]),
    },
  };

  const graph = [];

  if (isHome) {
    graph.push(
      {
        ...business,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t('services.title'),
          itemListElement: ['airport', 'hotel', 'business', 'disposal', 'outoftown'].map((id) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: t(`services.${id}.title`),
              url: `${site}${PAGE_PATHS[id][lang]}`,
              provider: { '@id': businessId },
              areaServed: { '@type': 'City', name: 'Oran' },
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${site}/#website`,
        url: `${site}/`,
        name: config.BUSINESS_NAME,
        inLanguage: LANGS,
        publisher: { '@id': businessId },
      },
    );
  } else {
    graph.push(
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: lang,
        isPartOf: { '@id': `${site}/#website` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('svc.home'), item: `${site}${HOME_PATHS[lang]}` },
          { '@type': 'ListItem', position: 2, name: t(`services.${pageId}.title`), item: url },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.h1,
        serviceType: t(`services.${pageId}.title`),
        description,
        url,
        inLanguage: lang,
        areaServed: { '@type': 'City', name: 'Oran' },
        availableChannel: { '@type': 'ServiceChannel', serviceUrl: url },
        provider: {
          '@type': 'LocalBusiness',
          '@id': businessId,
          name: config.BUSINESS_NAME,
          url: `${site}/`,
          telephone: config.PHONE_NUMBER_TEL,
        },
      },
    );
  }

  const jsonLd = { '@context': 'https://schema.org', '@graph': graph };

  return (
    <Head htmlAttributes={{ lang, dir }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={url} />

      {LANGS.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={`${site}${paths[l]}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${site}${paths.fr}`} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={config.BUSINESS_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={OG_LOCALES[lang]} />
      {LANGS.filter((l) => l !== lang).map((l) => (
        <meta key={l} property="og:locale:alternate" content={OG_LOCALES[l]} />
      ))}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={t('seo.ogImageAlt')} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={t('seo.ogImageAlt')} />

      {/* LCP : image principale (page d'accueil uniquement) */}
      {isHome && <link rel="preload" as="image" href="/assets/hero.webp" type="image/webp" />}

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Head>
  );
}
