'use client';

import useMediaQuery from '@lib/hooks/useMediaQuery';
import Desktop from './component/Desktop';
import Mobile from './component/Mobile';

export default function Header() {
  //TODO: Use userAgent to get device type 'mobile', 'tablet', 'console', 'smarttv'??
  const device = useMediaQuery();

  if (!device) return null;

  return <>{device === 'mobile' ? <Mobile /> : <Desktop />}</>;
}
