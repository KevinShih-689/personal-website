import ModeToggle from '@components/ModeToggle/ModeToggle';
import styles from './Header.module.scss';

export default function Header () {
  return (
    <div className={styles.header}>
      <h1>This is header 標題</h1>
      <a href="#home">首頁</a>
      <a href="#about">關於我</a>
      <a href="#collection">作品集</a>
      <ModeToggle />
    </div>
  );
}
