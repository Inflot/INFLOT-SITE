import { FaPhone, FaWhatsapp, FaEnvelope, FaFax } from 'react-icons/fa';
import { ImMobile, ImLocation2 } from 'react-icons/im';
import { useTranslations } from 'next-intl';
import ContactItem from '../contact-item/contact-item';
import Link from 'next/link';
import Image from 'next/image';
import './footer.css';

export default function Footer() {
  const t = useTranslations('navigation');
  const tMeta = useTranslations('meta');

  const year = new Date().getFullYear();
  const iconSize = '50px';

  const getAddressLink = () =>
    tMeta('lang') === 'ru'
      ? 'https://yandex.ru/maps/-/CDuW4JJs'
      : 'https://maps.app.goo.gl/nifSUWdpAUu6iRRNA';

  const contactDetails = [
    {
      href: 'tel:+79217253181',
      icon: <ImMobile size={iconSize} className='m-3' />,
      text: '24 / 7',
      title: t('mobile'),
      target: '_self',
    },
    {
      href: 'https://wa.me/+79210414135',
      icon: <FaWhatsapp size={iconSize} className='m-3' />,
      text: '',
      title: t('whatsapp'),
      target: '_blank',
    },
    {
      href: 'tel:+78152474405',
      icon: <FaPhone size={iconSize} className='m-3' />,
      text: '+7 8152 474405 / 424663',
      title: t('telephone'),
      target: '_self',
    },
    {
      href: 'tel:+78152474381',
      icon: <FaFax size={iconSize} className='m-3' />,
      text: '+7 8152 474381 / 423862',
      title: t('fax'),
      target: '_self',
    },
    {
      href: 'mailto:agency@inflot.com',
      icon: <FaEnvelope size={iconSize} className='m-3' />,
      text: 'agency@inflot.com',
      title: t('mail'),
      target: '_self',
    },
    {
      href: getAddressLink(),
      icon: <ImLocation2 size={iconSize} className='m-3' />,
      text: t('address'),
      title: t('ourAddress'),
      target: '_blank',
    },
  ];

  return (
    <footer id='contacts' className='bg-[#355060] text-white'>
      <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='w-full'>
            {tMeta('lang') === 'ru' ? (
              <iframe
                src='https://yandex.ru/map-widget/v1/?um=constructor%3A13f02be821d9d672046501007edf075d2227ff6d2cb948060fea5e3f6f579bcd&amp;source=constructor'
                className='w-full h-[300px] sm:h-[400px] md:min-h-[600px] border-0'
                loading='lazy'
              ></iframe>
            ) : (
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5724.341974213531!2d33.084514!3d68.980579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44341032873f4deb%3A0x5672b7c147af59b!2sUlitsa%20Karla%20Libknekhta%2C%2034%D0%90%2C%20Murmansk%2C%20Murmanskaya%20oblast&#39;%2C%20Russia%2C%20183038!5e0!3m2!1sen!2sus!4v1704549152045!5m2!1sen!2sus'
                className='w-full h-[300px] sm:h-[400px] md:min-h-[600px] border-0'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            )}
          </div>
          <div className='w-full p-4 m-auto'>
            <div className='grid grid-cols-2 md:grid-cols-3'>
              {contactDetails.map((details, index) => (
                <ContactItem key={index} details={details} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-center bg-[#22333d] py-8'>
        <Link
          href='/'
          className='flex items-center justify-center w-full lg:w-auto'
        >
          <Image
            width='220'
            height='100'
            className='h-24
            mx-0 lg:ml-20 lg:mr-5 z-50 logo--shadow pointer-events-none select-none block w-auto
            transition-all duration-500'
            src='/footer-logo.png'
            alt='Logo'
          />
        </Link>
        <p className='select-none font-["PlayBold"] text-center tracking-widest uppercase text-md sm:text-lg md:text-xl px-2 py-3'>
          {t('company')}, {year}
        </p>
      </div>
    </footer>
  );
}
