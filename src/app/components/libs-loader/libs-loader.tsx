'use client';

import { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall'
import 'aos/dist/aos.css';

export default function LibsLoader() {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const isShowSnow = [11, 0, 1].includes(month) || (month === 2 && day <= 28);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [snowflakeCount, setSnowflakeCount] = useState(200);

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

    const updateSnowflakeCount = () => {
      const screenWidth = window.innerWidth;
      const count = Math.min(75 + Math.floor((screenWidth - 400) / 1400 * 125), 200);
      setSnowflakeCount(Math.max(count, 75));
    };

    updateSnowflakeCount();
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
      snowflakeCount={snowflakeCount}
      speed={[0.3, 0.7]}
      opacity={[0.1, 0.4]}
      radius={[5, 20]}
      wind={[-0.5, 1]}
      images={images}
    />
  ) : null;
}
