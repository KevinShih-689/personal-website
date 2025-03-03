import styles from './Typography.module.scss';
import { TypographyProps, TypographyVariant } from './Typography.types';
import { createElement } from 'react';

export default function Typography ({
  variant,
  color = 'textPrimary',
  weight = 'regular',
  children,
  ...props
}: TypographyProps) {
  const Component = getComponent(variant);
  const textBold = `text-${weight}`;

  return createElement(
    Component,
    {
      ...props,
      className: `${styles.typography} ${styles[color]} ${textBold}`,
    },
    children
  );
}

function getComponent (variant: TypographyProps['variant']): TypographyVariant {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'p':
      return 'p';
    case 'a':
      return 'a';
    case 'caption':
      return 'caption';
    case 'small':
      return 'small';
    default:
      return 'p';
  }
}
