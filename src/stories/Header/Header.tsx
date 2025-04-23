import ModeToggle from '@components/ModeToggle/ModeToggle';
import styles from './Header.module.scss';

export default function Header () {
  return (
    <div className={styles.header}>
      <a href="#home">資訊</a>
      <a href="#about">能力</a>
      <a href="#projects">專案</a>
      <a href="#experience">經驗</a>
      <a href="#contact">聯絡</a>
      <ModeToggle />
    </div>
  );
}
