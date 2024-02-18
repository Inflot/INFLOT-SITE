import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { SlAnchor } from 'react-icons/sl';

export default function Page() {
  const t = useTranslations('marineLinks');

  const links = [
    {
      img: '/images/flags/gb.png',
      video: '/videos/gb.webm',
      links: [
        {
          title: `${t('noticesToMariners')} UK`,
          link: 'https://msi.admiralty.co.uk/NoticesToMariners/Weekly',
        },
      ],
    },
    {
      img: '/images/flags/ru.png',
      video: '/videos/ru.webm',
      links: [
        {
          title: `${t('noticesToMariners')} RU`,
          link: 'https://structure.mil.ru/structure/forces/hydrographic/info/notices.htm',
        },
        {
          title: t('murmanskNavigationalWarnings'),
          link: 'https://mapm.ru/prip',
        },
        {
          title: t('arkhangelskNavigationalWarnings'),
          link: 'https://mapm.ru/PripAr',
        },
        {
          title: t('navigationalWarningsWest'),
          link: 'https://mapm.ru/PripW',
        },
      ],
    },
  ];

  return (
    <main className='main select-none'>
      <section className='flex flex-col w-full place-items-center bg-[#AABCC5] bg-clip-border text-gray-700'>
        <figure className='relative w-full m-0 overflow-hidden text-gray-700 bg-clip-border min-h-[400px] md:min-h-[500px] lg:min-h-[700px]'>
          <div className='inset-0 bg-cover bg-center opacity-75'>
            <div
              className='background-image'
              style={{
                backgroundImage: "url('/images/marine-links/1.webp')",
                backgroundPositionY: 'bottom',
                backgroundPositionX: 'left',
              }}
            ></div>
            <div
              className='background-image'
              style={{
                backgroundImage: "url('/images/marine-links/2.webp')",
                backgroundPositionY: 'center',
              }}
            ></div>
          </div>
          <figcaption
            data-aos='zoom-in'
            data-aos-duration='700'
            className='select-none absolute inset-0 flex items-center text-white px-4 md:px-12 w-full'
          >
            <h1
              className='font-["PlayBold"] drop-shadow-[0_0_1rem_#A8C8EA] text-4xl sm:text-5xl lg:text-6xl 
              font-normal text-center tracking-widest uppercase px-4 py-2 w-full'
            >
              {t('title')}
            </h1>
          </figcaption>
          <Image
            width='2000'
            height='100'
            alt={t('title')}
            className='absolute absolute inset-x-0 bottom-0 h-fit w-full'
            src='/images/marine-links/wave.svg'
          />
        </figure>
        <article className='my-16 max-w-[100%] md:max-w-[90%]'>
          <h2
            data-aos='zoom-in'
            data-aos-duration='700'
            data-aos-delay='700'
            className='text-[#1f3542] block antialiased font-semibold leading-snug tracking-normal 
            font-["PlayBold"] tracking-wide mt-0 my-12 text-2xl lg:text-3xl lg:text-6xl text-center capitalize'
            style={{ whiteSpace: 'pre-line' }}
          >
            {t('noticesToMariners')}
          </h2>
          <div className='place-items-top grid gap-8 grid-cols-1 md:grid-cols-2 px-16 md:p-2 xl:p-5'>
            {links.map(({ img, video, links }, i) => (
              <div
                key={i}
                data-aos='fade-in'
                data-aos-duration='1000'
                data-aos-delay={500 * i}
                className='w-full p-4 md:p-8 relative
                  transform transition duration-500 hover:scale-105'
              >
                <div className='p-2 flex justify-center'>
                  <video autoPlay loop width='350' height='auto' className='border rounded-3xl shadow-2xl'>
                    <source src={video} type='video/webm' />
                  </video>
                </div>
                <div className='px-4'>
                  <ul className='mt-8 list-none pl-0 text-l md:text-xl lg:text-2xl'>
                    {links.map(({ link, title }, key) => (
                      <li
                        key={key}
                        data-aos='fade-in'
                        data-aos-duration='500'
                        data-aos-delay={500 * i + 200 * key}
                        className='p-0 md:p-2'
                      >
                        <Link
                          href={link}
                          target='_blank'
                          className='
                            text-l md:text-xl lg:text-2xl 
                            text-center tracking-widest cursor-pointer capitalize 
                            text-[#1f3542] no-underline rounded-md font-normal
                            pr-2 
                            flex justify-center content-center py-2 md:py-0
                            hover:underline
                        '
                        >
                          <span>
                            <SlAnchor
                              size='15px'
                              className='h-full mr-[10px]'
                            />
                          </span>
                          <span className='w-fit'>{title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
