
import './welcome-section.css';

import { useTranslations } from 'next-intl';

export default function WelcomeSection() {
  const t = useTranslations();

  return (
    <div className='z-50 absolute bg-cover bg-center sm:w-5/12 m-10 top-40 left-10'>
      <div className='text-white text-center'>
        <h1 className='text-2xl uppercase sm:text-4xl animate__animated animate__fadeInLeft'>{t('title')}</h1>
        <p className='mt-2 text-base sm:text-lg animate__animated animate__fadeInLeft'>{t('subtitle')}</p>
      </div>
    </div>
  );
}
