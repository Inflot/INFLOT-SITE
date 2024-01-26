import Image from 'next/image';
import Link from 'next/link';

import './header.css';

import HeaderLinks from '../header-links/header-links';
import WelcomeSection from '../welcome-section/welcome-section';
import { useTranslations } from 'next-intl';
import LangSwitcher from '../lang-switcher/lang-switcher';

export default function Header() {
  const t = useTranslations('lang');

  const langs = {
    RU: t('russian'),
    US: t('english'),
    DE: t('german'),
    FR: t('french'),
    NO: t('norwegian'),
  };

  return (
    <>
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
      <header className='absolute w-full top-0 flex justify-center md:justify-between h-[60px] md:h-[150px] content-center items-center'>
        <div className='absolute header-gradient'></div>
        <Link
          href='/'
          className='hidden md:flex flex items-center justify-center w-full md:w-auto'
        >
          <Image
            width='80'
            height='80'
            className='ml-20 z-50 spin logo--shadow pointer-events-none select-none block h-24 w-auto mx-5'
            src='/logo.png'
            alt='Logo'
          />
        </Link>

        <nav className='z-50 flex justify-between items-center h-24 mx-5'>
          <LangSwitcher langs={langs} />
          <HeaderLinks />
        </nav>
      </header>
    </>
  );
}
