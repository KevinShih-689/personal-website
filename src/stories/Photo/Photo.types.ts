import { StaticImageData, ImageProps } from 'next/image';

export default interface PhotoProps extends ImageProps {
  /** Profile picture URL */
  src: string | StaticImageData;
  /** Profile picture alt text */
  alt: string;
}
