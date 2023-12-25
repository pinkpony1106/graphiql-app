import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import { useContext } from 'react';
import { TranslateContext, tKeys } from '../../Context/Context';

function Footer() {
  const { t } = useContext(TranslateContext);
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <span className={styles.label}> {t(tKeys.contacts)}</span>
        <Link to={'https://github.com/bogdanovich231'} target="blank">
          <span className={styles.text}> {t(tKeys.tania)}</span>
        </Link>
        <Link to={'https://github.com/annFromEarth'} target="blank">
          <span className={styles.text}> {t(tKeys.anna)}</span>
        </Link>
        <Link to={'https://github.com/pinkpony1106'} target="blank">
          <span className={styles.text}> {t(tKeys.julia)}</span>
        </Link>
      </div>
      <div className={styles.graphqlDocs}>
        <span className={styles.label}> {t(tKeys.to_graphiql_docs)}</span>
        <span className={styles.text}> {t(tKeys.copyright_2023)}</span>
      </div>
      <div>
        <Link to={'https://rs.school/'} target="blank">
          <img src="src/assets/rs-school-js 1.svg" alt="RSS logo"></img>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
