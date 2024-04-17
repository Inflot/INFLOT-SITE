'use client';

import { useEffect } from 'react';
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

    // const timer = setTimeout(() => {
    //   document
    //     .getElementById('vibratingTextDamped')
    //     ?.classList.add('text-vibrate');
    // }, 3700);

    // return () => clearTimeout(timer);
  }, []);

  return <></>;
}
