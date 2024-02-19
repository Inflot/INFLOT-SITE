import './about-us.section.css';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section
      id='about'
      className='flex flex-col lg:flex-row h-full w-full place-items-center bg-[#AABCC5]'
    >
      <div className='relative flex w-full flex-col lg:flex-row bg-clip-border text-gray-700'>
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          className='lg:w-1/2 px-16 lg:px-24 my-10 lg:my-20'
        >
          <h2 className='select-none text-[#1f3542] block mb-2 antialiased font-semibold leading-snug font-["PlayBold"] text-2xl lg:text-3xl lg:text-6xl tracking-wider mb-4 mt-0 text-center'>
            {t('title')}
          </h2>
          <div className='text-[#1f3542] block mb-8 antialiased font-normal leading-relaxed text-blue-gray-700 text-l md:text-xl lg:text-2xl text-justify lg:text-right'>
            <div className='text-[#1f3542] relative'>
              <p
                data-aos='fade-up'
                data-aos-duration='1000'
                className='text-[#1f3542] block antialiased font-normal leading-relaxed text-blue-gray-700 select-none'
              >
                {t('description1')}
              </p>
              <p
                data-aos='fade-up'
                data-aos-duration='1000'
                className='select-none text-[#1f3542] block antialiased font-normal leading-relaxed text-blue-gray-700'
              >
                {t('description2')}
              </p>
            </div>
          </div>
        </div>

        <figure className='relative w-full lg:w-4/5 m-0 overflow-hidden text-gray-700 bg-clip-border custom-grayscale min-h-[500px]'>
          <div className='inset-0 bg-cover bg-center opacity-80'>
            <div
              className='background-image'
              style={{
                backgroundImage: "url('/images/about/ships.webp')",
              }}
            ></div>
            <div
              className='background-image'
              style={{
                backgroundImage: "url('/images/about/ships2.webp')",
              }}
            ></div>
          </div>
          <figcaption
            data-aos='zoom-in'
            data-aos-duration='700'
            data-aos-delay='700'
            className='select-none absolute inset-0 flex items-end text-white px-4 md:px-12 w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '
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
      </div>
    </section>
  );
}
