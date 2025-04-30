import { useState, useEffect } from 'react';
import throttle from '@utils/throttle';

export default function useMobileHeader () {
  const [isOpen, setIsOpen] = useState(false);

  const scrollThrottle = throttle<boolean>((isVisible) => {
    setIsOpen(isVisible);
  }, 400);

  const handleSwitch = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScrollEvent = () => scrollThrottle(false);

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, [scrollThrottle]);

  return { isOpen, handleSwitch };
}
