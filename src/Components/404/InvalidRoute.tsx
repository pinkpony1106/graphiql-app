import { Link } from 'react-router-dom';
import styles from './InvalidRoute.module.css';

function InvalidRoute() {
  return (
    <>
      <div className={styles.error}>
        <span className={styles.notfound}>404 </span>
        <span>Oops!</span>
        <span>The page you are looking for could not be found! </span>
        <span>Please, go back to previous page.</span>
        <Link to={'/'}>
          <button className={styles.goBack}>Go Back</button>
        </Link>
      </div>
    </>
  );
}

export default InvalidRoute;
