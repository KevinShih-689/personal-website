import Typography from '@components/Typography/Typography';
import ProfileCard from './_components/ProfileCard/ProfileCard';
import styles from './styles.module.scss';

export default function About () {
  return (
    <div>
      <section id="home" className={styles.section}>
        <ProfileCard />
      </section>
      <section id="about" className={styles.section}>
        <Typography variant="h1">關於我</Typography>
      </section>
      <section id="collection" className={styles.section}>
        <Typography variant="h1">作品集</Typography>
      </section>
    </div>
  );
}
