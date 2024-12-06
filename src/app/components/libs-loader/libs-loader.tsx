'use client';

import { useEffect } from 'react';
import Snowfall from 'react-snowfall'
import 'aos/dist/aos.css';

export default function LibsLoader() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        once: true,
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
      });
    });
  }, []);

  const isShowSnow = true;

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
      wind={[-0.5, 1]}
    />
  ) : null;
}
