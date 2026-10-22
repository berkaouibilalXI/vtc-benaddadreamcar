import { Head } from 'vite-react-ssg';
import { useLanguage } from '../context/LanguageContext';
import { LANG_PATHS } from '../data/config';

const SERVICE_KEYS = [
  'services.airport.title',
  'services.hotel.title',
  'services.business.title',
  'services.disposal.title',
  'services.outoftown.title',
];

const ALL_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

/**
 * Balises <head> par langue : title, description, canonical, hreflang,
 * Open Graph / Twitter et données structurées JSON-LD.
 * Pré-rendues dans le HTML statique par vite-react-ssg.
 */
export default function Seo() {
  const { t, lang, config } = useLanguage();

  const site = config.SITE_URL;
  const url = `${site}${LANG_PATHS[lang]}`;
  const title = t('seo.title');
  const description = t('seo.description');
  const ogImage = `${site}/og.jpg`;
  const otherLang = lang === 'fr' ? 'en' : 'fr';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${site}/#business`,
        name: config.BUSINESS_NAME,
        alternateName: 'BENADDA DREAMCAR',
        description,
        url: `${site}/`,
        image: ogImage,
        logo: `${site}/logo-512.png`,
        telephone: config.PHONE_NUMBER_TEL,
        email: config.EMAIL,
        sameAs: [config.INSTAGRAM_URL],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bir El Djir',
          addressRegion: 'Oran',
          addressCountry: 'DZ',
        },
        areaServed: [{ '@type': 'City', name: 'Oran' }],
        knowsLanguage: ['fr', 'en'],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ALL_DAYS,
            opens: '00:00',
            closes: '23:59',
          },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: config.PHONE_NUMBER_TEL,
          contactType: 'reservations',
          availableLanguage: ['French', 'English'],
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t('services.title'),
          itemListElement: SERVICE_KEYS.map((key) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: t(key),
              provider: { '@id': `${site}/#business` },
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
        inLanguage: ['fr', 'en'],
        publisher: { '@id': `${site}/#business` },
      },
    ],
  };

  return (
    <Head htmlAttributes={{ lang, dir: 'ltr' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={url} />

      <link rel="alternate" hrefLang="fr" href={`${site}${LANG_PATHS.fr}`} />
      <link rel="alternate" hrefLang="en" href={`${site}${LANG_PATHS.en}`} />
      <link rel="alternate" hrefLang="x-default" href={`${site}${LANG_PATHS.fr}`} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={config.BUSINESS_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={t('seo.ogLocale')} />
      <meta property="og:locale:alternate" content={otherLang === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={t('seo.ogImageAlt')} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={t('seo.ogImageAlt')} />

      {/* LCP : image principale */}
      <link rel="preload" as="image" href="/assets/hero.webp" type="image/webp" />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Head>
  );
}
