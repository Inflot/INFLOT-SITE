import { ReactNode } from 'react';

interface ContactItemProps {
  href: string;
  icon: ReactNode;
  text: string;
}

const ContactItem = ({ href, icon, text }: ContactItemProps) => (
  <a
    href={href}
    className='no-underline text-xl py-2 flex items-center text-white hover:text-gray-300'
  >
    {icon} {text}
  </a>
);

export default ContactItem;
