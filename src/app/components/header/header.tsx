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
    NO: t('norwegian'),
  };

  return (
    <>
      <div className='image-wrapper z-0'>
        <Image
          className='image__main z-0 stormy-ocean-effect'
          src='/images/header/background.png'
          fill
          objectFit='cover'
          quality={100}
          alt='Maritime Scene'
        />
        <WelcomeSection />
      </div>
      <header className='absolute w-full top-5 header flex justify-around'>
        <Link
          href='/'
          className='z-50 hidden md:flex flex items-center justify-center w-full md:w-auto'
        >
          <Image
            width='80'
            height='80'
            className='spin logo--shadow pointer-events-none select-none block h-24 w-auto'
            src='/logo.png'
            alt='Logo'
          />
        </Link>

        <nav className='z-50 flex justify-between items-center h-24'>
          <LangSwitcher langs={langs} />
          <HeaderLinks />
        </nav>
      </header>
    </>
  );
}
