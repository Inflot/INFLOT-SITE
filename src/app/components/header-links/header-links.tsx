import './header-links.css';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HeaderLinks() {
  const t = useTranslations();
  const locale = useLocale();

  const getLocalePath = () => {
    return locale === 'US' ? 'en' : locale.toLocaleLowerCase();
  };

  const links = [
    {
      title: t('about'),
      link: `${getLocalePath()}/#about`,
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
          className="header-link font-['PlayBold'] tracking-widest uppercase text-white mx-3 no-underline lg:mx-6 rounded-md font-semibold"
        >
          {title}
        </Link>
      ))}
    </>
  );
}
