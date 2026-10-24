import SiteLayout from '../components/SiteLayout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import CityOran from '../components/CityOran';
import Fleet from '../components/Fleet';
import Partners from '../components/Partners';
import HowItWorks from '../components/HowItWorks';
import CtaFinal from '../components/CtaFinal';

export default function HomePage({ lang }) {
  return (
    <SiteLayout lang={lang} pageId="home">
      <Hero />
      <Services />
      <WhyChooseUs />
      <CityOran />
      <Fleet />
      <Partners />
      <HowItWorks />
      <CtaFinal />
    </SiteLayout>
  );
}
