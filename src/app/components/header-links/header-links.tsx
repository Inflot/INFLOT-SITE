import './header-links.css';
import Link from 'next/link';

type HeaderLinksProps = {
  links: Array<{ link: string; title: string }>;
};

export default function HeaderLinks({ links }: HeaderLinksProps) {
  return (
    <>
      {links.map(({ link, title }) => (
        <Link
          key={link}
          href={link}
          className="header-link font-['PlayBold'] text-center tracking-widest cursor-pointer uppercase text-white mx-4 no-underline rounded-md font-semibold"
        >
          {title}
        </Link>
      ))}
    </>
  );
}
