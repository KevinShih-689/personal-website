import { useMemo } from 'react';
import Image from 'next/image';
import { getBlurDataURL } from '@lib/common/imageUtils';
import PhotoProps from './Photo.types';
import styles from './Photo.module.scss';

export default function Photo ({ src, alt, ...props }: PhotoProps) {
  const blurDataURL: { blurDataURL: string } | object = useMemo(async () => {
    if (typeof src === 'object' && 'src' in src) return {};
    return {
      blurDataURL: await getBlurDataURL(src),
    };
  }, [src]);

  return (
    <Image
      src={src}
      alt={alt}
      className={styles.photo}
      loading="lazy"
      placeholder="blur"
      fill
      {...props}
      {...blurDataURL}
    />
  );
}
