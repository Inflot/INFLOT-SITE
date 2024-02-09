import { useTranslations } from 'next-intl';
import './main-info.section.css';
import Image from 'next/image';
import { SlAnchor } from 'react-icons/sl';

export default function MainInformationSection() {
  const t = useTranslations('mainInfo');

  const surveyItems = Array.from({ length: 11 }, (_, i) => ({
    id: i,
    text: t(`surveysList${i}`),
  }));

  const servicesItems = Array.from({ length: 11 }, (_, i) => ({
    id: i,
    text: t(`servicesList${i}`),
  }));

  const staffItems = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    text: t(`2_description${i}`),
  }));

  return (
    <div className='bg-white select-none' id='staff'>
      {/* 1 */}
      <section
        id='mission'
        className='flex flex-row h-full w-full place-items-center'
      >
        <div className='relative flex w-full max-w-full flex-col lg:flex-row bg-white bg-clip-border text-gray-700'>
          <figure
            className='relative m-0 overflow-hidden text-gray-700 bg-white shrink-0 bg-clip-border 
            custom-grayscale w-full lg:w-2/5 min-h-[500px]'
          >
            <div className='inset-0 bg-cover bg-center opacity-85'>
              <div
                className='background-image'
                style={{
                  backgroundImage: "url('/images/photos/6.webp')",
                }}
              ></div>
              <div
                className='background-image'
                style={{
                  backgroundImage: "url('/images/photos/5.webp')",
                }}
              ></div>
            </div>
            <figcaption className='absolute inset-0 flex items-end text-white px-12 top-20 w-full'>
              <h2
                data-aos='zoom-in-left'
                data-aos-duration='700'
                className='font-["PlayBold"] text-2xl lg:text-4xl font-bold text-center px-4 py-0 w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '
                style={{ whiteSpace: 'pre-line' }}
              >
                {t('2_imgTitle')}
                <br />
                <p className='mt-2 text-xl lg:text-3xl font-sans font-normal'>
                  {t('2_imgSubTitle')}
                </p>
              </h2>
            </figcaption>
          </figure>
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            className='px-16 lg:px-24 my-10'
          >
            <h3
              className='mt-0 text-[#1f3542] block antialiased font-semibold leading-snug tracking-normal font-["PlayBold"] 
            tracking-wider mb-2 text-2xl lg:text-3xl lg:text-6xl text-center md:text-left'
            >
              {t('2_title')}
            </h3>
            {staffItems.map((item, i) => (
              <p
                key={item.id}
                data-aos-delay={200 * i}
                className='text-[#1f3542] block antialiased font-normal text-blue-gray-700 leading-relaxed text-l md:text-xl lg:text-2xl hyphens-auto sm:hyphens-manual text-justify'
              >
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 2 */}

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
            <h3
              className='mt-0 text-[#1f3542] block mb-2 antialiased font-semibold leading-snug tracking-normal 
            font-["PlayBold"] tracking-wider mb-4 text-2xl lg:text-3xl lg:text-6xl text-center lg:text-right'
            >
              {t('servicesTitle')}
            </h3>
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
                    <div className='flex justify-center items-center w-10 h-10'>
                      <SlAnchor className='mr-[10px]' size='40px' />
                    </div>
                    <span className='inline-block hyphens-auto sm:hyphens-manual text-justify lg:text-left pr-2'>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <figure className='relative w-full lg:w-2/5 min-h-[500px] m-0 overflow-hidden text-gray-700 shrink-0 bg-clip-border custom-grayscale'>
            <div className='inset-0 bg-cover bg-center opacity-85'>
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
            <figcaption className='absolute inset-0 flex items-end text-white px-12 w-full'>
              <h2
                data-aos='zoom-in-right'
                data-aos-duration='700'
                className='font-["PlayBold"] text-2xl lg:text-4xl font-bold text-center px-4 py-2 w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '
              >
                {t('3_imgTitle')}
                <br />
                <p className='mt-2 text-xl lg:text-3xl font-sans font-normal'>
                  {t('3_imgSubTitle')}
                </p>
              </h2>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 3 */}

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
            <figcaption className='absolute inset-0 flex items-end text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] px-12 w-full'>
              <h2
                data-aos='zoom-in-left'
                data-aos-duration='700'
                className='font-["PlayBold"] text-2xl lg:text-4xl font-bold text-center px-4 py-2 w-full'
              >
                {t('4_imgTitle')}
                <br />
                <p className='mt-2 text-xl lg:text-3xl font-sans font-normal'>
                  {t('4_imgSubTitle')}
                </p>
              </h2>
            </figcaption>
          </figure>
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            className='px-16 lg:px-24 py-4 lg:py-10'
          >
            <h3
              className='mt-0 text-[#1f3542] block mb-2 antialiased font-semibold leading-snug tracking-normal font-["PlayBold"] 
              tracking-wider mb-4 text-2xl lg:text-3xl lg:text-6xl text-center lg:text-left'
            >
              {t('surveyTitle')}
            </h3>
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
    </div>
  );
}
