import './header-links.css';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HeaderLinks() {
  const t = useTranslations('header');
  const locale = useLocale();

  const getLocalePath = () => {
    return locale === 'US' ? 'en' : locale.toLocaleLowerCase();
  };

  const links = [
    {
      title: t('mission'),
      link: `${getLocalePath()}/#mission`,
    },
    {
      title: t('contacts'),
      link: `${getLocalePath()}/#contacts`,
    },
  ];

  return (
    <>
      {links.map(({ link, title }) => (
        <Link
          key={link}
          href={link}
          className="header-link font-['PlayBold'] text-center tracking-widest cursor-pointer uppercase text-white mx-3 no-underline lg:mx-6 rounded-md font-semibold"
        >
          {title}
        </Link>
      ))}
    </>
  );
}
