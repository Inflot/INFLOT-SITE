import './about-us.section.css';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations();
  return (
    <section
      id='about'
      className='py-60 bg-[#AABCC5] relative text-white container justify-center max-w-[100%] flex w-full py-60 flex-row px-8'
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

      <div className='text-[#1f3542] font-semibold relative z-10 w-1/2 my-auto'>
        <h2
          data-aos='fade-down'
          data-aos-duration='1000'
          className='font-["PlayBold"] text-2xl md:text-6xl tracking-wider font-bold mb-4'
        >
          {t('about')}
        </h2>
        <p
          data-aos='fade-up'
          data-aos-duration='1000'
          className='text-2xl md:text-4xl'
        >
          <span className="font-['PlayBold'] tracking-widest rounded-md">
            {t('name')}{' '}
          </span>{' '}
          {t('aboutDescription')}
        </p>
      </div>
    </section>
  );
}
