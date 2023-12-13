import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.contacts}>
          <span className={styles.label}>Contact Us</span>
          <a href="https://github.com/bogdanovich231" target="blank">
            <span className={styles.text}>Tatsiana Kulinkovich</span>
          </a>
          <a href="https://github.com/annFromEarth" target="blank">
            <span className={styles.text}>Anna Dvor</span>
          </a>
          <a href="https://github.com/pinkpony1106" target="blank">
            <span className={styles.text}>Julia Egorova</span>
          </a>
        </div>
        <div className={styles.graphqlDocs}>
          <span className={styles.label}>GraphQL Docs</span>
          <span className={styles.text}>@copyright 2023</span>
        </div>
        <div>
          <a href="https://rs.school/" target="blank">
            <img src="src/assets/rs-school-js 1.svg"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
