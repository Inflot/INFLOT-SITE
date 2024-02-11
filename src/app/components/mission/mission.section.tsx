import './mission.section.css';
import { useTranslations } from 'next-intl';
import { SlAnchor } from 'react-icons/sl';

export default function MissionSection() {
  const t = useTranslations('mission');

  const listItems = Array.from({ length: 11 }, (_, i) => ({
    id: i + 1,
    text: t(`listItem${i + 1}`),
  }));

  return (
    <section
      id='mission'
      className='flex flex-col h-full w-full place-items-center text-white bg-[#355060] py-4 lg:py-10 px-16 lg:px-24
        sm:bg-[url("/images/about/map.webp")]
        bg-clip-border bg-cover bg-center'
    >
      <h2
        data-aos='fade-up'
        data-aos-duration='1000'
        className='select-none block mb-2 antialiased font-semibold leading-snug font-["PlayBold"] text-2xl lg:text-3xl lg:text-6xl tracking-wider my-4 text-center md:text-right'
      >
        {t('title')}
      </h2>

      <ul className='select-none px-0 space-y-1 list-inside text-l md:text-xl lg:text-2xl'>
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
            <span className='inline-block pr-2 leading-relaxed text-l md:text-xl lg:text-2xl hyphens-auto sm:hyphens-manual text-justify'>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
