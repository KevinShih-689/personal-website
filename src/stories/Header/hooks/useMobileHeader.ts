import { useState, useRef, useEffect } from 'react';
import throttle from '@utils/throttle';

export default function useMobileHeader () {
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);
  const isOpenRef = useRef(isOpen);

  const scrollThrottle = throttle<boolean>((isVisible) => {
    setIsOpen(isVisible);
  }, 400);

  const handleSwitch = () => setIsOpen(!isOpen);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    const handleScrollEvent = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      if (isScrollingDown && isOpenRef.current) scrollThrottle(false);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, [scrollThrottle]);

  return { isOpen, handleSwitch };
}
