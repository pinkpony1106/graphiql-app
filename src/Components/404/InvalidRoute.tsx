import { Link } from 'react-router-dom';
import styles from './invalidRoute.module.css';
import { TranslateContext, tKeys } from '../../Context/Context';
import { useContext } from 'react';

function InvalidRoute() {
  const { t } = useContext(TranslateContext);
  return (
    <>
      <div className={styles.error}>
        <span className={styles.notfound}>404 </span>
        <span>{t(tKeys.oops)}</span>
        <span>{t(tKeys.notFound)}</span>
        <span>{t(tKeys.goBackPrevious)}</span>
        <Link to={'/'}>
          <button className={styles.goBack}>{t(tKeys.goBack)}</button>
        </Link>
      </div>
    </>
  );
}

export default InvalidRoute;
