import { useForm } from 'react-hook-form';
import { IFormInput } from '../../Interfaces/IForms';
import styles from '../SignUp/sign.module.css';
import { logInWithEmailAndPassword } from '../../Shared/firebase';

function SignIn() {
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
        <h4 className={styles.title}>Sign In</h4>

        <div className={styles.field}>
          <input
            placeholder="Email"
            {...register('email', { required: 'Email is required' })}
          />
        </div>
        {errors.email ? <p>{errors.email.message}</p> : null}

        <div className={styles.field}>
          <input
            placeholder="Password"
            type="password"
            {...register('password', { required: 'Password is required' })}
          />
        </div>
        {errors.password ? <p>{errors.password.message}</p> : null}

        <div className={styles.submit}>
          <button type="button" onClick={() => handleSubmit(onSubmit)()}>
            Sign In
          </button>
        </div>

        <div className={styles.registered}>
          <p>Don&apos;t Have an Account Yet?</p>
          <p className={styles.sign}>Sign Up</p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
