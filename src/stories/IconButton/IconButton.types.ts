import { ReactNode, ButtonHTMLAttributes } from 'react';

export default interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Size of the icon button */
  size?: 'small' | 'medium' | 'large';
  /** Color of the icon button */
  color?: 'info' | 'primary' | 'success' | 'warning' | 'error';
  /** Icon to display */
  children: ReactNode;
};;;;;;;;;;
