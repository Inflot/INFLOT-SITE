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
  const hamburgerRef = useRef<HTMLInputElement>(null);

  const check = () => hamburgerRef.current?.click();

  const getLocalePath = () =>
    locale === 'GB' ? 'en' : locale.toLocaleLowerCase();

  const handleBurgerMenu = () => {
    const button = hamburgerRef.current;

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
      ${isPageOnTop ? 'header-gradient' : 'header-background'}
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
          width='80'
          height='80'
          className={`
            ${isPageOnTop ? 'spin h-24' : 'h-10 hidden'}
            mx-0 lg:ml-20 lg:mr-5 z-50 logo--shadow pointer-events-none select-none block w-auto
            transition-all duration-500
          `}
          src='/logo.png'
          alt='Logo'
        />
      </Link>

      <nav className='hamburger-content lg:hidden'>
        <span className='hamburger-lang-switcher'>
          <LangSwitcher langs={langs} />
        </span>
        <input type='checkbox' id='hamburger' className='hamburger-input' ref={hamburgerRef}/>
        <label
          htmlFor='hamburger'
          className='hamburger-label'
        ></label>
        <ul className='hamburger-content-links'>
          {headerLinks.map(({ link, title }) => (
            <li
              key={link}
              className='hamburger-content-link text-xl lg:text-2xl'
            >
              <Link
                href={link}
                onClick={check}
                className='hamburger-content-ref'
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className='hidden lg:flex z-50 justify-between items-center h-24 mx-5'>
        <LangSwitcher langs={langs} />
        <HeaderLinks links={headerLinks} />
      </nav>
    </header>
  );
}
