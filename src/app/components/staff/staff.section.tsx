import './staff.section.css';
import { useTranslations } from 'next-intl';

export default function StaffSection() {
  const t = useTranslations('staff');

  const staffItems = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    text: t(`description${i}`),
  }));

  return (
    <section
      id='staff'
      className='flex flex-row h-full w-full place-items-center'
    >
      <div className='relative flex w-full max-w-full flex-col lg:flex-row bg-white bg-clip-border text-gray-700'>
        <figure
          className='relative m-0 overflow-hidden text-gray-700 bg-white shrink-0 bg-clip-border 
        custom-grayscale w-full lg:w-2/5 min-h-[500px]'
        >
          <div className='inset-0 bg-cover bg-center opacity-90'>
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
          <figcaption
            data-aos='zoom-in'
            data-aos-duration='700'
            data-aos-delay='700'
            className='absolute inset-0 flex items-end text-white px-12 top-20 w-full'
          >
            <h3
              className='font-["PlayBold"] text-2xl lg:text-4xl font-bold text-center px-4 py-0 w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '
              style={{ whiteSpace: 'pre-line' }}
            >
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
          className='px-16 lg:px-24 my-10'
        >
          <h2
            className='mt-0 text-[#1f3542] block antialiased font-semibold leading-snug tracking-normal font-["PlayBold"] 
        tracking-wider mb-2 text-2xl lg:text-3xl lg:text-6xl text-center'
          >
            {t('title')}
          </h2>
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
  );
}
