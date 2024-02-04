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
    <div className='bg-white' id='staff'>
      {/* 1 */}
      <section
        id='mission'
        className='flex flex-row h-full w-full place-items-center'
      >
        <div className='relative flex w-full max-w-full flex-row bg-white bg-clip-border text-gray-700'>
          <figure className='relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white shrink-0 bg-clip-border custom-grayscale'>
            <Image
              src='/images/photos/4.jpg'
              alt='image'
              fill
              className='object-cover w-full h-full'
            />
            <figcaption className='absolute inset-0 flex items-start text-white px-12 w-full'>
              <h2
                data-aos='zoom-in-left'
                data-aos-duration='700'
                className='font-["PlayBold"] text-4xl font-bold text-left px-4 py-2 bg-[#22333d91] w-full'
              >
                {t('2_imgTitle')}
                <br />
                <p className='mt-2 text-3xl font-sans font-normal'>
                  {t('2_imgSubTitle')}
                </p>
              </h2>
            </figcaption>
          </figure>
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            className='px-24 py-5 my-20'
          >
            <h4 className='mt-0 text-[#1f3542] block mb-2 antialiased font-semibold leading-snug tracking-normal font-["PlayBold"] text-3xl md:text-6xl tracking-wider mb-4 text-center md:text-left'>
              {t('2_title')}
            </h4>
            {staffItems.map((item) => (
              <p
                key={item.id}
                className='text-[#1f3542] block mb-8 antialiased font-normal leading-relaxed text-blue-gray-700 text-2xl'
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
        <div className='relative flex w-full max-w-full flex-row bg-clip-border text-gray-700'>
          <div
            data-aos='fade-right'
            data-aos-duration='1000'
            className='px-24 py-5 my-20'
          >
            <h4 className='mt-0 text-[#1f3542] block mb-2 antialiased font-semibold leading-snug tracking-normal font-["PlayBold"] text-3xl md:text-6xl tracking-wider mb-4 text-center md:text-right'>
              {t('servicesTitle')}
            </h4>
            <div className='text-[#1f3542] block mb-8 antialiased font-normal leading-relaxed text-2xl '>
              <ul className='space-y-1 list-inside text-xl md:text-2xl'>
                {servicesItems.map((item) => (
                  <li
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

          <figure className='relative w-1/2 m-0 overflow-hidden text-gray-700 shrink-0 bg-clip-border custom-grayscale'>
            <Image
              src='/images/photos/2.jpg'
              alt='image'
              fill
              className='object-cover w-full h-full'
            />
            <figcaption className='absolute inset-0 flex items-end text-white px-12 w-full'>
              <h2
                data-aos='zoom-in-right'
                data-aos-duration='700'
                className='font-["PlayBold"] text-4xl font-bold text-left px-4 py-2 bg-[#22333d91] w-full'
              >
                {t('3_imgTitle')}
                <br />
                <p className='mt-2 text-3xl font-sans font-normal'>
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
        <div className='relative flex w-full max-w-full flex-row bg-clip-border'>
          <figure className='relative w-2/5 m-0 overflow-hidden shrink-0 bg-clip-border custom-grayscale'>
            <Image
              src='/images/photos/3.jpg'
              alt='image'
              fill
              className='object-cover w-full h-full'
            />
            <figcaption className='absolute inset-0 flex items-end text-white px-12 w-full'>
              <h2
                data-aos='zoom-in-left'
                data-aos-duration='700'
                className='font-["PlayBold"] text-4xl font-bold text-left px-4 py-2 bg-[#22333d91] w-full'
              >
                {t('4_imgTitle')}
                <br />
                <p className='mt-2 text-3xl font-sans font-normal'>
                  {t('4_imgSubTitle')}
                </p>
              </h2>
            </figcaption>
          </figure>
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            className='px-24 py-5 my-20'
          >
            <h4 className='mt-0 text-[#1f3542] block mb-2 antialiased font-semibold leading-snug tracking-normal font-["PlayBold"] text-3xl md:text-6xl tracking-wider mb-4 text-center md:text-left'>
              {t('surveyTitle')}
            </h4>
            <div className='text-[#1f3542] block mb-8 antialiased font-normal leading-relaxed text-2xl '>
              <ul className='space-y-1 list-inside text-xl md:text-2xl'>
                {surveyItems.map((item) => (
                  <li
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
