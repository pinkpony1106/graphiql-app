import * as yup from 'yup';
import { tKeys } from '../Context/Context';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required(tKeys.nameRequired)
    .matches(/^[A-Z]/, tKeys.nameMatches),
  email: yup.string().email(tKeys.emailInvalid).required(tKeys.emailRequired),
  password: yup
    .string()
    .required(tKeys.passwordRequired)
    .min(8, tKeys.passwordMinCharacters)
    .test('password', function (value: string = ''):
      | true
      | yup.ValidationError {
      const lowercaseRegex = /[a-z]/;
      const uppercaseRegex = /[A-Z]/;
      const numberRegex = /[0-9]/;
      const symbolRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]/; //eslint-disable-line

      const errors = [];

      if (!lowercaseRegex.test(value)) errors.push(tKeys.passwordOneLowerCase);
      if (!uppercaseRegex.test(value)) errors.push(tKeys.passwordOneCapital);
      if (!numberRegex.test(value)) errors.push(tKeys.passwordOneDigit);
      if (!symbolRegex.test(value)) errors.push(tKeys.passwordOneSpecial);

      if (errors.length > 0) {
        return this.createError({
          message: `password:  ${
            4 - errors.length
          }/4: password must contain at least ${errors.join(', ')}`,
        });
      }
      return true;
    }),
  againPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'The passwords dont match '),
});

export const schemaSignIn = yup.object().shape({
  email: yup.string().email(tKeys.emailInvalid).required(tKeys.emailRequired),
  password: yup.string().required(tKeys.passwordRequired),
});
