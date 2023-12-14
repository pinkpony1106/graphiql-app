import { useForm } from "react-hook-form";
import { IFormInput } from "../../Interfaces/IForms";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../Shared/validation";
import styles from '../SignUp/sign.module.css';
import {
  logInWithEmailAndPassword,
} from "../../Shared/firebase";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });


  const onSubmit = async (data: IFormInput) => {
    const { email, password } = data;
    await logInWithEmailAndPassword(email, password);
  };


  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className={styles.title}>Sign In</h4>

        <div className={styles.field}>
          <input placeholder="Email" {...register("email", { required: true })} />
        </div>
        {errors.email && <p>{errors.email.message}</p>}

        <div className={styles.field}>
          <input
            placeholder="Password"
            type="password"
            {...register("password", { required: "Password is required" })}
          />
        </div>
        {errors.password && <p>{errors.password.message}</p>}
        <div className={styles.submit}>
          <button type="submit">Sign In</button>
        </div>
        <div className={styles.registered}>
          <p>Don t Have an Account Yet?</p>
          <p className={styles.sign}>Sign Up</p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
