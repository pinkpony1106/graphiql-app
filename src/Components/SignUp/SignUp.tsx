import { useForm } from 'react-hook-form';
import { IFormInput } from '../../Interfaces/IForms';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../Shared/validation';
import styles from './sign.module.css';
import { auth, registerWithEmailAndPassword } from '../../Shared/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';

function SignUp() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormInput) => {
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
        <h4 className={styles.title}>Sign Up</h4>
        <div className={styles.field}>
          <input placeholder="Your Name" {...register('name')} />
        </div>
        {errors.name ? <p>{errors.name.message}</p> : null}

        <div className={styles.field}>
          <input placeholder="Email" {...register('email')} />
        </div>
        {errors.email ? <p>{errors.email.message}</p> : null}

        <div className={styles.field}>
          <input
            placeholder="Password"
            type="password"
            {...register('password')}
          />
        </div>
        {errors.password ? <p>{errors.password.message}</p> : null}

        <div className={styles.field}>
          <input
            placeholder="Password Again"
            type="password"
            {...register('againPassword')}
          />
        </div>
        {errors.againPassword ? <p>{errors.againPassword.message}</p> : null}
        <div className={styles.submit}>
          <button type="submit">Sign Up</button>
        </div>
        <div className={styles.registered}>
          <p>Already registered?</p>
          <Link to={'/signIn'} className={styles.sign}>
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
