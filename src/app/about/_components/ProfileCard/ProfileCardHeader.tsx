'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTheme } from 'next-themes';
import IconButton from '@components/IconButton/IconButton';
import DownloadIcon from '@icons/download.svg';
import globalStyles from '@app/variables.module.scss';
import styles from './ProfileCard.module.scss';

export default function ProfileCardHeader () {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  const iconColor = useMemo(() => {
    return theme === 'dark' ? globalStyles.secondaryLightest : globalStyles.gray200;
  }, [theme]);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className={styles.loader} />;

  return (
    <div className={styles.header}>
      <IconButton color="primary" size="large" onClick={() => console.log('clicked')}>
        <DownloadIcon fill={iconColor} />
      </IconButton>
    </div>
  );
}
