'use client';

import { useState } from 'react';
import ModeToggle from '@components/ModeToggle/ModeToggle';
import { HEADER_LINKS } from '@constants/index';
import styles from '../Header.module.scss';

export default function Mobile () {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.mobile}>
      <Hamburger {...{ isActive, handleSwitch: () => setIsActive(!isActive) }} />
      <ModeToggle />
      <Menu {...{ isActive }} />
    </div>
  );
}

function Hamburger ({ isActive, handleSwitch }: { isActive: boolean; handleSwitch: () => void }) {
  return (
    <div className={`${styles.hamburger} ${isActive ? styles['is-active'] : ''}`} onClick={handleSwitch}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
}

function Menu ({ isActive }: { isActive: boolean }) {
  return (
    <div className={`${styles.menu} ${isActive ? '' : styles['hidden-mobile']}`}>
      {HEADER_LINKS.map(({ id, label, href }) => (
        <a key={id} href={`#${href}`}>
          {label}
        </a>
      ))}
    </div>
  );
}
