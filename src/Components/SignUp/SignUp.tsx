import { useForm } from 'react-hook-form';
import { IFormInputSignUp } from '../../Interfaces/IForms';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './sign.module.css';
import { auth, registerWithEmailAndPassword } from '../../Shared/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useContext } from 'react';
import { TranslateContext, tKeys } from '../../Context/Context';
import { schema } from '../../Shared/validation';

function SignUp() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const { t } = useContext(TranslateContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputSignUp>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormInputSignUp) => {
    const { name, email, password } = data;
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/graph-ql');
  }, [user, loading]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className={styles.title}>{t(tKeys.signUp)}</h4>
        <div className={styles.field}>
          <input
            placeholder={t(tKeys.name)}
            {...register('name')}
          />
        </div>
        {errors.name?.message ? <p>{t(errors.name.message)}</p> : null}

        <div className={styles.field}>
          <input
            placeholder={t(tKeys.email)}
            {...register('email')}
          />
        </div>
        {errors.email?.message ? <p>{t(errors.email.message)}</p> : null}

        <div className={styles.field}>
          <input
            placeholder={t(tKeys.password)}
            type="password"
            {...register('password')}
          />
        </div>
        {errors.password?.message ? <p>{t(errors.password.message)}</p> : null}

        <div className={styles.field}>
          <input
            placeholder={t(tKeys.password_again)}
            type="password"
            {...register('againPassword')}
          />
        </div>
        {errors.againPassword?.message ? (
          <p>{t(errors.againPassword.message)}</p>
        ) : null}
        <div className={styles.submit}>
          <button type="submit">{t(tKeys.signUp)}</button>
        </div>
        <div className={styles.registered}>
          <p className={styles.already_registered}>{t(tKeys.registered)}</p>
          <Link to={'/signIn'}>
            <p className={styles.sign}>{t(tKeys.signIn)}</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
