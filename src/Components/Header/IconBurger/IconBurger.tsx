import styles from './IconBurger.module.css';

function IconBurger({ onClick }: { onClick: () => void }) {
  return (
    <div className={styles.burgerIcon} onClick={onClick}>
      <div />
      <div />
      <div />
    </div>
  );
}

export default IconBurger;
