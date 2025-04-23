import Typography from '@components/Typography/Typography';
import styles from './page.module.scss';

export default function Home () {
  return (
    <div className={styles.home}>
      <Typography variant="h1" weight="regular">
        主標題
      </Typography>
      <h1>主標題</h1>
      <h2>置中的副標題</h2>
      <p>次要文字段落</p>
    </div>
  );
}
