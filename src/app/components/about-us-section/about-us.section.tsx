import './about-us.section.css';
import { useTranslations } from 'next-intl';
import { SlAnchor } from 'react-icons/sl';

export default function AboutSection() {
  const t = useTranslations();
  const h = useTranslations('mainInfo');

  const listItems = Array.from({ length: 11 }, (_, i) => ({
    id: i + 1,
    text: t(`aboutList${i + 1}`),
  }));

  return (
    <>
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
            <h3 className='text-[#1f3542] block mb-2 antialiased font-semibold leading-snug font-["PlayBold"] text-2xl lg:text-3xl lg:text-6xl tracking-wider mb-4 mt-0 text-center lg:text-right'>
              {t('about')}
            </h3>
            <div className='text-[#1f3542] block mb-8 antialiased font-normal leading-relaxed text-blue-gray-700 text-xl lg:text-2xl text-justify lg:text-right'>
              <div className='text-[#1f3542] relative'>
                <p
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  className='text-[#1f3542] block antialiased font-normal leading-relaxed text-blue-gray-700'
                >
                  {t('aboutDescription1')}
                </p>
                {/* <ReadMore listItems={listItems} title={t('aboutListTitle')} /> */}
                <p
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  className='text-[#1f3542] block antialiased font-normal leading-relaxed text-blue-gray-700'
                >
                  {t('aboutDescription2')}
                </p>
              </div>
            </div>
          </div>

          <figure className='relative w-full lg:w-4/5 m-0 overflow-hidden text-gray-700 bg-clip-border custom-grayscale min-h-[500px]'>
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
            <figcaption className='absolute inset-0 flex items-end text-white px-4 md:px-12 w-full'>
              <h2
                data-aos='zoom-in-right'
                data-aos-duration='700'
                className='font-["PlayBold"] text-2xl lg:text-4xl font-bold text-left px-4 py-2 bg-[#22333d91] w-full'
              >
                {h('1_imgTitle')}
                <br />
                <p className='mt-2 text-xl lg:text-3xl font-sans font-normal'>
                  {h('1_imgSubTitle')}
                </p>
              </h2>
            </figcaption>
          </figure>
        </div>
      </section>
      <section
        id='mission'
        className='flex flex-col h-full w-full place-items-center bg-[#355060] text-slate-300 py-4 lg:py-10 px-16 lg:px-24'
      >
        <h3
          data-aos='fade-up'
          data-aos-duration='1000'
          className='block mb-2 antialiased font-semibold leading-snug font-["PlayBold"] text-2xl lg:text-3xl lg:text-6xl tracking-wider my-4 text-center md:text-right'
        >
          {t('aboutListTitle')}
        </h3>

        <ul className='px-0 space-y-1 list-inside text-xl lg:text-2xl'>
          {listItems.map((item, i) => (
            <li
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay={200 * i}
              key={item.id}
              className='flex items-center space-x-2 py-2'
            >
              <div className='flex justify-center items-center w-10 h-10'>
                <SlAnchor className='mr-[10px]' size='40px' />
              </div>
              <span className='inline-block pr-2 text-xl lg:text-2xl text-justify'>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
