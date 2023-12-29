import { useForm } from 'react-hook-form';
import { IFormInputSignIn } from '../../Interfaces/IForms';
import styles from '../SignUp/sign.module.css';
import { logInWithEmailAndPassword } from '../../Shared/firebase';
import { useContext } from 'react';
import { TranslateContext, tKeys } from '../../Context/Context';
import { schemaSignIn } from '../../Shared/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

function SignIn() {
  const { t } = useContext(TranslateContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputSignIn>({ resolver: yupResolver(schemaSignIn) });

  const onSubmit = async (data: IFormInputSignIn) => {
    console.log(data);
    const { email, password } = data;

    try {
      await logInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

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
