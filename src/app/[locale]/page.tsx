import AboutSection from '../components/about-us-section/about-us.section';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { useTranslations } from 'next-intl';
import InformationSection from '../components/information-section/information-section';

export default function Page() {
  const t = useTranslations();

  return (
    <>
      <Header />
      <main className='main'>
        <InformationSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
