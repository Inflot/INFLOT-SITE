'use client';

import Image from 'next/image';
import Link from 'next/link';

import './header.css';

import HeaderLinks from '../header-links/header-links';
import LangSwitcher from '../lang-switcher/lang-switcher';
import { useScrollDirection } from '../../hooks/use-scroll-direction';
import { InflotLinks } from '../../types/types';
import { useLocale } from 'next-intl';
import { useEffect, useRef } from 'react';

type HeaderProps = {
  langs: Record<string, string>;
  links: InflotLinks;
};

export default function Header({
  langs,
  links: { about, staff, services, surveys, contacts, mission },
}: HeaderProps) {
  const { scrollDirection, isPageOnTop } = useScrollDirection();

  const locale = useLocale();
  const burgerRef = useRef<HTMLInputElement>(null);

  const check = () => burgerRef.current?.click();

  const getLocalePath = () =>
    locale === 'GB' ? 'en' : locale.toLocaleLowerCase();

  const handleBurgerMenu = () => {
    const button = burgerRef.current;

    if (button && button.checked) {
      button.click();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleBurgerMenu);

    return () => {
      window.removeEventListener('scroll', handleBurgerMenu);
    };
  }, []);

  const headerLinks = [
    {
      title: about,
      link: `${getLocalePath()}/#about`,
    },
    {
      title: mission,
      link: `${getLocalePath()}/#mission`,
    },
    {
      title: staff,
      link: `${getLocalePath()}/#staff`,
    },
    {
      title: services,
      link: `${getLocalePath()}/#services`,
    },
    {
      title: surveys,
      link: `${getLocalePath()}/#surveys`,
    },
    {
      title: contacts,
      link: `${getLocalePath()}/#contacts`,
    },
  ];

  return (
    <header
      className={`
      fixed 
      ${scrollDirection && scrollDirection === 'down' ? '-top-60' : 'top-0'}
      ${isPageOnTop ? 'header-gradient' : 'header-gradient header-gradient--small'}
      ${isPageOnTop ? 'md:h-[150px]' : 'md:h-[60px]'}
      transition-all duration-500
      z-50 w-full flex justify-center md:justify-between h-[60px] md:h-[150px]
      content-center items-center`}
    >
      <Link
        href='/'
        className='absolute lg:relative flex items-center justify-center w-full lg:w-auto'
      >
        <Image
          width='220'
          height='100'
          className={`
            ${isPageOnTop ? 'spin h-20 sm:h-24 md:h-28 lg:h-32' : 'h-10 hidden'}
            mx-0 lg:ml-20 lg:mr-5 z-50 mb-4 md:mb-0 logo--shadow pointer-events-none select-none block w-auto
            transition-all duration-500
          `}
          src='/logo.webp'
          alt='Logo'
        />
      </Link>

      <nav className='burger-content lg:hidden'>
        <div className='burger-lang-switcher'>
          <LangSwitcher
            langs={langs}
            id='burger-flags-select'
            rfsKey='burger-flags-select'
          />
        </div>
        <input
          type='checkbox'
          id='burger'
          className='burger-input'
          ref={burgerRef}
        />
        <label htmlFor='burger' className='burger-label'></label>
        <ul className='burger-content-links'>
          {headerLinks.map(({ link, title }) => (
            <li key={link} className='burger-content-link text-xl lg:text-2xl'>
              <Link href={link} onClick={check} className='burger-content-ref'>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className='hidden lg:flex z-50 justify-between items-center h-24 mx-5'>
        <LangSwitcher langs={langs} id='flags-select' rfsKey='flags-select' />
        <HeaderLinks links={headerLinks} />
      </nav>
    </header>
  );
}
