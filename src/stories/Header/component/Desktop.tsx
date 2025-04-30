'use client';

import ModeToggle from '@components/ModeToggle/ModeToggle';
import { HEADER_LINKS } from '@constants/index';
import useDesktopHeader from '../hooks/useDesktopHeader';
import styles from '../Header.module.scss';

export default function Desktop () {
  const { sentinelRef, isHeaderVisible } = useDesktopHeader();

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} />
      <div className={`${styles.desktop} ${isHeaderVisible ? '' : styles['hidden-desktop']}`}>
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
