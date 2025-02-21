import { StaticImageData } from 'next/image';

export default interface PhotoProps extends React.HTMLAttributes<HTMLImageElement> {
  /** Profile picture URL */
  src: string | StaticImageData;
  /** Profile picture alt text */
  alt: string;
};;;;;;;;;;
