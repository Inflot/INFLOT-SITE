import './welcome-section.css';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WelcomeSection() {
  const t = useTranslations('welcome');
  const locale = useLocale();

  const getLocalePath = () =>
    locale === 'GB' ? 'en' : locale.toLocaleLowerCase();

  const leftLinks = [
    {
      link: `${getLocalePath()}/#mission`,
      title: t('1_l'),
      classes: 'pr-0',
    },
    {
      link: `${getLocalePath()}/#services`,
      title: t('2_l'),
      classes: 'lg:pr-2 pr-0',
    },
    {
      link: `${getLocalePath()}/#services`,
      title: t('3_l'),
      classes: 'lg:pr-4 pr-0',
    },
    {
      link: `${getLocalePath()}/#surveys`,
      title: t('4_l'),
      classes: 'lg:pr-2 pr-0',
    },
  ];

  const rightLinks = [
    {
      link: `${getLocalePath()}/#services`,
      title: t('1_r'),
      classes: 'pl-0',
    },
    {
      link: `${getLocalePath()}/#services`,
      title: t('2_r'),
      classes: 'pr-0 lg:pl-2',
    },
    {
      link: `${getLocalePath()}/#contacts`,
      title: t('3_r'),
      classes: 'pr-0 lg:pl-4',
    },
    {
      link: `${getLocalePath()}/#contacts`,
      title: t('4_r'),
      classes: 'pr-0 lg:pl-2',
    },
  ];

  return (
    <div className='image-wrapper h-[700px] md:h-[100vh]'>
      <Image
        className='image__main background-filter'
        src='/images/header/background.webp'
        alt='Maritime Scene'
        fill
        priority={true}
        quality={100}
        loading={'eager'}
      />
      <div className='w-screen z-40 absolute bg-cover bg-center mt-32 lg:mt-[20vh] top-3 welcome-section'>
        <h2
          id="vibratingTextDamped"
          data-aos="fade-left" 
          data-aos-delay="3000"
          data-aos-duration='1000'
          className='font-normal tracking-wider my-0 lg:my-2 text-white text-center uppercase pointer-events-none select-none text-xl md:text-2xl'
        >
          {t('title')}
        </h2>
        <div className='text-white flex flex-col justify-center items-center'>
          <div className='overflow-hidden w-full flex flex-col lg:flex-row items-center justify-center'>
            <ul
              data-aos='fade-right'
              data-aos-duration='700'
              className='w-auto list-none text-center lg:text-right lg:text-right 
              pl-0 pr-0 md:pr-2 md:w-[500px] w-full leading-6 md:leading-7 select-none text-sm md:text-base lg:text-lg'
            >
              {leftLinks.map(({ link, title, classes }) => (
                <li key={link} className={classes}>
                  <Link href={link} className='no-underline hover:underline text-white'>{title}</Link>
                </li>
              ))}
            </ul>
            <Image
              data-aos='flip-left'
              data-aos-duration='700'
              className='m-0 pointer-events-none select-none w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64'
              src='/images/header/compass.svg'
              alt='Compass'
              priority={true}
              loading={'eager'}
              width={250}
              height={250}
            ></Image>
            <ul
              data-aos='fade-left'
              data-aos-duration='700'
              className='w-auto list-none text-center lg:text-left lg:text-left pl-0 md:pl-2 lg:w-[500px] w-full leading-6 md:leading-7 select-none text-sm md:text-base lg:text-lg mb-2'
            >
              {rightLinks.map(({ link, title, classes }) => (
                <li key={link} className={classes}>
                  <Link href={link} className='no-underline hover:underline text-white'>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <h1
            data-aos='zoom-in'
            data-aos-duration='700'
            className='font-["PlayBold"] tracking-wider uppercase text-4xl md:text-4xl lg:text-6xl 
            select-none pointer-events-none my-4 lg:my-8 pb-2
            drop-shadow-[0_0_1rem_#A8C8EA]'
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
            className='mt-8 md:mt-6 lg:mt-12 no-underline text-white
            focus:bg-[#ffffff70] hover:bg-[#ffffff30] rounded-lg px-5 py-1 lg:py-2.5 select-none 
            focus:outline-none text-lg md:text-2xl lg:text-3xl'
          >
            {t('about')}
          </a>
        </div>
      </div>
    </div>
  );
}
