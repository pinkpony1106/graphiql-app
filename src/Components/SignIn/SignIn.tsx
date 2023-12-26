import { useForm } from 'react-hook-form';
import { IFormInput } from '../../Interfaces/IForms';
import styles from '../SignUp/sign.module.css';
import { logInWithEmailAndPassword } from '../../Shared/firebase';
import { useContext } from 'react';
import { TranslateContext, tKeys } from '../../Context/Context';

function SignIn() {
  const { t } = useContext(TranslateContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
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
            {...register('email', { required: t(tKeys.emailRequired) })}
          />
        </div>
        {errors.email ? <p>{errors.email.message}</p> : null}

        <div className={styles.field}>
          <input
            placeholder={t(tKeys.password)}
            type="password"
            {...register('password', { required: t(tKeys.passwordRequired) })}
          />
        </div>
        {errors.password ? <p>{errors.password.message}</p> : null}

        <div className={styles.submit}>
          <button type="button" onClick={() => handleSubmit(onSubmit)()}>
            {t(tKeys.signIn)}
          </button>
        </div>

        <div className={styles.registered}>
          <p>{t(tKeys.have_an_account)}</p>
          <p className={styles.sign}>{t(tKeys.signUp)}</p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
