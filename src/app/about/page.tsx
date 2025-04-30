import Typography from '@components/Typography/Typography';
import { HEADER_LINKS } from '@constants/ui';
import ProfileCard from './_components/ProfileCard/ProfileCard';
import styles from './styles.module.scss';

function HocSection ({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  );
}

export default async function About () {
  return (
    <div className={styles.container}>
      <section id="profile" className={styles.section}>
        <ProfileCard />
      </section>
      {HEADER_LINKS.map(({ id, label, href }) => (
        <HocSection key={id} id={href}>
          <Typography variant="h1">{label}</Typography>
        </HocSection>
      ))}
    </div>
  );
}
