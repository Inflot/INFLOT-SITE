import Image from 'next/image';
import './about-us.section.css';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations();
  return (
    <section
      id='about'
      className='py-60 bg-[#AABCC5] relative text-white container justify-center max-w-[100%] flex w-full py-60 flex-row px-8'
    >
      <div
        className='absolute inset-0 bg-cover bg-center opacity-50'
        style={{
          backgroundImage: "url('/images/about/ships.png')",
          filter:
            'brightness(80%) contrast(90%) hue-rotate(-10deg) saturate(70%)',
        }}
      ></div>

      <div className='text-[#1f3542] font-semibold relative z-10 w-1/2 wow animate__animated animate__fadeInRight my-auto'>
        <h2 className='text-2xl md:text-6xl tracking-wider font-bold mb-4'>
          {t('about')}
        </h2>
        <p className='text-2xl md:text-4xl'>
          <span className="font-['KdamThmorPro'] tracking-widest rounded-md">
            {t('name')}{' '}
          </span>{' '}
          {t('aboutDescription')}
        </p>
      </div>
    </section>
  );
}
