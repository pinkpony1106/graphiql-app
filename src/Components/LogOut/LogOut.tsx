import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Shared/firebase';
import { TranslateContext, tKeys } from '../../Context/Context';
import { useContext } from 'react';
import styles from './logout.module.css';

function LogOut() {
  const navigate = useNavigate();
  const { t } = useContext(TranslateContext);

  const logout = () => {
    signOut(auth);
    navigate('/');
  };
  return (
    <button className={styles.button} onClick={logout}>
      {t(tKeys.logOut)}
    </button>
  );
}

export default LogOut;
