import { SlAnchor } from 'react-icons/sl';
import { useTranslations } from 'next-intl';
import './services.section.css';

export default function ServicesSection() {
  const t = useTranslations('services');

  const servicesItems = Array.from({ length: 11 }, (_, i) => ({
    id: i,
    text: t(`listItem${i}`),
  }));

  return (
    <section
      className='flex flex-row h-full w-full place-items-center bg-[#AABCC5]'
      id='services'
    >
      <div className='relative flex w-full max-w-full flex-col-reverse lg:flex-row bg-clip-border text-gray-700'>
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          className='px-16 lg:px-24 py-4 lg:py-10'
        >
          <h2
            className='mt-0 text-[#1f3542] block mb-2 antialiased font-semibold leading-snug tracking-normal 
        font-["PlayBold"] tracking-wider mb-4 text-2xl lg:text-3xl lg:text-6xl text-center'
          >
            {t('title')}
          </h2>
          <div className='text-[#1f3542] block mb-8 antialiased font-normal leading-relaxed'>
            <ul className='pl-0 space-y-1 list-inside text-l md:text-xl lg:text-2xl'>
              {servicesItems.map((item, i) => (
                <li
                  data-aos='fade-right'
                  data-aos-duration='500'
                  data-aos-delay={200 * i}
                  key={item.id}
                  className='flex items-center space-x-2 py-2'
                >
                  <span className='flex justify-center items-center w-10 h-10'>
                    <SlAnchor className='mr-[10px]' size='40px' />
                  </span>
                  <span className='inline-block hyphens-auto sm:hyphens-manual text-justify lg:text-left pr-2'>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className='relative w-full lg:w-2/5 min-h-[500px] m-0 overflow-hidden text-gray-700 shrink-0 bg-clip-border custom-grayscale'>
          <div className='inset-0 bg-cover bg-center opacity-90'>
            <div
              className='background-image'
              style={{
                backgroundImage: "url('/images/photos/2.webp')",
              }}
            ></div>
            <div
              className='background-image'
              style={{
                backgroundImage: "url('/images/photos/7.webp')",
              }}
            ></div>
          </div>
          <figcaption
            data-aos='zoom-in'
            data-aos-duration='700'
            data-aos-delay='700'
            className='absolute inset-0 flex items-end text-white px-12 w-full'
          >
            <h3 className='font-["PlayBold"] text-2xl lg:text-4xl font-bold text-center px-4 py-2 w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '>
              <span>{t('imgTitle')}</span>
              <br />
              <span className='mt-2 text-xl lg:text-3xl font-sans font-normal'>
                {t('imgSubTitle')}
              </span>
            </h3>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
