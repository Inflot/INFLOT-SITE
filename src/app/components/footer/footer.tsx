import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaFax,
  FaMobile,
} from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('header');

  const year = new Date().getFullYear();
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
    <footer className='bg-[#355060] text-white'>
      <div className='p-4'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-start'>
          <div className='border border-solid border-0 border-r-2 border-white border-r-0 border-b-2 md:border-b-0 md:border-r-2'>
            <div className='px-4'>
              <h3 className='text-lg md:text-xl px-4 tracking-widest uppercase'>
                {t('ourAddress')}
              </h3>
              <iframe
                className='w-full h-56 sm:h-50 md:h-55 lg:h-60 px-4'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1431.0855273135467!2d33.08193897811187!3d68.98057848062761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44341032873f4deb%3A0x5672b7c147af59b!2sUlitsa%20Karla%20Libknekhta%2C%2034%D0%90%2C%20Murmansk%2C%20Murmanskaya%20oblast&#39;%2C%20Russia%2C%20183038!5e0!3m2!1sen!2sus!4v1703710126904!5m2!1sen!2sus'
                style={{ border: 0 }}
                allowFullScreen={false}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
              <p className='mt-2 text-lg md:text-xl px-4'>{t('address')}</p>
            </div>
          </div>
          <div className='px-4 flex flex-col justify-start md:mt-0 border border-solid border-0 border-b-2 border-r-0 md:border-b-0 md:border-r-2 border-white h-full'>
            <h3 className='tracking-widest uppercase text-lg md:text-xl'>
              {t('ourContacts')}
            </h3>
            <a
              href='tel:+79217253181'
              className='no-underline text-xl py-2 flex items-center text-white hover:text-gray-300'
            >
              <FaMobile className='mr-1' /> +7 921 725 3181
            </a>
            <a
              href='https://wa.me/+79210414135'
              className='no-underline text-xl py-2 flex items-center text-white hover:text-gray-300'
            >
              <FaWhatsapp className='mr-1' /> +7 921 041 4135
            </a>
            <a
              href='tel:+78152474405'
              className='no-underline text-xl py-2 flex items-center text-white hover:text-gray-300'
            >
              <FaPhone className='mr-1' /> +7 8152 474405/424663
            </a>
            <a
              href='tel:+78152474381/423862'
              className='no-underline text-xl py-2 flex items-center text-white hover:text-gray-300'
            >
              <FaFax className='mr-1' /> +7 8152 474381/423862
            </a>
            <a
              href='mailto:agency@inflot.com'
              className='no-underline text-xl py-2 pb-10 flex items-center text-white hover:text-gray-300'
            >
              <FaEnvelope className='mr-1' /> agency@inflot.com
            </a>
          </div>
          <div className='px-4 flex flex-col justify-start mt-2 md:mt-0 h-full'>
            <h3 className='text-lg md:text-xl tracking-widest uppercase'>
            {t('links')}
            </h3>
            {links.map(({ link, title }) => (
              <Link
                key={link}
                href={link}
                className='no-underline text-xl py-2 flex items-center text-white hover:text-gray-300'
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-[#22333d] py-2'>
        <p className='text-lg md:text-xl text-center pt-3 px-2'>
          {t('company')}, {year}
        </p>
      </div>
    </footer>
  );
}
