import * as yup from "yup";

export const schema = yup.object().shape({
    name: yup
        .string()
        .required("Name is a required field")
        .matches(/^[A-Z]/, "Name must start with an uppercase letter"),
    email: yup
        .string()
        .email("Invalid email format")
        .required("Email is a required field"),
    password: yup
        .string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters")
        .test('password', function (value: string = ''):
            | true
            | yup.ValidationError {
            const lowercaseRegex = /[a-z]/;
            const uppercaseRegex = /[A-Z]/;
            const numberRegex = /[0-9]/;
            const symbolRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]/;

            const errors = [];

            if (!lowercaseRegex.test(value))
                errors.push('one lowercase letter in latin');
            if (!uppercaseRegex.test(value))
                errors.push('one capital letter in latin');
            if (!numberRegex.test(value)) errors.push('one digit');
            if (!symbolRegex.test(value)) errors.push('one special character');

            if (errors.length > 0) {
                return this.createError({
                    message: `password:  ${4 - errors.length
                        }/4: password must contain at least ${errors.join(', ')}`,
                });
            }
            return true;
        }),
    againPassword: yup
        .string()
        .oneOf([yup.ref("password")], "The passwords dont match "),
});