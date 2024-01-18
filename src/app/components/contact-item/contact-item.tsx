import { ReactNode } from 'react';

interface ContactItemProps {
  href?: string;
  icon: ReactNode;
  text: string;
  title: string;
}

const ContactItem = ({
  details: { title, href, icon, text },
  index,
}: {
  details: ContactItemProps;
  index: number;
}) => (
  <div
    className='w-full h-full p-4'
    data-aos='flip-left'
    data-aos-delay={`${100 * index}`}
    data-aos-duration='1000'
  >
    <div className='flex flex-col items-center justify-center text-center w-full h-full m-2'>
      <div className='footer-icon'> {icon}</div>
      <a
        href={href}
        className='flex flex-col items-center justify-center text-center no-underline flex items-center text-white hover:text-gray-300 p-1'
      >
        <p className='text-base md:text-lg lg:text-xl font-semibold uppercase my-4'>
          {title}
        </p>
        <p className='text-sm md:text-md m-1'>{text}</p>
      </a>
    </div>
  </div>
);

export default ContactItem;
