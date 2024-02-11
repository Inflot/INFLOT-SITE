import { SlAnchor } from 'react-icons/sl';
import { useTranslations } from 'next-intl';
import './surveys.section.css';

export default function SurveysSection() {
  const t = useTranslations('surveys');

  const surveyItems = Array.from({ length: 11 }, (_, i) => ({
    id: i,
    text: t(`listItem${i}`),
  }));

  return (
    <section
      className='flex flex-row h-full w-full place-items-center bg-white'
      id='surveys'
    >
      <div className='relative flex w-full max-w-full flex-col lg:flex-row bg-clip-border'>
        <figure className='relative w-full lg:w-2/5 min-h-[500px] m-0 overflow-hidden shrink-0 bg-clip-border custom-grayscale'>
          <div className='inset-0 bg-cover bg-center opacity-85'>
            <div
              className='background-image'
              style={{
                backgroundImage: "url('/images/photos/8.webp')",
              }}
            ></div>
            <div
              className='background-image'
              style={{
                backgroundImage: "url('/images/photos/4.webp')",
              }}
            ></div>
          </div>
          <figcaption
            data-aos='zoom-in-left'
            data-aos-duration='700'
            className='absolute inset-0 flex items-end text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] px-12 w-full'
          >
            <h3 className='font-["PlayBold"] text-2xl lg:text-4xl font-bold text-center px-4 py-2 w-full'>
              <span>{t('imgTitle')}</span>
              <br />
              <span className='mt-2 text-xl lg:text-3xl font-sans font-normal'>
                {t('imgSubTitle')}
              </span>
            </h3>
          </figcaption>
        </figure>
        <div
          data-aos='fade-left'
          data-aos-duration='1000'
          className='px-16 lg:px-24 py-4 lg:py-10'
        >
          <h2
            className='mt-0 text-[#1f3542] block mb-2 antialiased font-semibold leading-snug tracking-normal font-["PlayBold"] 
              tracking-wider mb-4 text-2xl lg:text-3xl lg:text-6xl text-center lg:text-left'
          >
            {t('title')}
          </h2>
          <div className='text-[#1f3542] block mb-8 antialiased font-normal leading-relaxed'>
            <ul className='space-y-1 list-inside pl-0 text-l md:text-xl lg:text-2xl'>
              {surveyItems.map((item, i) => (
                <li
                  data-aos='fade-left'
                  data-aos-duration='500'
                  data-aos-delay={200 * i}
                  key={item.id}
                  className='flex items-center space-x-2 py-2'
                >
                  <div className='flex justify-center items-center w-10 h-10'>
                    <SlAnchor className='mr-[10px]' size='40px' />
                  </div>
                  <span className='inline-block text-left pr-2'>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
