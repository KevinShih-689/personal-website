'use client';

import ProfileCard from '@components/ProfileCard/ProfileCard';
import IconButton from '@components/IconButton/IconButton';
import styles from './page.module.scss';
import DownloadIcon from '@icons/download.svg';

export default function Home () {
  return (
    <div className={styles.home}>
      <ProfileCard />
      <IconButton
        onClick={() => {
          console.log('download');
        }}
        color="primary"
      >
        <DownloadIcon fill="currentColor" />
      </IconButton>
    </div>
  );
}
