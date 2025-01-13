'use client';

import { useCallback } from 'react';
import { useTheme } from 'next-themes';
import IconButton from '@components/IconButton/IconButton';
import MoonIcon from '@icons/moon.svg';
import SunIcon from '@icons/sun.svg';

export default function ModeToggle () {
  const { theme, setTheme } = useTheme();

  const handleToggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  return (
    <IconButton onClick={handleToggle} size="large" color="primary">
      {theme === 'dark' ? <SunIcon fill="currentColor" /> : <MoonIcon fill="currentColor" />}
    </IconButton>
  );
}
