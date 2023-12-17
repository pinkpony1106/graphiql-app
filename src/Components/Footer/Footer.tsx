import { Link } from 'react-router-dom';
import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.contacts}>
          <span className={styles.label}>Contact Us</span>
          <Link to={'https://github.com/bogdanovich231'} target="blank">
            <span className={styles.text}>Tatsiana Kulinkovich</span>
          </Link>
          <Link to={'https://github.com/annFromEarth'} target="blank">
            <span className={styles.text}>Anna Dvor</span>
          </Link>
          <Link to={'https://github.com/pinkpony1106'} target="blank">
            <span className={styles.text}>Julia Egorova</span>
          </Link>
        </div>
        <div className={styles.graphqlDocs}>
          <span className={styles.label}>GraphQL Docs</span>
          <span className={styles.text}>@copyright 2023</span>
        </div>
        <div>
          <Link to={'https://rs.school/'} target="blank">
            <img src="src/assets/rs-school-js 1.svg" alt="RSS logo"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
