'use client';

import { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall'
import 'aos/dist/aos.css';

export default function LibsLoader() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const start = new Date(currentYear, 11, 1);
  const end = new Date(currentYear + 1, 2, 28);
  const isShowSnow = today >= start || today <= end;

  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        once: true,
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
      });
    });
  }, []);

  useEffect(() => {
    const snowflake = document.createElement('img');
    snowflake.src = '/images/snowflakes/snowflake-2.png';
    setImages([snowflake]);
  }, []);

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = '/snowFlakes/Snow.js';
  //   script.onload = () => {
  //     //@ts-ignore
  //     new Snow();
  //   };
  //   document.body.appendChild(script);
  // }, []);

  return isShowSnow ? (
    <Snowfall
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: '10000',
      }}
      snowflakeCount={200}
      speed={[0.3, 0.7]}
      opacity={[0.1, 0.4]}
      radius={[5, 20]}
      wind={[-0.5, 1]}
      images={images}
    />
  ) : null;
}
