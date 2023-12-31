import { useForm } from 'react-hook-form';
import {useContext} from 'react';
import { IFormInputSignIn } from '../../Interfaces/IForms';
import styles from '../SignUp/sign.module.css';
import { auth, logInWithEmailAndPassword } from '../../Shared/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { TranslateContext, tKeys } from '../../Context/Context';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSignIn } from '../../Shared/validation';

function SignIn() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const { t } = useContext(TranslateContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputSignIn>({ resolver: yupResolver(schemaSignIn) });

  const onSubmit = async (data: IFormInputSignIn) => {
    const { email, password } = data;
    try {
      await logInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/graph-ql');
  }, [user, loading]);

  return (
    <div className={styles.container}>
      <form>
        <h4 className={styles.title}>{t(tKeys.signIn)}</h4>

        <div className={styles.field}>
          <input
            placeholder={t(tKeys.email)}
            {...register('email', { required: true })}
          />
        </div>
        {errors.email?.message ? <p>{t(errors.email.message)}</p> : null}

        <div className={styles.field}>
          <input
            placeholder={t(tKeys.password)}
            type="password"
            {...register('password', { required: true })}
          />
        </div>
        {errors.password?.message ? <p>{t(errors.password.message)}</p> : null}

        <div className={styles.submit}>
          <button type="button" onClick={() => handleSubmit(onSubmit)()}>
            {t(tKeys.signIn)}
          </button>
        </div>

        <div className={styles.registered}>
          <p className={styles.already_registered}>
            {t(tKeys.have_an_account)}
          </p>
          <Link to={'/signUp'}>
            <p className={styles.sign}>{t(tKeys.signUp)}</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
