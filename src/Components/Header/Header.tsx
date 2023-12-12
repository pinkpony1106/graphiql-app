import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} />
      <div className={styles.title}>GraphQL</div>
      <div className={styles.home}>Home</div>
      <button className={styles.signIn}>Sign In</button>
      <button className={styles.signUp}>Sign Up</button>
      <div className={styles.dropdown}>
        <button className={styles.lang}>
          <p>English</p>
          <img />
        </button>
      </div>
    </div>
  );
}

export default Header;
