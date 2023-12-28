import './about-us.section.css';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations();
  return (
    <section
      id='about'
      className='py-60 bg-[#AABCC5] relative text-white container justify-center max-w-[100%] flex w-full py-60 flex-row px-8'
    >
      <div className='absolute background-ship inset-0 bg-cover bg-center opacity-50'></div>
      <div
        data-aos='fade-zoom-in'
        data-aos-delay='100'
        data-aos-duration="1000"
        className='text-[#1f3542] font-semibold relative z-10 w-1/2 my-auto'
      >
        <h2 className='font-["PlayBold"] text-2xl md:text-6xl tracking-wider font-bold mb-4'>
          {t('about')}
        </h2>
        <p className='text-2xl md:text-4xl'>
          <span className="font-['PlayBold'] tracking-widest rounded-md">
            {t('name')}{' '}
          </span>{' '}
          {t('aboutDescription')}
        </p>
      </div>
    </section>
  );
}
