import AboutSection from '../components/about-us-section/about-us.section';
import Footer from '../components/footer/footer';
import GoBack from '../components/go-back-btn/go-back-btn';
import HeaderSection from '../components/header-section/header-section';
import LibsLoader from '../components/libs-loader/libs-loader';
import MissionSection from '../components/mission/mission.section';
import ServicesSection from '../components/services/services.section';
import StaffSection from '../components/staff/staff.section';
import SurveysSection from '../components/surveys/surveys.section';
import WelcomeSection from '../components/welcome-section/welcome-section';

export default function Page() {
  return (
    <>
      <LibsLoader />
      <HeaderSection />
      <main className='main select-none'>
        <WelcomeSection />
        <AboutSection />
        <MissionSection />
        <StaffSection />
        <ServicesSection />
        <SurveysSection />
        <GoBack />
      </main>
      <Footer />
    </>
  );
}
