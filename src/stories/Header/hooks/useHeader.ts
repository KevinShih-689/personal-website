import { useState, useRef, useEffect } from 'react';
import throttle from '@lib/common/throttle';

export default function useHeader () {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const scrollThrottle = throttle<boolean>((isVisible) => {
    setIsHeaderVisible(isVisible);
  }, 600);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => scrollThrottle(entry.isIntersecting), {
      root: null,
      threshold: 1.0,
    });

    const handleScrollEvent = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      scrollThrottle(isScrollingUp);
      lastScrollY.current = currentScrollY;
    };

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [scrollThrottle]);

  return { isHeaderVisible, sentinelRef };
}
