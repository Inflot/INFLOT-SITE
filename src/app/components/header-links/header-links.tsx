import './header-links.css';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { InflotLinks } from '../../types/types';

type HeaderLinksProps = {
  links: InflotLinks;
};

export default function HeaderLinks({
  links: { contacts, about, staff, services, surveys },
}: HeaderLinksProps) {
  const locale = useLocale();

  const getLocalePath = () => {
    return locale === 'GB' ? 'en' : locale.toLocaleLowerCase();
  };

  const links = [
    {
      title: about,
      link: `${getLocalePath()}/#about`,
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
