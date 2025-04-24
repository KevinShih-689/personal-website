'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTheme } from 'next-themes';
import IconButton from '@components/IconButton/IconButton';
import MoonIcon from '@icons/moon.svg';
import SunIcon from '@icons/sun.svg';
import globalStyles from '@app/variables.module.scss';
import styles from './ModeToggle.module.scss';

export default function ModeToggle () {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleToggle = useCallback(() => setTheme(theme === 'dark' ? 'light' : 'dark'), [theme, setTheme]);
  const iconColor = useMemo(
    () => (theme === 'dark' ? globalStyles.textPrimaryDark : globalStyles.textPrimary),
    [theme]
  );

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className={styles.loader} />;

  return (
    <>
      {/* <div className={styles.loader} /> */}
      <IconButton onClick={handleToggle} size="large" color="primary">
        {theme === 'dark' ? <SunIcon fill={iconColor} /> : <MoonIcon fill={iconColor} />}
      </IconButton>
    </>
  );
}
