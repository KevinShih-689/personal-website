'use client';

import ProfileCard from '@components/ProfileCard/ProfileCard';
import IconButton from '@components/IconButton/IconButton';
import styles from './page.module.scss';
import GithubIcon from '@icons/github.svg';
import LinkedInIcon from '@icons/linkedIn.svg';
import CakeResumeIcon from '@icons/cakeResume.svg';

export default function Home () {
  return (
    <div className={styles.home}>
      <ProfileCard />
      <IconButton
        onClick={() => {
          console.log('download');
        }}
        color="primary"
        size="medium"
      >
        <GithubIcon fill="currentColor" />
      </IconButton>
      <IconButton
        onClick={() => {
          console.log('send');
        }}
        color="primary"
        size="medium"
      >
        <LinkedInIcon fill="currentColor" />
      </IconButton>
      <IconButton
        onClick={() => {
          console.log('send');
        }}
        color="primary"
        size="medium"
      >
        <CakeResumeIcon fill="currentColor" />
      </IconButton>
    </div>
  );
}
