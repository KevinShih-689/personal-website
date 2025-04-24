'use client';

import ModeToggle from '@components/ModeToggle/ModeToggle';
import useHeader from './hooks/useHeader';
import styles from './Header.module.scss';

export default function Header () {
  const { sentinelRef, isHeaderVisible } = useHeader();

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
