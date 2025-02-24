import ProfileCard from '@components/ProfileCard/ProfileCard';
import styles from './page.module.scss';
import Photo from '@components/Photo/Photo';
import { getImage } from '@lib/common/imageUtils';

export default async function Home () {
  const { base64, img } = await getImage({
    src: 'https://avatars.githubusercontent.com/u/78122777?s=80&u=7675d6714c1d4fa2be2270c7c397a675842fc274&v=4',
  });

  return (
    <div className={styles.home}>
      <Photo {...img} alt="Profile picture" blurDataURL={base64} placeholder="blur" />
      <ProfileCard />
    </div>
  );
}
