import { HTMLAttributes } from 'react';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'a' | 'caption' | 'small';

export type TypographyWeight = 'bold' | 'semibold' | 'regular';

export type TypographyColor =
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'textTertiary'
  | 'textDisabled'
  | 'textInverse'
  | 'success'
  | 'warning'
  | 'error';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: TypographyVariant;
  children: React.ReactNode;
  color?: TypographyColor;
  weight?: TypographyWeight;
}
