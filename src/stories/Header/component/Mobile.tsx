'use client';

import { memo } from 'react';
import ModeToggle from '@components/ModeToggle/ModeToggle';
import { HEADER_LINKS } from '@constants/index';
import useMobileHeader from '../hooks/useMobileHeader';
import styles from '../Header.module.scss';

export default function Mobile () {
  const { isOpen, handleSwitch } = useMobileHeader();
  return (
    <div className={styles.mobile}>
      <Hamburger {...{ isOpen, handleSwitch }} />
      <ModeToggle />
      <Menu isOpen={isOpen} />
    </div>
  );
}

const Hamburger = memo(({ isOpen, handleSwitch }: { isOpen: boolean; handleSwitch: () => void }) => {
  return (
    <div className={`${styles.hamburger} ${isOpen ? styles['is-open'] : ''}`} onClick={handleSwitch}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
});

const Menu = memo(({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className={`${styles.menu} ${isOpen ? '' : styles['hidden-mobile']}`}>
      {HEADER_LINKS.map(({ id, label, href }) => (
        <a key={id} href={`#${href}`}>
          {label}
        </a>
      ))}
    </div>
  );
});

Hamburger.displayName = 'Hamburger';
Menu.displayName = 'Menu';
