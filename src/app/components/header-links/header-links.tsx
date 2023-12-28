import './header-links.css';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HeaderLinks() {
  const t = useTranslations();

  const links = [
    {
      title: t('about'),
      link: '/#about',
    },
    {
      title: t('contacts'),
      link: '/#contacts',
    },
  ];

  return (
    <>
      {links.map(({ link, title }) => (
        <Link
          key={link}
          href={link}
          className="header-link font-['PlayBold'] tracking-widest uppercase text-white mx-3 no-underline lg:mx-6 rounded-md font-semibold"
        >
          {title}
        </Link>
      ))}
    </>
  );
}
