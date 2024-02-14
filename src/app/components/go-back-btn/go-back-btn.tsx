'use client';

import Link from 'next/link';
import './go-back-btn.css';
import { FaCaretUp } from 'react-icons/fa6';
import { useLocale } from 'next-intl';
import { useScrollDirection } from '../../hooks/use-scroll-direction';

export default function GoBack() {
  const { scrollDirection, isPageOnTop } = useScrollDirection();
  const locale = useLocale();

  const getLocalePath = () =>
    locale === 'GB' ? 'en' : locale.toLocaleLowerCase();

  return (
    <Link
      href={`${getLocalePath()}/`}
      className={`
        z-50
        go-back-btn
        fixed bottom-10 right-10 
        bg-cyan-800 hover:bg-cyan-950 text-white font-bold 
        py-2 px-2 rounded-full opacity-75 hover:opacity-100 transition-opacity
      `}
    >
      <FaCaretUp size='40px' />
    </Link>
  );
}

// ${
//   isPageOnTop || !(scrollDirection && scrollDirection === 'up')
//     ? 'hidden'
//     : ''
// }
