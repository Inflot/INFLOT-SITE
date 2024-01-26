import AboutSection from '../components/about-us-section/about-us.section';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
// import InformationSection from '../components/information-section/information-section';
import LibsLoader from '../components/libs-loader/libs-loader';
import MainInformationSection from '../components/main-info/main-info.section';

export default function Page() {
  return (
    <>
      <LibsLoader />
      <Header />
      <main className='main'>
        {/* <InformationSection /> */}
        <AboutSection />
        <MainInformationSection/>
      </main>
      <Footer />
    </>
  );
}
