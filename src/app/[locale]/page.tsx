import AboutSection from '../components/about-us-section/about-us.section';
import Footer from '../components/footer/footer';
import GoBack from '../components/go-back-btn/go-back-btn';
import HeaderSection from '../components/header-section/header-section';
// import InformationSection from '../components/information-section/information-section';
import LibsLoader from '../components/libs-loader/libs-loader';
import MainInformationSection from '../components/main-info/main-info.section';
import WelcomeSection from '../components/welcome-section/welcome-section';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <LibsLoader />
      <HeaderSection />
      <div className='image-wrapper h-[700px] md:h-[100vh]'>
        <Image
          className='image__main background-filter'
          src='/images/header/background.png'
          fill
          quality={100}
          alt='Maritime Scene'
        />
        <WelcomeSection />
      </div>
      <main className='main'>
        {/* <InformationSection /> */}
        <AboutSection />
        <MainInformationSection />
        <GoBack/>
      </main>
      <Footer />
    </>
  );
}
