import './welcome-section.css';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function WelcomeSection() {
  const t = useTranslations();
  const ts = useTranslations('services');

  return (
    <div className='w-full z-40 absolute bg-cover bg-center mt-16 md:mt-24 lg:mt-[20vh] top-3 welcome-section'>
      <Image
        width='80'
        height='80'
        className='z-50 spin logo--shadow pointer-events-none select-none block h-24 w-auto m-auto sm:hidden'
        src='/logo.png'
        alt='Logo'
      />
      <p
        data-aos='fade-down'
        data-aos-duration='700'
        className='text-white text-center uppercase pointer-events-none select-none text-sm md:text-base'
      >
        {t('title')}
      </p>
      <div className='text-white flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row items-center'>
          <ul
            data-aos='fade-right'
            data-aos-duration='700'
            className='list-none text-center md:text-right lg:text-right pl-0 pr-0 md:pr-2 md:w-[400px] w-full leading-5 md:leading-6 pointer-events-none select-none text-sm md:text-base'
          >
            <li className='pr-0'>{ts('1_l')}</li>
            <li className='md:pr-2 pr-0'>{ts('2_l')}</li>
            <li className='md:pr-4 pr-0'>{ts('3_l')}</li>
            <li className='md:pr-2 pr-0'>{ts('4_l')}</li>
            <li className='pr-0'>{ts('5_l')}</li>
          </ul>
          <Image
            data-aos='flip-left'
            data-aos-duration='700'
            src='/images/header/compass.svg'
            alt='Compass'
            className='m-auto pointer-events-none select-none w-32 h-32 md:w-64 md:h-64'
            width={250}
            height={250}
          ></Image>
          <ul
            data-aos='fade-left'
            data-aos-duration='700'
            className='list-none text-center md:text-left lg:text-left pl-0 md:pl-2 md:w-[400px] w-full leading-5 md:leading-6 pointer-events-none select-none text-sm md:text-base'
          >
            <li className='pl-0'>{ts('1_r')}</li>
            <li className='pr-0 md:pl-2'>{ts('2_r')}</li>
            <li className='pr-0 md:pl-4'>{ts('3_r')}</li>
            <li className='pr-0 md:pl-2'>{ts('4_r')}</li>
            <li className='pl-0'>{ts('5_r')}</li>
          </ul>
        </div>

        <h1
          data-aos='zoom-in'
          data-aos-duration='700'
          className='font-["PlayBold"] tracking-wider uppercase text-2xl md:text-4xl lg:text-6xl select-none pointer-events-none my-1 md:my-8'
        >
          {t('name')}
        </h1>
        <p
          data-aos='zoom-in'
          data-aos-duration='700'
          className='uppercase text-sm md:text-base lg:text-2xl w-3/4 md:w-1/2 text-center m-auto select-none pointer-events-none'
        >
          {t('subtitle')}
        </p>
        <a
          data-aos='zoom-in'
          data-aos-duration='700'
          href='#about'
          className='mt-8 md:mt-12 no-underline text-white ring-2 ring-white focus:bg-[#ffffff70] hover:bg-[#ffffff30] rounded-lg px-5 py-2.5 select-none focus:outline-none text-lg md:text-2xl lg:text-3xl'
        >
          {t('about')}
        </a>
      </div>
    </div>
  );
}
