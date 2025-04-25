'use client';

import { useState } from 'react';
import styles from '../Header.module.scss';

export default function Mobile () {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.mobile}>
      <div
        className={`${styles.hamburger} ${isActive ? styles['is-active'] : ''}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
    </div>
  );
}
