import './about-us.section.css';
import { useTranslations } from 'next-intl';
import ReadMore from './read-more/read-more.section';

export default function AboutSection() {
  const t = useTranslations();
  const h = useTranslations('mainInfo');

  const listItems = Array.from({ length: 11 }, (_, i) => ({
    id: i + 1,
    text: t(`aboutList${i + 1}`),
  }));

  return (
    <section
      id='about'
      className='flex flex-row h-full w-full place-items-center bg-[#AABCC5]'
    >
      <div className='relative flex w-full max-w-full flex-row bg-clip-border text-gray-700'>
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          className='px-24 py-5 my-20'
        >
          <h4 className='text-[#1f3542] block mb-2 antialiased font-semibold leading-snug tracking-normal font-["PlayBold"] text-3xl md:text-6xl tracking-wider mb-4 mt-0 text-center md:text-right'>
            {t('about')}
          </h4>
          <div className='text-[#1f3542] block mb-8 antialiased font-normal leading-relaxed text-blue-gray-700 text-2xl text-right'>
            <div className='text-[#1f3542] relative'>
              <p
                data-aos='fade-up'
                data-aos-duration='1000'
                className='text-xl md:text-2xl text-right leading-7 md:leading-10'
              >
                {t('aboutDescription1')}
              </p>
              <ReadMore listItems={listItems} title={t('aboutListTitle')} />
              <p
                data-aos='fade-up'
                data-aos-duration='1000'
                className='text-xl md:text-2xl text-right leading-7 md:leading-10'
              >
                {t('aboutDescription2')}
              </p>
            </div>
          </div>
        </div>

        <figure className='relative w-1/2 m-0 overflow-hidden text-gray-700 shrink-0 bg-clip-border custom-grayscale'>
          <div className='inset-0 bg-cover bg-center opacity-75'>
            <div
              className='background-image'
              style={{
                backgroundImage: "url('/images/about/ships.png')",
              }}
            ></div>
            <div
              className='background-image'
              style={{
                backgroundImage: "url('/images/about/ships2.png')",
              }}
            ></div>
          </div>
          <figcaption className='absolute inset-0 flex items-end text-white px-12 w-full'>
            <h2
              data-aos='zoom-in-right'
              data-aos-duration='700'
              className='font-["PlayBold"] text-4xl font-bold text-left px-4 py-2 bg-[#22333d91] w-full'
            >
              {h('1_imgTitle')}
              <br />
              <p className='mt-2 text-3xl font-sans font-normal'>
                {h('1_imgSubTitle')}
              </p>
            </h2>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
