import { useForm } from 'react-hook-form';
import { IFormInput } from '../../Interfaces/IForms';
import styles from '../SignUp/sign.module.css';
import { auth, logInWithEmailAndPassword } from '../../Shared/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';

function SignIn() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
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
          <Link to={'/signUp'} className={styles.sign}>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
