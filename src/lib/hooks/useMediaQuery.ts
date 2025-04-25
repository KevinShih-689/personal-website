'use client';

import { useState, useEffect } from 'react';
import { MEDIA_QUERY, MediaQueryType } from '@constants/index';

export default function useMediaQuery (): MediaQueryType['device'] | null {
  const [device, setDevice] = useState<MediaQueryType['device'] | null>(null);

  useEffect(() => {
    const mediaQueryLists = MEDIA_QUERY.map(({ ...deviceItem }: MediaQueryType) => ({
      ...deviceItem,
      mediaQuery: window.matchMedia(deviceItem.query),
    }));

    const handleUpdateDevice = () => {
      const matched = mediaQueryLists.find(({ mediaQuery }) => mediaQuery.matches);
      setDevice(matched ? matched.device : null);
    };

    handleUpdateDevice();

    mediaQueryLists.forEach(({ mediaQuery }) => {
      mediaQuery.addEventListener('change', handleUpdateDevice);
    });

    return () => {
      mediaQueryLists.forEach(({ mediaQuery }) => {
        mediaQuery.removeEventListener('change', handleUpdateDevice);
      });
    };
  }, []);

  return device;
}
