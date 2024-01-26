import './about-us.section.css';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations();
  const h = useTranslations('header');

  return (
    <section
      id='about'
      className='py-20 md:py-60 bg-[#AABCC5] relative text-white container justify-center max-w-[100%] min-h-[100vh] flex w-full flex-row px-8'
    >
      <div className='absolute inset-0 bg-cover bg-center opacity-75'>
        <div
          className='background-image'
          style={{
            backgroundImage:
              "linear-gradient(#b5c5cfc5 ,#151f25bb), url('/images/about/ships.png')",
          }}
        ></div>
        <div
          className='background-image'
          style={{
            backgroundImage:
              "linear-gradient(#b5c5cfc5 ,#151f25bb), url('/images/about/ships2.png')",
          }}
        ></div>
      </div>

      <div className='text-[#1f3542] font-semibold relative z-10 w-full md:w-1/2'>
        <h2
          data-aos='fade-down'
          data-aos-duration='1000'
          className='font-["PlayBold"] text-2xl md:text-6xl tracking-wider mb-4 text-center md:text-left'
        >
          {t('about')}
        </h2>
        <p
          data-aos='fade-up'
          data-aos-duration='1000'
          className='text-xl md:text-4xl text-center md:text-left leading-7 md:leading-10'
        >
          {t('aboutDescription')}
        </p>
        <a
          data-aos='fade-up'
          data-aos-duration='1000'
          href='#mission'
          className='text-[#1f3542] mt-8 md:mt-12 no-underline ring-2 ring-[#1f3542] focus:bg-[#1f354270] hover:bg-[#1f354247] rounded-lg px-5 py-2.5 select-none focus:outline-none text-lg md:text-2xl lg:text-3xl'
        >
          {h('mission')}
        </a>
      </div>
    </section>
  );
}
