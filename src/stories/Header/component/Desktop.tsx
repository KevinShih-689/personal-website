'use client';

import ModeToggle from '@components/ModeToggle/ModeToggle';
import { HEADER_LINKS } from '@constants/index';
import styles from '../Header.module.scss';
import useHeader from '../hooks/useHeader';

export default function Desktop () {
  const { sentinelRef, isHeaderVisible } = useHeader();

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} />
      <div className={`${styles.desktop} ${isHeaderVisible ? '' : styles.hidden}`}>
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
