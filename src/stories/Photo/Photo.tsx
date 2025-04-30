import Image from 'next/image';
import PhotoProps from './Photo.types';
import styles from './Photo.module.scss';

export default function Photo ({ src, alt, ...props }: PhotoProps) {
  return <Image src={src} alt={alt} className={styles.photo} loading="lazy" {...props} />;
}
