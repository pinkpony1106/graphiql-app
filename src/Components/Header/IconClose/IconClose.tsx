import styles from './IconClose.module.css';

function IconClose({ onClick }: { onClick: () => void }) {
  return <div className={styles.iconClose} onClick={onClick} />;
}

export default IconClose;
