import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { SlAnchor } from "react-icons/sl";
import GoBack from '../../components/go-back-btn/go-back-btn';
import './page.css';

export default function Page() {
  const t = useTranslations('marineLinks');

  const links = [
    {
      img: '/images/flags/gb.png',
      videos: [
        { path: '/videos/gb.webm', type: 'video/webm' },
        { path: '/videos/gb.mp4', type: 'video/mp4' },
      ],
      links: [
        {
          title: `${t('noticesToMariners')} UK`,
          link: 'https://msi.admiralty.co.uk/NoticesToMariners/Weekly',
        },
      ],
    },
    {
      img: '/images/flags/ru.png',
      videos: [
        { path: '/videos/ru.webm', type: 'video/webm' },
        { path: '/videos/ru.mp4', type: 'video/mp4' },
      ],
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
      <section className='links-section relative w-full min-h-[100vh] bg-[#AABCC5] bg-clip-border text-gray-700'>
        <figure className='absolute inset-0 m-0 overflow-hidden text-gray-700 bg-clip-border'>
          <div className='inset-0 bg-cover bg-center h-full w-full'>
            <div
              className='background-image-3 marine-image-1 background-filter'
              style={{
                backgroundPositionY: 'bottom',
                backgroundPositionX: 'left',
              }}
            ></div>
            <div
              className='background-image-3 marine-image-2 background-filter'
              style={{
                backgroundPositionY: 'bottom',
                backgroundPositionX: 'left',
              }}
            ></div>
            <div
              className='background-image-3 marine-image-3 background-filter'
              style={{
                backgroundPositionY: 'bottom',
                backgroundPositionX: 'left',
              }}
            ></div>
          </div>
          <div className='map-overlay'></div>
        </figure>
        <article className='relative z-10 w-full min-h-[100vh] flex flex-col items-center justify-start pt-24 md:pt-28 lg:pt-[20vh] pb-12'>
          <header className='w-full flex flex-col items-center'>
            <h1
              data-aos='zoom-in'
              data-aos-duration='700'
              className='font-["PlayBold"] drop-shadow-[0_0_1rem_#A8C8EA] text-2xl md:text-2xl lg:text-4xl 
              font-normal text-center tracking-widest uppercase px-4 py-2 w-full text-white'
            >
              {t('title')}
            </h1>
          <h2
            data-aos='zoom-in'
            data-aos-duration='700'
            className='uppercase font-normal text-white text-sm md:text-base lg:text-2xl w-3/4 md:w-1/2 text-center m-auto select-none pointer-events-none'
            style={{ whiteSpace: 'pre-line' }}
          >
            {t('noticesToMariners')}
          </h2>
          </header>
          <div className='place-items-top flex justify-center flex-col px-16 md:p-2 xl:p-5 lg:flex-row mt-6 md:mt-10 lg:mt-0'>
            {links.map(({ img, videos, links }, i) => (
              <div
                key={i}
                data-aos='fade-in'
                data-aos-duration='1000'
                data-aos-delay={500 * i}
                className='p-4 md:p-8 relative
                  transform transition duration-500 hover:scale-105'
              >
                <div className='p-2 flex justify-center'>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    width='165'
                    height='auto'
                    className='border rounded-3xl shadow-2xl w-[110px] sm:w-[140px] md:w-[165px] h-auto'
                    poster={img}
                  >
                    {videos.map(({ path, type }, id) => (
                      <source src={path} key={id} type={type} />
                    ))}
                  </video>
                </div>
                <div className='px-4'>
                  <ul className='mt-4 list-none pl-0 text-l md:text-xl lg:text-2xl'>
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
                          font-semibold
                            text-l md:text-xl lg:text-2xl 
                            text-center tracking-widest cursor-pointer capitalize 
                            text-white no-underline rounded-md font-normal
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
      <GoBack />
    </main>
  );
}
