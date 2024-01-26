import { useTranslations } from 'next-intl';
import './main-info.section.css';
import Image from 'next/image';

export default function MainInformationSection() {
  const t = useTranslations('mainInfo');

  return (
    <div className='bg-white'>
      {/* 1 */}
      <section
        id='mission'
        className='flex flex-row h-full w-full place-items-center'
      >
        <div className='relative flex w-full max-w-full flex-row bg-white bg-clip-border text-gray-700'>
          <figure className='relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white shrink-0 bg-clip-border custom-grayscale'>
            <Image
              src='/images/photos/1.jpg'
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
                {t('1_imgTitle')}
                <br />
                <p className='mt-2 text-3xl font-sans font-normal'>
                  {t('1_imgSubTitle')}
                </p>
              </h2>
            </figcaption>
          </figure>
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            className='px-24 py-5 my-20'
          >
            <h4 className='text-[#1f3542] block mb-2 antialiased font-semibold leading-snug tracking-normal font-["PlayBold"] text-3xl md:text-6xl tracking-wider mb-4 text-center md:text-left'>
              {t('1_title')}
            </h4>
            <p className='text-[#1f3542] block mb-8 antialiased font-normal leading-relaxed text-blue-gray-700 text-2xl'>
              {t('1_description')}
            </p>
          </div>
        </div>
      </section>

      {/* 2 */}

      <section
        className='flex flex-row h-full w-full place-items-center bg-[#AABCC5]'
      >
        <div className='relative flex w-full max-w-full flex-row bg-clip-border text-gray-700'>
          <div
            data-aos='fade-right'
            data-aos-duration='1000'
            className='px-24 py-5 my-20'
          >
            <h4 className='text-[#1f3542] block mb-2 antialiased font-semibold leading-snug tracking-normal font-["PlayBold"] text-3xl md:text-6xl tracking-wider mb-4 text-center md:text-right'>
              {t('2_title')}
            </h4>
            <p className='text-[#1f3542] block mb-8 antialiased font-normal leading-relaxed text-blue-gray-700 text-2xl text-right'>
              {t('2_description')}
            </p>
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
                {t('2_imgTitle')}
                <br />
                <p className='mt-2 text-3xl font-sans font-normal'>
                  {t('2_imgSubTitle')}
                </p>
              </h2>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 3 */}

      <section
        className='flex flex-row h-full w-full place-items-center bg-[#355060]'
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
                {t('3_imgTitle')}
                <br />
                <p className='mt-2 text-3xl font-sans font-normal'>
                  {t('3_imgSubTitle')}
                </p>
              </h2>
            </figcaption>
          </figure>
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            className='px-24 py-5 text-white my-20'
          >
            <h4 className='text-[#1f3542] text-white block mb-2 antialiased font-semibold leading-snug tracking-normal font-["PlayBold"] text-3xl md:text-6xl tracking-wider mb-4 text-center md:text-left'>
              {t('3_title')}
            </h4>
            <p className='text-[#1f3542] block mb-8 antialiased font-normal leading-relaxed text-2xl text-white'>
              {t('3_description')}
            </p>
          </div>
        </div>
      </section>

      {/* 4 */}

      <section
        className='flex flex-row h-full w-full place-items-center bg-[#AABCC5]'
      >
        <div className='relative flex w-full max-w-full flex-row bg-clip-border text-gray-700'>
          <div data-aos="fade-right" data-aos-duration='1000' className='px-24 my-32'>
            <h4 className='text-[#1f3542] block mb-2 antialiased font-semibold leading-snug tracking-normal font-["PlayBold"] text-3xl md:text-6xl tracking-wider mb-4 text-center md:text-right'>
              {t('4_title')}
            </h4>
            <p className='text-[#1f3542] block mb-8 antialiased font-normal leading-relaxed text-blue-gray-700 text-2xl text-right'>
              {t('4_description')}
            </p>
          </div>

          <figure className='relative w-2/6 m-0 overflow-hidden text-gray-700 shrink-0 bg-clip-border custom-grayscale'>
            <Image
              src='/images/photos/4.jpg'
              alt='image'
              fill
              className='w-full h-full'
            />
            <figcaption className='absolute inset-0 flex items-start text-white px-12 w-full'>
              <h2 data-aos="zoom-in-right" data-aos-duration='700' className='font-["PlayBold"] text-4xl font-bold text-left px-4 py-2 bg-[#22333d91] w-full'>
                {t('4_imgTitle')}
                <br />
                <p className='mt-2 text-3xl font-sans font-normal'>
                  {t('4_imgSubTitle')}
                </p>
              </h2>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
