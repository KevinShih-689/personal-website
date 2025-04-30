'use client';

import { useState } from 'react';
import styles from '../Header.module.scss';

export default function Mobile () {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.mobile}>
      <Hamburger {...{ isActive, handleSwitch: () => setIsActive(!isActive) }} />
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
