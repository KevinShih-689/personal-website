import { getImage, ImageResponse } from '@lib/common/imageUtils';
import ProfileCardHeader from './ProfileCardHeader';
import Photo from '@components/Photo/Photo';

import { ProfileCardProps } from './ProfileCard.types';
import styles from './ProfileCard.module.scss';

export default async function ProfileCard ({}: ProfileCardProps) {
  const { img, base64 }: ImageResponse = await getImage({
    src: 'https://avatars.githubusercontent.com/u/78122777?s=300&u=7675d6714c1d4fa2be2270c7c397a675842fc274&v=4',
  });

  return (
    <div className={styles.tilt}>
      <ProfileCardHeader />
      <div className={styles.content}>
        <div className={styles.left}>
          <Photo {...img} blurDataURL={base64} alt="Profile picture" placeholder="blur" />
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
}
