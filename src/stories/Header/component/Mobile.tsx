'use client';

import { useState } from 'react';
import styles from '../Header.module.scss';

export default function Mobile () {
  return (
    <div className={styles.mobile}>
      <Hamburger />
    </div>
  );
}

function Hamburger () {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`${styles.hamburger} ${isActive ? styles['is-active'] : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
}
