import Photo from '@components/Photo/Photo';
import { getImage } from '@lib/common/imageUtils';
import styles from './ProfileCard.module.scss';

//TODO: 因為引用的父層是 client component，所以 getImage 就無法使用
export default async function Image () {
  const { base64, img } = await getImage({
    src: 'https://avatars.githubusercontent.com/u/78122777?s=300&u=7675d6714c1d4fa2be2270c7c397a675842fc274&v=4',
  });

  return (
    <div className={styles.left}>
      <Photo {...img} alt="Profile picture" blurDataURL={base64} placeholder="blur" />
    </div>
  );
}
