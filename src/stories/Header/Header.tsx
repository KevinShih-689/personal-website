import ModeToggle from '@components/ModeToggle/ModeToggle';
import styles from './Header.module.scss';

export default function Header () {
  return (
    <div className={styles.header}>
      <h1>This is header</h1>
      <ModeToggle />
    </div>
  );
}
