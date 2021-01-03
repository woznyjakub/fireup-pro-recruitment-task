import styles from './Hamburger.module.scss';

export interface HamburgerProps {
  isActive: boolean;
  onClick: () => any;
}

const Hamburger: React.FC<HamburgerProps> = ({ isActive, onClick }) => {
  return (
    <button className={[styles.hamburger, isActive ? styles.active : ''].join(' ')} onClick={onClick}>
      <span className={styles.linesWrapper}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </span>
    </button>
  );
};

export default Hamburger;
