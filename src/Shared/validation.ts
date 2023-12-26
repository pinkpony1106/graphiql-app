import { useContext } from 'react';
import * as yup from 'yup';
import { TranslateContext, tKeys } from '../Context/Context';

export const useTranslatedSchema = () => {
  const { t } = useContext(TranslateContext);

  return yup.object().shape({
    name: yup
      .string()
      .required(t(tKeys.nameRequired))
      .matches(/^[A-Z]/, t(tKeys.nameMatches)),
    email: yup
      .string()
      .email(t(tKeys.emailInvalid))
      .required(t(tKeys.emailRequired)),
    password: yup
      .string()
      .required(t(tKeys.passwordRequired))
      .min(8, t(tKeys.passwordMinCharacters))
      .test('password', function (value: string = ''):
        | true
        | yup.ValidationError {
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const numberRegex = /[0-9]/;
        const symbolRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]/; //eslint-disable-line

        const errors = [];

        if (!lowercaseRegex.test(value))
          errors.push(t(tKeys.passwordOneLowerCase));
        if (!uppercaseRegex.test(value))
          errors.push(t(tKeys.passwordOneCapital));
        if (!numberRegex.test(value)) errors.push(t(tKeys.passwordOneDigit));
        if (!symbolRegex.test(value)) errors.push(t(tKeys.passwordOneSpecial));

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
};
