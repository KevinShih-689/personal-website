'use client';

import { useState, useRef, useEffect } from 'react';
import ModeToggle from '@components/ModeToggle/ModeToggle';
import styles from './Header.module.scss';

export default function Header () {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      //TODO: Need to use throttle to prevent too many re-renders
      ([entry]) => setIsHeaderVisible(entry.isIntersecting),
      {
        root: null,
        threshold: 1.0,
      }
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} />
      <div className={`${styles.header} ${isHeaderVisible ? '' : styles.hidden}`}>
        <a href="#home">資訊</a>
        <a href="#about">能力</a>
        <a href="#projects">專案</a>
        <a href="#experience">經驗</a>
        <a href="#contact">聯絡</a>
        <ModeToggle />
      </div>
    </>
  );
}
