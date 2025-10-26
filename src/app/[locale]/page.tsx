import AboutSection from '../components/about-us-section/about-us.section';
import DesktopAutoplayAudio from '../components/audio/audio';
import GoBack from '../components/go-back-btn/go-back-btn';
import MissionSection from '../components/mission/mission.section';
import ServicesSection from '../components/services/services.section';
import StaffSection from '../components/staff/staff.section';
import SurveysSection from '../components/surveys/surveys.section';
import WelcomeSection from '../components/welcome-section/welcome-section';

export default function Page() {
  return (
    <main className='main select-none'>
      <WelcomeSection />
      <AboutSection />
      <MissionSection />
      <StaffSection />
      <ServicesSection />
      <SurveysSection />
      <GoBack />
      <DesktopAutoplayAudio src="/audio/welcome.mp3" loop volume={0.5} />
    </main>
  );
}
