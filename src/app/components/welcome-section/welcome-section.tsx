import './welcome-section.css';

import { useTranslations } from 'next-intl';

export default function WelcomeSection() {
  const t = useTranslations();

  return (
    <div
      data-aos='fade-right'
      data-aos-duration='500'
      className='z-50 absolute bg-cover bg-center sm:w-5/12 m-10 top-40 left-10'
    >
      <div className='text-white text-center'>
        <h1 className='font-["PlayBold"] tracking-wider text-2xl uppercase sm:text-4xl'>{t('title')}</h1>
        <p className='mt-2 text-base sm:text-2xl'>{t('subtitle')}</p>
      </div>
    </div>
  );
}
