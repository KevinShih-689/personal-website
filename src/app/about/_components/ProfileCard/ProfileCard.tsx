'use client';

import { Tilt } from '@jdion/tilt-react';
import IconButton from '@components/IconButton/IconButton';
import DownloadIcon from '@icons/download.svg';
import ImageComponent from './Image';
import { ProfileCardProps } from './ProfileCard.types';
import styles from './ProfileCard.module.scss';

export default function ProfileCard ({}: ProfileCardProps) {
  return (
    <Tilt className={styles.tilt}>
      <div className={styles.header}>
        <IconButton color="primary" onClick={() => console.log('clicked')}>
          <DownloadIcon fill="currentColor" />
        </IconButton>
      </div>
      <div className={styles.content}>
        <ImageComponent />
        <div className={styles.right}></div>
      </div>
    </Tilt>
  );
}
