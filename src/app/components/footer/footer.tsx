import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaFax,
  FaMobile,
} from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import ContactItem from '../contact-item/contact-item';

export default function Footer() {
  const t = useTranslations('header');

  const year = new Date().getFullYear();

  const contactDetails = [
    {
      href: 'tel:+79217253181',
      icon: <FaMobile className='mr-1' />,
      text: '+7 921 725 3181',
    },
    {
      href: 'https://wa.me/+79210414135',
      icon: <FaWhatsapp className='mr-1' />,
      text: '+7 921 041 4135',
    },
    {
      href: 'tel:+78152474405',
      icon: <FaPhone className='mr-1' />,
      text: '+7 8152 474405/424663',
    },
    {
      href: 'tel:+78152474381/423862',
      icon: <FaFax className='mr-1' />,
      text: '+7 8152 474381/423862',
    },
    {
      href: 'mailto:agency@inflot.com',
      icon: <FaEnvelope className='mr-1' />,
      text: 'agency@inflot.com',
    },
  ];

  return (
    <footer id='contacts' className='bg-[#355060] text-white'>
      <div className='container mx-auto p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div
            data-aos='fade-right'
            data-aos-duration='1000'
            className='border-b-2 border-white md:border-r-2 md:border-b-0'
          >
            <h3 className='text-lg md:text-xl uppercase tracking-widest p-4'>
              {t('ourAddress')}
            </h3>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5724.341974213531!2d33.084514!3d68.980579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44341032873f4deb%3A0x5672b7c147af59b!2sUlitsa%20Karla%20Libknekhta%2C%2034%D0%90%2C%20Murmansk%2C%20Murmanskaya%20oblast&#39;%2C%20Russia%2C%20183038!5e0!3m2!1sen!2sus!4v1704549152045!5m2!1sen!2sus'
              className='w-full h-96 border-0'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
            <p className='text-lg md:text-xl p-4 mt-2'>{t('address')}</p>
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            className='flex flex-col justify-start border-b-2 border-white md:border-b-0 p-4'
          >
            <h3 className='text-lg md:text-xl uppercase tracking-widest'>
              {t('ourContacts')}
            </h3>
            <div className='flex flex-col space-y-2 mt-2'>
              {contactDetails.map((detail, index) => (
                <ContactItem
                  key={index}
                  href={detail.href}
                  icon={detail.icon}
                  text={detail.text}
                />
              ))}
            </div>
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
