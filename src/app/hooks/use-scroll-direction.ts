import { useEffect, useRef, useState } from 'react';

type ScrollDirection = 'down' | 'up' | null;

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [isPageOnTop, setIsPageOnTop] = useState<boolean>(false);
  const firstRender = useRef(true);

  const HEIGHT = 250;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      setIsPageOnTop(!window.scrollY);

      let direction: ScrollDirection = scrollY > lastScrollY ? 'down' : 'up';
      direction = scrollY > HEIGHT ? direction : null;

      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    if (firstRender.current) {
      firstRender.current = false;
      updateScrollDirection();
    }


    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    }
  }, [scrollDirection, isPageOnTop]);

  return { scrollDirection, isPageOnTop };
};

export { useScrollDirection };