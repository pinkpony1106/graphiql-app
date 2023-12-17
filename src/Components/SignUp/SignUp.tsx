import { useForm } from 'react-hook-form';
import { IFormInput } from '../../Interfaces/IForms';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../Shared/validation';
import styles from './sign.module.css';
import { registerWithEmailAndPassword } from '../../Shared/firebase';

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormInput) => {
    const { name, email, password } = data;
    registerWithEmailAndPassword(name, email, password);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className={styles.title}>Sign Up</h4>
        <div className={styles.field}>
          <input
            placeholder="Your Name"
            {...register('name', { required: true })}
          />
        </div>
        {errors.name ? <p>{errors.name.message}</p> : null}

        <div className={styles.field}>
          <input
            placeholder="Email"
            {...register('email', { required: true })}
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

        <div className={styles.field}>
          <input
            placeholder="Password Again"
            type="password"
            {...register('againPassword', {
              required: 'Confirm Password is required',
            })}
          />
        </div>
        {errors.againPassword ? <p>{errors.againPassword.message}</p> : null}
        <div className={styles.submit}>
          <button type="submit">Sign Up</button>
        </div>
        <div className={styles.registered}>
          <p>Already registered?</p>
          <p className={styles.sign}>Sign In</p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
