import { ReactNode } from 'react';

interface ContactItemProps {
  href?: string;
  icon: ReactNode;
  text: string;
  title: string;
  target: string;
}

const ContactItem = ({
  details: { title, href, icon, text, target },
  index,
}: {
  details: ContactItemProps;
  index: number;
}) => (
  <a
    className='w-full h-full p-4 group p-1 text-white no-underline group-hover:text-white text-gray-300'
    data-aos='flip-left'
    data-aos-delay={100 * index}
    data-aos-duration='1000'
    href={href}
    target={target}
  >
    <div className='flex flex-col items-center justify-start text-center w-full h-full m-2 group-hover:text-white'>
      <div className='footer-icon'>{icon}</div>
      <div className='flex flex-col items-center justify-center text-center no-underline flex items-center text-gray-300'>
        <p className='text-base md:text-lg lg:text-xl font-semibold uppercase mt-4 mb-2 group-hover:text-white'>
          {title}
        </p>
        <p className='text-lg md:text-md m-1 group-hover:text-white'>{text}</p>
      </div>
    </div>
  </a>
);

export default ContactItem;
