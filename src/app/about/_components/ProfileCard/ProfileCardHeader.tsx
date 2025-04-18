'use client';

import IconButton from '@components/IconButton/IconButton';
import DownloadIcon from '@icons/download.svg';
import styles from './ProfileCard.module.scss';

export default function ProfileCardHeader () {
  return (
    <div className={styles.header}>
      <IconButton color="primary" onClick={() => console.log('clicked')}>
        <DownloadIcon fill="currentColor" />
      </IconButton>
    </div>
  );
}
