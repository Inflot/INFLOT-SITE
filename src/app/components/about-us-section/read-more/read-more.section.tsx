'use client';

import { SlAnchor } from 'react-icons/sl';
import './read-more.section.css';
import { useEffect, useRef } from 'react';

type ReadMoreProps = {
  listItems: Array<{ id: number; text: string }>;
  title: string;
};

export default function ReadMore({ listItems, title }: ReadMoreProps) {
  const myElementRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLInputElement>(null);

  const checkVisibility = () => {
    const element = myElementRef.current;
    const button = buttonRef.current;

    if (element && button) {
      const elementRect = element.getBoundingClientRect();
      const viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      );
      const isVisible = !(
        elementRect.bottom < 0 || elementRect.top - viewHeight >= 0
      );

      if (!isVisible && button.checked) {
        button.click();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div className='accordion py-2' data-aos='fade-up' data-aos-duration='1000'>
      <input type='checkbox' id='read-more' ref={buttonRef}></input>
      <label htmlFor='read-more' className='text-center text-xl md:text-3xl'>
        {title}
      </label>
      <div className='content' ref={myElementRef}>
        <ul className='space-y-1 list-inside text-xl md:text-2xl'>
          {listItems.map((item) => (
            <li key={item.id} className='flex items-center space-x-2 py-2'>
              <div className='flex justify-center items-center w-10 h-10'>
                <SlAnchor className='mr-[10px]' size='40px' />
              </div>
              <span className='inline-block text-left pr-2'>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
