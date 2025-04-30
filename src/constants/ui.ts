export const HEADER_LINKS: { id: number; label: string; href: string }[] = [
  {
    id: 1,
    label: 'Profile',
    href: 'profile',
  },
  {
    id: 2,
    label: 'Skills',
    href: 'skills',
  },
  {
    id: 3,
    label: 'Projects',
    href: 'projects',
  },
  {
    id: 4,
    label: 'Experience',
    href: 'experience',
  },
  {
    id: 5,
    label: 'Contact',
    href: 'contact',
  },
];

export type MediaQueryType = {
  query: string;
  device: 'mobile' | 'tablet' | 'desktop';
};

export const MEDIA_QUERY: MediaQueryType[] = [
  {
    query: '(max-width: 767px)',
    device: 'mobile',
  },
  {
    query: '(min-width: 768px) and (max-width: 1023px)',
    device: 'tablet',
  },
  {
    query: '(min-width: 1024px)',
    device: 'desktop',
  },
];
