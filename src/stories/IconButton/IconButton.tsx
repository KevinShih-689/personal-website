'use client';

import styles from './IconButton.module.scss';
import IconButtonProps from './IconButton.types';

export default function IconButton ({ size = 'medium', color = 'info', onClick, children, ...props }: IconButtonProps) {
  return (
    <button className={`${styles.icon_button} ${styles[size]} ${styles[color]}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
