'use client';

import { memo } from 'react';
import styles from './IconButton.module.scss';
import IconButtonProps from './IconButton.types';

function IconButton ({ size = 'medium', color = 'info', onClick, children, ...props }: IconButtonProps) {
  return (
    <button className={`${styles.icon_button} ${styles[size]} ${styles[color]}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default memo(IconButton);
