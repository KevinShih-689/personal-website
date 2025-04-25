'use client';

import ModeToggle from '@components/ModeToggle/ModeToggle';
import { HEADER_LINKS } from '@constants/index';
import useHeader from './hooks/useHeader';
import styles from './Header.module.scss';

//TODO: 手機裝置要改為下拉選單
export default function Header () {
  const { sentinelRef, isHeaderVisible } = useHeader();

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} />
      <div className={`${styles.header} ${isHeaderVisible ? '' : styles.hidden}`}>
        {HEADER_LINKS.map(({ label, href }, index) => (
          <>
            <a href={`#${href}`}>{label}</a>
            {index !== HEADER_LINKS.length - 1 && <span>|</span>}
          </>
        ))}
        <ModeToggle />
      </div>
    </>
  );
}
