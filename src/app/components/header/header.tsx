'use client';

import Image from 'next/image';
import Link from 'next/link';

import './header.css';

import HeaderLinks from '../header-links/header-links';
import LangSwitcher from '../lang-switcher/lang-switcher';
import { useScrollDirection } from '../../hooks/use-scroll-direction';
import { InflotLinks } from '../../types/types';

type HeaderProps = {
  langs: Record<string, string>;
  links: InflotLinks;
};

export default function Header({ langs, links }: HeaderProps) {
  const { scrollDirection, isPageOnTop } = useScrollDirection();

  return (
    <header
      className={`
      fixed 
      ${scrollDirection && scrollDirection === 'down' ? '-top-60' : 'top-0'}
      ${isPageOnTop ? 'header-gradient' : 'header-background'}
      ${isPageOnTop ? 'md:h-[150px]' : 'md:h-[60px]'}
      transition-all duration-500
      z-50 w-full flex justify-center md:justify-between h-[60px] md:h-[150px]
      content-center items-center`}
    >
      <Link
        href='/'
        className='hidden md:flex flex items-center justify-center w-full md:w-auto'
      >
        <Image
          width='80'
          height='80'
          className={`
            ${isPageOnTop ? 'spin h-24' : 'h-10 hidden'}
            ml-20 z-50 logo--shadow pointer-events-none select-none block w-auto mx-5
            transition-all duration-500
          `}
          src='/logo.png'
          alt='Logo'
        />
      </Link>

      <nav className='z-50 flex justify-between items-center h-24 mx-5'>
        <LangSwitcher langs={langs} />
        <HeaderLinks links={links} />
      </nav>
    </header>
  );
}
