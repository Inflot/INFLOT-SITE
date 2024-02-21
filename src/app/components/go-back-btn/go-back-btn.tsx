'use client';

import Link from 'next/link';
import './go-back-btn.css';
import { FaCaretUp } from 'react-icons/fa6';
import { useLocale } from 'next-intl';
import { useScrollDirection } from '../../hooks/use-scroll-direction';
import useWindowDimensions from '../../hooks/use-window-dimensions';
import { usePathname } from 'next/navigation';

export default function GoBack() {
  const { scrollDirection, isPageOnTop } = useScrollDirection();
  const { width } = useWindowDimensions();
  const pathname = usePathname();

  const locale = useLocale();

  const getLocalePath = () =>
    locale === 'GB' ? 'en' : locale.toLocaleLowerCase();

  return (
    <Link
      href={pathname}
      className={`
        z-50
        go-back-btn
        fixed bottom-8 right-8 md:bottom-12 md:right-12
        bg-cyan-800 hover:bg-cyan-950 text-white font-bold 
        py-2 px-2 rounded-full opacity-75 hover:opacity-100 transition-opacity
      `}
    >
      <FaCaretUp size={width > 768 ? '40px' : '25px'} />
    </Link>
  );
}

// ${
//   isPageOnTop || !(scrollDirection && scrollDirection === 'up')
//     ? 'hidden'
//     : ''
// }
